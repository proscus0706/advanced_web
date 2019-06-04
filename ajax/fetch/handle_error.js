var btn = document.querySelector("button");
btn.addEventListener("click", function(){
   var url = "https://api.github.com/users/colt";
   fetch(url)
       .then(function(){
           console.log("Everything is fine");
       })
       .catch(function(){
           console.log("There is a problem!");
       });
});