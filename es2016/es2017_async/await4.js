async function getUser(user){
    try {
        var response = await $.getJSON(`https;//api.github.com/users/${user}`);
        console.log(response.name);
    } catch(e){
        console.log("User does not exist!");
    }
}

getUser("elie"); // Elie Schoppik
getUser("foo!!!"); // User does not exist!