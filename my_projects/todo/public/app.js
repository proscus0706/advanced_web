$(document).ready(function(){
    //request with AJAX
    $.getJSON("/api/todos")
    //then 안에 들어있는 addTodos는 todos라는 어레이 형식의 데이터를 가져온다.
        .then(addTodos)
        .catch(function(err){
            console.log(err);
        });

    $("#todoInput").keypress(function(event){
        if(event.which === 13){
            //create todo
            createTodo();
        }
    });

    $(".list").on("click", "li", function(){
        updateTodo($(this));
    });

    //delete logic commences here
    $(".list").on("click", "span", function(event){
        event.stopPropagation();
        removeTodo($(this).parent());
    })
});

function addTodos(todos){
    //add todos to page here
    todos.forEach(function(todo){
        addTodo(todo);
    });
}

function createTodo(){
    //send request to create new todo
    var userInput = $("#todoInput").val();
    $.post("/api/todos", {name: userInput})
        .then(function(newTodo){
            userInput = $("#todoInput").val("");
            addTodo(newTodo);
        })
        .catch(function(err){
            console.log(err);
        })
}

function addTodo(todo){
    newTodo = $("<li class='task'>" + todo.name + "<span>X</span></li>");
    newTodo.data("id", todo._id); //jquery만이 가진 특이한 것. id가져오기.
    newTodo.data("completed", todo.completed);
    if(todo.completed) {
        newTodo.addClass("done");
    }
    $(".list").append(newTodo);
}

function removeTodo(todo){
    var clickedId = todo.data("id");
    var deleteUrl = "/api/todos/" + clickedId;
    $.ajax({
        method: "DELETE",
        url: deleteUrl
    })
        .then(function(data){
            todo.remove();
        })
        .catch(function(err){
            console.log(err);
        })
}

function updateTodo(todo){
    var clickedId = todo.data("id");
    var isDone = !todo.data("completed");
    var updateData = {completed: isDone};

    var updateUrl = "/api/todos/" + todo.data("id");
    $.ajax({
        method: "PUT",
        url: updateUrl,
        data: updateData
    })
        .then(function(updatedTodo){
            todo.toggleClass("done");
            //update시켜 줘야한다.
            todo.data("completed", isDone);
        })
}