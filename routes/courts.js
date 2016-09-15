var express =  require('express');
var router = express.Router();
var courtcrud = require('../models/courtsModel');


// read
router.get('/', function (req, res) {
    res.responseType = 'text';
    courtcrud.select(res);
})

// create
router.post('/', function(req, res) {
    courtcrud.create(req.body, res);
});

// update
router.put('/', function(req, res) {
    courtcrud.update(req.body, res);
});

// delete
router.delete('/:id', function(req, res) {
    console.log(req.params.id);
    courtcrud.delete(req.params.id, res);
});

module.exports = router;