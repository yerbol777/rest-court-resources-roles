var db = require('../DB');

function courtTypes(){

    // SELECT COURT_TYPES
    this.select = function (req, res) {
        var sql = 'CALL COURT_TYPES_SELECT()';
        db.query(sql, function (err, result) {
            res.responseType = 'text';
            res.json(result[0]);
        });
    };
}

module.exports = new courtTypes();