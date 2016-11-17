var express = require('express');
var db = require('../DB');
var jwt = require('jwt-simple');
var moment = require('moment');
var secretKey = require('../config/config').jwtSecret;
var _ = require('lodash');

function auth() {
    // authenticate
    this.post = function (req, res) {
        var sql = 'CALL AUTHENTICATE(?,?)';
        var username = req.body.login.username;
        var password = req.body.login.password;
        db.query(sql, [req.body.login.username, req.body.login.password], function (err, result) {
            if (_.isArray(result)) {
                res.responseType = 'text';
                //token
                var user = result[0][0],
                    token = jwt.encode(
                        {user: user, expires: moment().add(7, 'days').valueOf()},
                        secretKey);

                user.token = token;
                res.status(200);
                res.json(user);

            } else {
                res.status(400);
                //res.json({message: 'The email and password you entered don\'t match.'});
                res.json('The email and password you entered don\'t match.');
            }
        });
    };


}

module.exports = new auth();