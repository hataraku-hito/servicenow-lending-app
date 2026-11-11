// Business rule logic for the equipment lending app.
// Tables: x_2301476_lending_equipment (equipment) / x_2301476_lending_loan (loans).
// Each function is bound to a BusinessRule in src/fluent/lending.now.ts.
// Server modules cannot use bare Glide globals; import them explicitly.
import { GlideRecord, GlideDateTime, gs } from '@servicenow/glide'

// Before insert on a loan: if the return deadline is empty, set it to
// (lent date + the equipment's max lending days).
export function setDueDate(current) {
    if (!current.getValue('due_on')) {
        var equipment = new GlideRecord('x_2301476_lending_equipment');
        if (!equipment.get(current.getValue('equipment'))) {
            return;
        }
        var maxDays = parseInt(equipment.getValue('max_days'), 10);
        if (isNaN(maxDays) || maxDays <= 0) {
            maxDays = 7;
        }
        var due = new GlideDateTime(current.getValue('lent_at'));
        due.addDaysLocalTime(maxDays);
        current.setValue('due_on', due);
    }
}

// Before insert on a loan: block lending when the equipment is under
// maintenance or already lent out to someone.
// Note: a query-then-insert check cannot be fully atomic. Two inserts in
// the same instant could both pass; strict serialization would need a
// lock table, which is out of scope for this app. The equipment status is
// deliberately NOT used as the guard here: it is a denormalized copy that
// can diverge from the loan records (e.g. after a loan is deleted
// directly), and trusting it would reject legitimate loans. The active
// loan query below stays the single source of truth.
export function preventDoubleLoan(current) {
    var equipmentId = current.getValue('equipment');

    var equipment = new GlideRecord('x_2301476_lending_equipment');
    if (!equipment.get(equipmentId)) {
        // Reject loans whose equipment reference cannot be resolved, no
        // matter which path created them (portal, Table API, import).
        gs.addErrorMessage('指定された備品が存在しないため、貸出できません。');
        current.setAbortAction(true);
        return;
    }
    if (equipment.getValue('status') === 'maintenance') {
        gs.addErrorMessage('この備品はメンテナンス中のため、貸出できません。');
        current.setAbortAction(true);
        return;
    }

    var loan = new GlideRecord('x_2301476_lending_loan');
    loan.addQuery('equipment', equipmentId);
    loan.addQuery('state', 'lent');
    loan.query();
    if (loan.hasNext()) {
        gs.addErrorMessage('この備品はすでに貸出中です。');
        current.setAbortAction(true);
    }
}

// After insert/update on a loan: keep the equipment's status in sync
// with whether an active loan exists for it.
export function syncEquipmentStatus(current) {
    var equipmentId = current.getValue('equipment');

    var loan = new GlideRecord('x_2301476_lending_loan');
    loan.addQuery('equipment', equipmentId);
    loan.addQuery('state', 'lent');
    loan.query();
    var nextStatus = loan.hasNext() ? 'lent' : 'available';

    var equipment = new GlideRecord('x_2301476_lending_equipment');
    if (equipment.get(equipmentId) && equipment.getValue('status') !== 'maintenance') {
        equipment.setValue('status', nextStatus);
        equipment.update();
    }
}
