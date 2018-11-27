const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sleeperbox'
});

mysqlConnection.connect(function (err){
    if(err) throw err;
});

module.exports = mysqlConnection;