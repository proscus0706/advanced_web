$("#btn").on("click", function(){
    // ajax 메소드에 object를 넘겨준다.
    $.ajax({
        method: "GET",
        url: "api_to_use",
        dataType: 'json'
        //사실 데이터타입을 명시해줄 필요는 없다. 하지만 명시적으로 표기해주는 것이 더 좋다.
    })
        .done(function(data){
            console.log(data);
        })
        .fail(function(){
            alert("Oh NO! Failed!");
        })
});

