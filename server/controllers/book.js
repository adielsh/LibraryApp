var Book = require('../models/book');

exports.createBook = function (req, res) {
    var book = new Book(
        {
            name: req.body.name,
            taken: req.body.taken
        }
    );

    book.save(function (err) {
        if (err) {
            console.log (err);
        }
        res.send('book Created successfully')
    })
};
exports.getAllBooks = function(req,res){
    Book.find({},function(err,allBooks){
        if (err) return next(err);
            res.send(allBooks);
    })
};
exports.updateBook = function (req, res) {
    var params = JSON.parse(Object.keys(req.body)[0]);
    Book.findByIdAndUpdate(req.params.id, {$set: params}, {new: true},function (err, book) {
        if (err) return next(err);
        res.send(book);
    });
};
exports.deleteBook = function (req, res) {
    Book.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};




