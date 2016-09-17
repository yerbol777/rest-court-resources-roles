var db = require('../DB');

function courts() {
    // SELECT COURTS
    this.select = function(req, res) {
        var sql = 'CALL COURTS_SELECT()';
        db.query(sql, function (err, result) {
            res.responseType = 'text';
            res.json(result[0]);
        });
    };
}

module.exports = new courts();