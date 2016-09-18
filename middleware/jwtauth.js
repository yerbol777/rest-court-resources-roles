/**
 * @author bayangali.nauryz@gmail.com
 */

var jwt = require('jwt-simple');
var secretKey = require('../config/config').jwtSecret;

module.exports = function (req, res, next) {
    console.log('Authorization:' + req.headers['authorization'] );
    var token = (req.body.token || req.query.token || req.headers['authorization']);
    if (token) {
        try {
            var decoded = jwt.decode(token, secretKey);

            if (decoded.expires <= Date.now()) {
                res.status(401);
                res.json({message:'Access token has expired'});
            } else {
                req.user = decoded.user;
                //TODO check if user has been blocked etc.

                next();
            }

        } catch (err) {
            res.status(400);
            res.json({message: err.message, err: err.stack});
        }
    } else if (token == undefined) {
        res.status(401);
        res.json({message: 'Not Authorized'})
    } else {
        next();
    }
};
