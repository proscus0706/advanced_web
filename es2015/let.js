var instructor = "Elie";

if(instructor === "Elie"){
    let funFact = "Play the cello";
}

funFact; //Reference Error!

function helloInstructor(){
    return elie;
    var elie = "ME!";
}

function helloSecondInstructor(){
    return "colt";
    let colt = "HIM!";
}

helloSecondInstructor(); //reference error

//Use Cases for let.
for(var i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000);
}

for(var i = 0; i < 5; i < i++){
    (function(j){
        setTimeout(function(){
            console.log(j);
        }, 1000);
    })(i);
}

//Use Cases for let.
for(let i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000);
}