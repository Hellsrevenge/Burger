require('orm.js');
var table = 'burgers';

var burger = {
    selectAll: function () {
        orm.selectAll(table, function() {

        });
    },
    insertOne: function (data) {
        orm.insertOne(table, function() {

        });
    },
    updateOne: function (burger_id, data) {
        orm.updateOne(table, 'burger_id', burger_id, data, function() {

        });
    }
};

module.exports = burger;
