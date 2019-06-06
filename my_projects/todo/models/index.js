var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/my_todo", { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");