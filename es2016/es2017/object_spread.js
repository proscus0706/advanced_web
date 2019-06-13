var instructor = {first:"Elie", last:"Schoppik", job:"Instructor"};
//instructdor2 will accept all of keys & values from `instructor`
var instructor2 = {...instructor, first:"Tim", last:"Garcia"};

console.log(instructor2); //{ first: 'Elie', last: 'Garcia', job: 'Instructor' }


var defaults = {job: "Instructors", ownsCat: true, ownsDog: true};
var matt = {...defaults, ownsCat: false};
var colt = {...defaults, ownsDog: false};