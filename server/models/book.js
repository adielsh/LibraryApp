var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    name: {type: String, required: true, max: 100},
    taken: {type: Boolean, default:false},
});


// Export the model
module.exports = mongoose.model('Book', BookSchema);