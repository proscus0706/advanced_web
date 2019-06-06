var express = require("express");
var router = express.Router();
//모델 directory에 index 파일을 설정해놨다면 이렇게만 해줘도 된다.
//모든 몽구스 파일이 들어가 있음
var db = require("../models");
var helpers = require("../helpers/todos");

// router.get("/", );
// router.post("/", );

router.route("/")
    .get(helpers.getTodos)
    .post(helpers.createTodo);

// router.get("/:todoId", );
// router.put("/:todoId", );
// router.delete("/:todoId", );

router.route("/:todoId")
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);

module.exports = router;