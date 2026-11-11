api.controller = function () {
    var c = this;

    c.filterCat = 'all';
    c.onlyAvailable = false;
    c.query = '';

    c.setCat = function (cat) {
        c.filterCat = cat;
        c.onlyAvailable = false;
    };

    c.showAvailableOnly = function () {
        c.onlyAvailable = true;
        c.filterCat = 'all';
    };

    c.showAll = function () {
        c.onlyAvailable = false;
        c.filterCat = 'all';
    };

    c.isActiveChip = function (cat) {
        if (cat === 'available') {
            return c.onlyAvailable;
        }
        return !c.onlyAvailable && c.filterCat === cat;
    };

    c.matches = function (item) {
        if (c.onlyAvailable && item.state !== 'available') {
            return false;
        }
        if (c.filterCat !== 'all' && item.categoryValue !== c.filterCat) {
            return false;
        }
        if (c.query && item.name.indexOf(c.query) === -1) {
            return false;
        }
        return true;
    };

    c.countState = function (state) {
        return c.data.items.filter(function (item) {
            return item.state === state;
        }).length;
    };

    c.lentCount = function () {
        return c.countState('lent') + c.countState('mine');
    };

    // Format 'yyyy-MM-dd' as 'M/d（曜）'.
    c.formatDue = function (item) {
        if (!item.dueOn) {
            return '';
        }
        var parts = item.dueOn.split('-');
        var date = new Date(
            parseInt(parts[0], 10),
            parseInt(parts[1], 10) - 1,
            parseInt(parts[2], 10)
        );
        var weekdays = ['日', '月', '火', '水', '木', '金', '土'];
        return (
            date.getMonth() +
            1 +
            '/' +
            date.getDate() +
            '（' +
            weekdays[date.getDay()] +
            '）'
        );
    };

    // server.get does not replace c.data by itself; apply the response so
    // the card flips between borrow/return and errors show immediately.
    // Actions are serialized with c.busy: if two requests were in flight,
    // their responses could arrive out of order and an older snapshot
    // would overwrite the newer one.
    c.busy = false;

    function applyResult(response) {
        c.data = response.data;
        c.busy = false;
    }

    function clearBusy() {
        c.busy = false;
    }

    c.borrow = function (item) {
        if (c.busy) return;
        c.busy = true;
        c.server
            .get({ action: 'lend', equipment_id: item.sys_id })
            .then(applyResult, clearBusy);
    };

    c.returnItem = function (item) {
        if (c.busy) return;
        c.busy = true;
        c.server
            .get({ action: 'return', equipment_id: item.sys_id })
            .then(applyResult, clearBusy);
    };
};
