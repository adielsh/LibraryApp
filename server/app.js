var express = require('express');
var bodyParser = require('body-parser');

var book = require('./routes/book'); // Imports routes for the products
var app = express();

app.use(bodyParser.json());
app.use(require("body-parser").json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://adiel:a12345@ds241723.mlab.com:41723/library';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,{useNewUrlParser: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



app.use('/books', book);

var port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
