var mysql = require("mysql");
var config = {
    host: process.env.CLEARDB_DATABASE_HOST,
    port: 3306,
    user: process.env.CLEARDB_USER,
    password: process.env.CLEARDB_PASSWORD,
    database: process.env.CLEARDB_NAME
};

var connection = mysql.createConnection(config);

connection.connect(function(err) {
    if (err) {
        console.log(err);
        console.log(config);
        return;
    }
});

module.exports = connection;
