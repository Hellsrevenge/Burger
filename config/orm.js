requre('connection.js');

var orm = {
    selectAll: function (table, call_back) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            call_back(result);
        });
    },
    insertOne: function (table, data, call_back) {
        var queryString = "INSERT INTO ?? (?) VALUES (?)";
        //columns = data.keys();
        //values = data.values();
        connection.query(
            queryString,
            [
                table,
                data.keys().join(),
                data.values().join(),
            ],
            function (err, result) {
                if (err) throw err;
                call_back(result);
            }
        );
    },
    updateOne: function (table, column, value, data, call_back) {
        var queryString = "UPDATE ?? SET ? WHERE ?? = ?";
        var updateString = "";
        for (var col in data) {
            updateString += col + "=" + data[col] + ", ";
        }
        connection.query(
            queryString,
            [
                table,
                updateString.slice(0, -1),
                column,
                value
            ],
            function (err, result) {
                if (err) throw err;
                call_back(result);
            }
        );
    }
};

module.exports = orm;
