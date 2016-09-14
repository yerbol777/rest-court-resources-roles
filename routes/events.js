var express = require('express');
var router = express.Router();
var events = require('../models/eventsModel');

// read
router.get('/', function(req, res) {
    res.responseType = 'text';
    events.select(req, res);
});

module.exports = router;