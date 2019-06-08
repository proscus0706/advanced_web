// ES5
var fisrtName = "Elie";
var lastName = "Schoppik";

var instructor = {
    firstName: fisrtName,
    lastName: lastName
};

// ES2015
var firstName = "Elie";
var lastName = "Schoppik";

var instructor = {
    firstName,
    lastName
};



// ES5
var instructor = {
    sayHello: function(){
        return "Hello!";
    }
};

//ES2015 - do NOT use arrow functions here!
var instructor = {
    sayHello(){
        return "Hello!";
    }
};

// ES5
var firstName = "Elie";
var instructor = {};
instructor[firstName] = "That's me!";
instructor.Elie; // "That's me!"

// ES2015
var firstName = "Elie";
var instructor = {
    [firstName]: "That's me!"
}

instructor.Elie; // "That's me!"
