//ES 2015

var instructor = {
    firstName: "Elie",
    lastName: "Schoppik"
};

var firstName = instructor.firstName;
var lastName = instructor.lastName;

firstName; // Elie
lastName; // Schoppik

//Object Destructuring
var instructor = {
    firstName: "Elie",
    lastName: "Schoppik"
};

var {firstName, lastName} = instructor;

firstName; // Elie
lastName; // Schoppik