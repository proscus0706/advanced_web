function sayHi(){
    return "Hi " + this.firstName;
}

var colt = {
    firstName: "Colt"
};

var elie = {
    firstName: "Elie"
};

var result1 = sayHi.call(colt);
var result2 = sayHi.call(elie);

console.log(result1);
console.log(result2);