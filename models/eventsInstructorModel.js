var db = require('../DB');

function eventsInstructor() {
    // SELECT EVENTS
    this.select = function (req, res) {

        var sql = 'CALL EVENTS_BY_INSTRUCTOR_ID_SELECT_OWN(?)';
        db.query(sql, [req.query.instructor_id], function (err, result) {
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