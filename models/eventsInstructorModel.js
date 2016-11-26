var db = require('../DB');

function eventsInstructor() {
    // SELECT EVENTS
    this.select = function (req, res) {

        var sql = 'CALL EVENTS_BY_COURT_ID_SELECT_INSTR(?,?,?)';
        db.query(sql, [req.query.court_id, req.query.court_type_id, req.query.instructor_id], function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            else {
                res.responseType = 'text';
                res.json(result[0]);
            }
        });

    };
}

module.exports = new eventsInstructor();