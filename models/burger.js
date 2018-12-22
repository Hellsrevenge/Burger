var orm = require('../config/orm');

var table = 'burgers';

var burger = {
    selectOne: function (burger_id, call_back) {
        orm.selectOne(table, 'burger_id', burger_id, function (data) {
            console.log("[SELECT] burger:" + burger_id);
            call_back(data);
        });
    },
    selectAll: function (call_back) {
        orm.selectAll(table, function (data) {
            console.log("[SELECT] burger");
            call_back(data);
        });
    },
    insertOne: function (values,call_back) {
        orm.insertOne(table, values, function (data) {
            console.log("[INSERT] burger " + JSON.stringify(values));
            call_back(data);
        });
    },
    updateOne: function (burger_id, values, call_back) {
        console.log(burger_id);
        console.log(values);
        orm.updateOne(table, 'burger_id', burger_id, values, function (data) {
            console.log("[UPDATE] burger:" + burger_id + " " + JSON.stringify(values));
            call_back(data);
        });
    }
};

module.exports = burger;
