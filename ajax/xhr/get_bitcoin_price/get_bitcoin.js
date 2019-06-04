var btn = document.querySelector("button");

btn.addEventListener("click", function(){

    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if(XHR.readyState === 4 && XHR.status === 200){
            console.log(XHR.responseText);
            var data = JSON.parse(XHR.responseText);
            document.querySelector("span").textContent = data.bpi.USD.rate
        }
    };
    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();


});