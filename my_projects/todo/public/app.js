$(document).ready(function(){
    //request with AJAX => index route
    $.getJSON("/api/todos")
        .then(addTodos)
        .catch(function(err){
            console.log(err);
        });
    // create route
    $("#todoInput").keypress(function(event){
        if(event.which === 13){
            createTodo();
        }
    });
    // update route
    $(".list").on("click", "li", function(){
       updateTodo($(this));
    });


    // delete route
    $(".list").on("click", "span", function(){
        removeTodo($(this).parent());
    })

});

function addTodos(todos){
    todos.forEach(function(todo){
        addTodo(todo);
    })
}

function createTodo(){
    var userInput = $("#todoInput").val();
    $.post("/api/todos", {name:userInput})
        .then(function(newTodo){
            user = $("#todoInput").val("");
            addTodo(newTodo);
        })
        .catch(function(err){
            console.log(err);
        })
}

function addTodo(todo){
    var newTodo = $("<li class='task'>" + todo.name + "<span>X</span></li>");
    newTodo.data("id", todo._id);
    newTodo.data("completed", todo.completed);
    if(todo.completed){
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
            todo.data("completed", isDone);
        })

}