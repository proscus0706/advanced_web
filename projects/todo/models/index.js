var mongoose = require("mongoose");
mongoose.set("debug", true); //디버깅 모드.
mongoose.connect("mongodb://localhost/todo-api");

//몽구스와 promise를 이용해서 이런 식으로 앞으로 짤 코드의 로직을 간결하게 만들어 줄 수 있다.
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");