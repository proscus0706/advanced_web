$("button").on("click", function(){
   $.ajax({
       method: "GET",
       url: "http://aws.random.cat/meow",
       dataType: 'json'
   })
       .done(function(data){
           console.log(data);
           $("img").attr("src", data.file);
       })
       .fail(function(){
           alert("Something went wrong");
       })
});