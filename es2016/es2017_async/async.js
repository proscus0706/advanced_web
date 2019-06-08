async function first(){
    return "We did it!";
}

first(); //returns a promise

first().then(val => console.log(val)); //we did it!