var db = require('../DB');

function courts() {
    // SELECT COURTS
    this.select = function (req, res) {
        var sql = 'CALL COURTS_SELECT(?)';
        db.query(sql, [req.query.court_type_id], function (err, result) {
            res.responseType = 'text';
            res.json(result[0]);
        });
    };

    // CREATE NEW COURT
    this.create = function (req, res) {
        var sql = 'CALL COURTS_CREATE(?,?)';
        db.query(sql, [req.body.name, req.body.type_id], function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                res.responseType = 'text';
                res.json(result[0]);
            }
        });
    };

    // UPDATE COURT
    this.update = function (req, res) {
        var sql = "CALL COURTS_UPDATE(?,?,?)";
        db.query(sql, [req.body.id, req.body.name, req.body.type_id], function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                res.responseType = "text";
                res.json(result[0]);
            }

        })

    }
    // DELETE COURT
    this.delete = function (id, res) {
        var sql = "CALL COURTS_DELETE(?)";
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
    }

}

module.exports = new courts();