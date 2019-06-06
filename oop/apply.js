function sayHi(){
    return "Hi " + this.firstName;
}

var colt = {
    firstName: "Colt"
};

var elie = {
    firstName: "Elie"
};

sayHi.call(colt);
sayHi.apply(elie);

// well this seems the same..
