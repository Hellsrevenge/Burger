var mysql = require("mysql");
var config = {
    host: process.env.CLEARDB_HOST,
    port: 3306,
    user: process.env.CLEARDB_USER,
    password: process.env.CLEARDB_PASSWORD,
    database: process.env.CLEARDB_NAME
};

var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }
});

module.exports = connection;
