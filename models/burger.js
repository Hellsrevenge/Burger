var orm = require('../config/orm');

var table = 'burgers';

var burger = {
    selectAll: function () {
        orm.selectAll(table, function(data) {
            console.log(data);
        });
    },
    insertOne: function (values) {
        orm.insertOne(table, values, function(data) {

        });
    },
    updateOne: function (burger_id, values) {
        orm.updateOne(table, 'burger_id', burger_id, values, function(data) {

        });
    }
};

module.exports = burger;
