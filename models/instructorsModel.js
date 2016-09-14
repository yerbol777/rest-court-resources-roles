var db = require('../DB');

function instructors() {
    // SELECT INSTRUCTORS
    this.select = function(req, res) {
        var sql = 'CALL INSTRUCTORS_SELECT()';
        db.query(sql, function (err, result) {
            res.responseType = 'text';
            res.json(result[0]);
        });
    };

    // CREATE NEW INSTRUCTOR
    this.create = function(instructor, res) {
        var sql = 'CALL INSTRUCTORS_CREATE(?, ?, ?, ?)';
        db.query(sql, [instructor.name, instructor.address, instructor.phone, instructor.email], function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                res.responseType = 'text';
                res.json(result[0]);
            }
        });
    };

    // UPDATE INSTRUCTOR
    this.update = function(instructor, res) {
        var sql = 'CALL INSTRUCTORS_UPDATE(?, ?, ?, ?, ?)';
        db.query(sql, [instructor.id, instructor.name, instructor.address, instructor.phone, instructor.email], function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                res.send("DONE");
            }
        });
    };

    // DELETE INSTRUCTOR
    this.delete = function(id, res) {
        var sql = 'CALL INSTRUCTORS_DELETE(?)';
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

module.exports = new instructors();