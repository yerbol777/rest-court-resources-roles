var express = require('express');
var router = express.Router();
var courts = require('../models/courtsModel');

// read
router.get('/', function(req, res) {
    res.responseType = 'text';
    courts.select(req, res);
});

module.exports = router;