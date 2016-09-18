var express = require('express');
var router = express.Router();
var courtTypes = require('../models/courtTypesModel');

// read
router.get('/', function(req, res) {
    res.responseType = 'text';
    courtTypes.select(req, res);
});


module.exports = router;