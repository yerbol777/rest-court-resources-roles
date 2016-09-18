var express = require('express');
var router = express.Router();
var auth = require('../models/authModel');

// post
router.post('/', function (req, res) {
    auth.post(req, res);

});

module.exports = router;