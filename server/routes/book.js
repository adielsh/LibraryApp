var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var bookCtrl = require('../controllers/book');
router.get('/all', bookCtrl.getAllBooks);

router.post('/create', bookCtrl.createBook);

router.post('/:id/update', bookCtrl.updateBook);

router.delete('/:id/delete', bookCtrl.deleteBook);

module.exports = router;