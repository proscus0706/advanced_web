var url = "anyurl";

$("#getBtn").on("click", function(){
    $.get(url)
        .done(function(data){
            console.log(data);
        })
        .fail(function(){
            console.log("ERROR!");
        })

    // $.ajax({method: "GET", url: ""})
});

$("#postBtn").on("click", function(){
    var data = {name: "Charlie", city: "Florence"};
    $.post(url, data)
    //두번째 argument는 없어도 된다. post의 유형에 따라 다를 것이다. data ?name=Charlie 이런 것..
        .done(function(data){
            console.log(data);
        })
        .fail(function(){
            console.log("ERROR!")
        })
    // $.ajax({method: "POST", url: ""})
});

$("#getJSONBtn").on("click", function(){
    $.getJSON(url)
        .done(function(data){
            console.log(data);
        })
        .fail(function(){
            console.log("There's a problem");
        })
});