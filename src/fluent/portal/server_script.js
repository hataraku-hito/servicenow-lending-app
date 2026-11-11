(function () {
    var EQUIPMENT_TABLE = 'x_2301476_lending_equipment';
    var LOAN_TABLE = 'x_2301476_lending_loan';
    var userId = gs.getUserID();

    data.error = '';

    if (input && input.action === 'lend' && input.equipment_id) {
        lend(input.equipment_id);
    } else if (input && input.action === 'return' && input.equipment_id) {
        returnItem(input.equipment_id);
    }

    loadData();

    function lend(equipmentId) {
        // Reject requests for equipment that does not exist, so a crafted
        // call cannot create a loan with an unresolvable reference.
        var equipment = new GlideRecord(EQUIPMENT_TABLE);
        if (!equipment.get(equipmentId)) {
            data.error = '指定された備品が見つかりません。';
            return;
        }
        var loan = new GlideRecord(LOAN_TABLE);
        loan.initialize();
        loan.setValue('equipment', equipmentId);
        loan.setValue('borrower', userId);
        loan.setValue('lent_at', new GlideDateTime());
        loan.setValue('state', 'lent');
        // Business rules fill in due_on and block double lending.
        if (!loan.insert()) {
            data.error = '貸出できませんでした。すでに貸出中の可能性があります。';
        }
    }

    function returnItem(equipmentId) {
        var loan = new GlideRecord(LOAN_TABLE);
        loan.addQuery('equipment', equipmentId);
        loan.addQuery('borrower', userId);
        loan.addQuery('state', 'lent');
        loan.query();
        if (loan.next()) {
            loan.setValue('state', 'returned');
            loan.setValue('returned_at', new GlideDateTime());
            loan.update();
        } else {
            data.error = '返却できる貸出が見つかりませんでした。';
        }
    }

    function findActiveLoan(equipmentId) {
        var loan = new GlideRecord(LOAN_TABLE);
        loan.addQuery('equipment', equipmentId);
        loan.addQuery('state', 'lent');
        loan.query();
        return loan.next() ? loan : null;
    }

    function loadData() {
        data.items = [];
        data.myCount = 0;

        var today = new GlideDateTime();
        var tomorrow = new GlideDateTime();
        tomorrow.addDaysLocalTime(1);

        var equipment = new GlideRecord(EQUIPMENT_TABLE);
        equipment.orderBy('name');
        equipment.query();
        while (equipment.next()) {
            var item = {
                sys_id: equipment.getUniqueValue(),
                name: equipment.getDisplayValue('name'),
                category: equipment.getDisplayValue('category'),
                categoryValue: equipment.getValue('category'),
                location: equipment.getValue('location'),
                maxDays: parseInt(equipment.getValue('max_days'), 10) || 7,
                color: equipment.getValue('color'),
                icon: equipment.getValue('icon'),
                state: 'available',
                dueOn: '',
                dueState: 'ok'
            };

            if (equipment.getValue('status') === 'maintenance') {
                item.state = 'maintenance';
            } else {
                var loan = findActiveLoan(item.sys_id);
                if (loan) {
                    var due = new GlideDateTime(loan.getValue('due_on'));
                    item.state = loan.getValue('borrower') === userId ? 'mine' : 'lent';
                    item.dueOn = due.getLocalDate().getValue();
                    if (due.before(today)) {
                        item.dueState = 'overdue';
                    } else if (due.before(tomorrow)) {
                        item.dueState = 'soon';
                    }
                    if (item.state === 'mine') {
                        data.myCount++;
                    }
                }
            }
            data.items.push(item);
        }
    }
})();
