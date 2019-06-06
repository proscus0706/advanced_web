var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extendted:true}));
//req.body 라는 편리한 property를 만들어준다.
//post로 들어온 것들을 읽어준다.
//name=brian 이런식.
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.get("/", function(req, res){
   res.sendFile("index.html");
   //ejs가 아닌 경우 sendFile로 rendering 한다.
});

app.use("/api/todos", todoRoutes);

app.listen(process.env.PORT | 3000,  function(){
    console.log("long time no see!");
});