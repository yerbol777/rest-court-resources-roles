var express = require('express');
var router = express.Router();
var db = require('../DB');
var testcrud = require('../models/instructorsModel');

// read
router.get('/', function(req, res) {
    res.responseType = 'text';
    testcrud.select(res);
});

// create
router.post('/', function(req, res) {
    testcrud.create(req.body, res);
});

// update
router.put('/', function(req, res) {
    testcrud.update(req.body, res);
});

// delete
router.delete('/:id', function(req, res) {
    console.log(req.params.id);
    testcrud.delete(req.params.id, res);
});

module.exports = router;