// assesing mongoose package
const mongoose = require('mongoose');
// database connection
mongoose.connect('mongodb://localhost:27017/todoapp');

// schema definition
const schema = mongoose.Schema;

const todoSchema= new schema({
    name: String,
    description: String,
    date:String,
    status:String
});

// model
var tododata = mongoose.model('tododata',todoSchema);

module.exports = tododata;