var mysql = require("mysql");

var connection = mysql.createConnection({
    host: process.env.CLEARDB_DATABASE_URL,
    port: 3306,
    user: process.env.CLEARDB_USER,
    password: process.env.CLEARDB_PASSWORD,
    database: process.env.CLEARDB_NAME
});

module.exports = connection;
