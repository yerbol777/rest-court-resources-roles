var db = require('../DB');

function events() {
    // SELECT EVENTS
    this.select = function (req, res) {
        if (req.query.court_id != null) {
            var sql = 'CALL SELECT_EVENTS_BY_COURT_ID(?)';
            db.query(sql, [req.query.court_id], function (err, result) {
                res.responseType = 'text';
                res.json(result[0]);
            });
        } else {
            var sql = 'CALL SELECT_EVENTS_BY_INSTRUCTOR_ID(?)';
            db.query(sql, [req.query.instructor_id], function (err, result) {
                res.responseType = 'text';
                res.json(result[0]);
            });
        }
    };
}

module.exports = new events();