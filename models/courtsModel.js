var db = require('../DB');

function testCrud() {

    // CREATE
    this.create = function (res) {
        var sql = 'CALL COURTS_CREATE(?, ?)';
        db.query(sql, function (err, result) {
            if(err){
                console.log(err);
            }
            else {
                res.responseText = 'text';
                res.json(result[0]);
            }
        })
    }

    // SELECT
    this.select = function (res) {
        var sql = 'CALL COURTS_SELECT()';
        db.query(sql, function (err, result) {
            res.responseText = 'text';
            res.json(result[0]);
        })
    }

    // UPDATE
    this.update = function(court, res) {
        var sql = 'CALL COURTS_UPDATE(?, ?, ?)';
        db.query(sql, [court.id, court.name, court.type], function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                res.send("DONE");
            }
        });
    };

    // DELETE
    this.delete = function(id, res) {
        var sql = 'CALL COURTS_DELETE(?)';
        db.query(sql, [id], function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                res.send("DONE");
            }
        });
    };

}

module.exports = new testCrud();