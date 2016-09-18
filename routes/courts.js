var express = require('express');
var router = express.Router();
var courts = require('../models/courtsModel');

// read
router.get('/', function(req, res) {
    res.responseType = 'text';
    courts.select(req, res);
});

// create
router.post('/', function(req, res) {
    res.responseType = 'text';
    courts.create(req, res);
});

// update
router.put('/', function(req, res) {
    res.responseType = 'text';
    courts.update(req, res);
});

// delete
router.delete('/:id', function(req, res) {
    courts.delete(req.params.id, res);
});

module.exports = router;