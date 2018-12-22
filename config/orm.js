var connection = require('./connection');

var orm = {
    selectOne: function (table, column, value, call_back) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";

        connection.query(queryString, [table, column, value], function (err, result) {
            if (err) throw err;
            call_back(result[0]);
        });
    },
    selectAll: function (table, call_back) {
        var queryString = "SELECT * FROM ??";

        connection.query(queryString, table, function (err, result) {
            if (err) throw err;
            call_back(result);
        });
    },
    insertOne: function (table, object, call_back) {
        var queryString = "INSERT INTO ?? SET ?";

        connection.query(queryString, [table, object], function (err, result) {
                if (err) throw err;
                call_back(result);
            }
        );
    },
    updateOne: function (table, column, value, data, call_back) {
        var queryString = "UPDATE ?? SET ? WHERE ?? = ?";

        connection.query(queryString, [table, data, column, value], function (err, result) {
                if (err) throw err;
                call_back(result);
            }
        );
    }
};

module.exports = orm;
