var db = require('../DB');

function events() {
    // SELECT EVENTS
    this.select = function (req, res) {
        if (req.query.instructor_id == null) {
            var sql = 'CALL EVENTS_BY_COURT_ID_SELECT(?,?)';
            db.query(sql, [req.query.court_id, req.query.court_type_id], function (err, result) {
                res.responseType = 'text';
                res.json(result[0]);
            });
        } else {
            var sql = 'CALL EVENTS_BY_INSTRUCTOR_ID_SELECT(?,?,?)';
            db.query(sql, [req.query.instructor_id, req.query.court_id, req.query.court_type_id], function (err, result) {
                res.responseType = 'text';
                res.json(result[0]);
            });
        }
    };

    // CREATE NEW EVENT
    this.create = function(req, res) {
        var sql = 'CALL EVENTS_CREATE(?, ?, ?, ?, ?)';
        db.query(sql, [req.title, req.court_id, req.instructor_id, req.start_datetime, req.end_datetime], function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                res.responseType = 'text';
                res.json(result[0]);
            }
        });
    };

    // UPDATE EVENTS
    this.update = function(req, res) {
        var sql = 'CALL EVENTS_UPDATE(?, ?, ?, ?, ?, ?, ?)';
        db.query(sql, [req.id, req.title, req.court_id, req.instructor_id, req.start_datetime, req.end_datetime, req.selected_court_id], function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                res.send("DONE");
            }
        });
    };

    // DELETE EVENTS
    this.delete = function(id, res) {
        var sql = 'CALL EVENTS_DELETE(?)';
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

module.exports = new events();