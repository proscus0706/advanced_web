var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.sendfile("index.html");
});

app.listen(3000, "127.0.0.1", function(){
    console.log("our server has started");
});