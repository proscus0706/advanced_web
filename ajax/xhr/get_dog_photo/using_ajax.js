var btn = document.querySelector("#btn");

//listen for clicks
btn.addEventListener("click", function(){
    //make the request
    var XHR = new XMLHttpRequest();

    //보통 이벤트는 소문자로만 쓰인다.
    XHR.onreadystatechange = function(){
        if(XHR.readyState === 4 && XHR.status === 200) {
            console.log(XHR.responseText);
            // XML Parser를 통해 받아온 텍스트를 분리
            var response = JSON.parse(XHR.responseText);
            document.querySelector("img").src = response.message;
        }
    };

    XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
    XHR.send();
});
