var mysql = require('mysql');
var connection = mysql.createPool({

    host: '',
    user: '',
    password: '',
    database: '',
    port: '3306'

});
module.exports = connection;