var mysql = require('mysql');
var dbconfig = require('./config/dbconfig');

function DB() {
    var pool = mysql.createPool(dbconfig.database);

    this.query = function (sql, callback) {
        pool.getConnection(function (err, conn) {
            if (err) throw err;
            conn.query(sql, function (err, result) {
                callback(err, result);
            });
            conn.release();
        })
    };

    this.query = function (sql, value, callback) {
        pool.getConnection(function (err, conn) {
            if (err) throw err;
            conn.query(sql, value, function (err, result) {
                callback(err, result);
            });
            conn.release()
        });
    }
}

module.exports = new DB();