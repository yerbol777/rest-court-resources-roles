var express = require('express');
var router = express.Router();
var events = require('../models/eventsModel');

// read
router.get('/', function(req, res) {
    res.responseType = 'text';
    events.select(req, res);
});

// create
router.post('/', function(req, res) {
    events.create(req.body, res);
});

// update
router.put('/', function(req, res) {
    events.update(req.body, res);
});

// delete
router.delete('/:id', function(req, res) {
    console.log(req.params.id);
    events.delete(req.params.id, res);
});

module.exports = router;