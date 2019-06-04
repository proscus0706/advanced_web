var url = "https://randomuser.me/api/";

var button = document.querySelector("#btn");
var avatar = document.querySelector("#avatar");
var fullname = document.querySelector("#fullname");
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");

button.addEventListener("click", function(){
    fetch(url)
        .then(handleErrors)
        .then(parseJSON)
        .then(updateProfile)
        .catch(printError);
});


function handleErrors(response){
    if(!response.ok){
        throw Error(404);
    }
    return response;
}

function parseJSON(data){
    return data.json();
}

function updateProfile(data){
    console.log(data);
    avatar.src = data.results[0].picture.medium;
    fullname.textContent = data.results[0].name.first + data.results.name.last;
    username.textContent = data.results[0].id.name;
    email.textContent = data.results[0].email;
    city.textContent = data.results[0].location.city;
}

function printError(error){
    console.log(error);
}