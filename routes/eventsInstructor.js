var express = require('express');
var router = express.Router();
var eventsInstructor = require('../models/eventsInstructorModel');

// read
router.get('/', function(req, res) {
    res.responseType = 'text';
    eventsInstructor.select(req, res);
});

module.exports = router;