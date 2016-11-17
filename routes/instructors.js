var express = require('express');
var router = express.Router();
var instructors = require('../models/instructorsModel');

// read
router.get('/', function(req, res) {
    res.responseType = 'text';
    instructors.select(req.body, res);
});

// create
router.post('/', function(req, res) {
    instructors.create(req.body, res);
});

// update
router.put('/', function(req, res) {
    instructors.update(req.body, res);
});

// delete
router.delete('/:id', function(req, res) {
    instructors.delete(req.params.id, res);
});

module.exports = router;