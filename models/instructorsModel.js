var db = require('../DB');

function instructors() {
    // SELECT INSTRUCTORS
    this.select = function (req, res) {
        var sql = 'CALL INSTRUCTORS_SELECT()';
        db.query(sql, function (err, result) {
            res.responseType = 'text';
            res.json(result[0]);
        });
    };

    // CREATE NEW INSTRUCTOR
    this.create = function (req, res) {
        var sql = 'CALL INSTRUCTORS_CREATE(?, ?, ?, ?)';
        db.query(sql, [req.name, req.address, req.phone, req.email], function (err, result) {
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
    this.update = function (req, res) {
        var sql = 'CALL INSTRUCTORS_UPDATE(?, ?, ?, ?, ?)';
        db.query(sql, [req.id, req.name, req.address, req.phone, req.email], function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                res.send("DONE");
            }
        });
    };

    // DELETE INSTRUCTOR
    this.delete = function (id, res) {
        var sql = 'CALL INSTRUCTORS_DELETE(?)';
        db.query(sql, [id], function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            else {
                if (result != undefined && result != null && result.length > 1) {
                    res.send(result[0][0]);
                }
                else {
                    res.send("DONE");

                }
            }
        });
    };
}

module.exports = new instructors();