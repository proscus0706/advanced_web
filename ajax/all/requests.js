var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

//XHR code
document.querySelector("#xhr").addEventListener("click", function(){
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if(XHR.readyState === 4 && XHR.status === 200){
            var quote = JSON.parse(XHR.responseText);
            document.querySelector("#quote").textContent = quote[0];
        }
    };
    XHR.open("get", url);
    XHR.send();
});


//Fetch Code
document.querySelector("#fetch").addEventListener("click", function(){
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            document.querySelector("#quote").textContent = data[0];
        })
        .catch(function(error){
            console.log("Something went wrong " + error)
        });
});


//jQuery Code
$("#jquery").on("click", function(){
   $.ajax({
       method: "GET",
       dataType: "JSON",
       url: url
   })
       .done(function(data){
           $("#quote").text(data[0]);
       })
       .fail(function(error){
           console.log(error.message);
       })
});


//Axios Code
document.querySelector("#axios").addEventListener("click", function(){
   axios.get(url)
       .then(function(res){
           document.querySelector("#quote").textContent = res.data[0];
       })
       .catch(function(error){
           console.log(error);
       })

});