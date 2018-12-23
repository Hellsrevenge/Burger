var mysql = require("mysql");

var connection = mysql.createConnection({
    host: process.env.CLEARDB_DATABASE_HOST,
    port: 3306,
    user: process.env.CLEARDB_USER,
    password: process.env.CLEARDB_PASSWORD,
    database: process.env.CLEARDB_NAME
});

connection.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    }
});

module.exports = connection;
