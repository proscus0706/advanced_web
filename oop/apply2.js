function addNumbers(a, b, c, d){
    return this.firstName + " just calculated " + (a + b + c + d);
}

var colt = {
    firstName: "Colt"
};

var elie = {
    firstName: "Elie"
};

addNumbers.apply(colt, [1, 2, 3, 4]);
addNumbers.apply(elie, [3, 4, 5, 6, 7]);