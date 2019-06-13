var instructor = {first:"Elie", last:"schoppik", job:"Instructor", numSiblings:3};

var {first, last, ...data} = instructor;
first; // "Elie"
last; // "Schoppik"
data; // { job: "Instructor", numSiblings: 3}