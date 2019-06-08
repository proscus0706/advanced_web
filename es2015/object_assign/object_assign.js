// ES5

var o = {name : "Elie"};
var o2 = o;

o2.name = "Tim";
o.name; //"Tim";

// ES2015

var o = {name: "Elie"};
var o2 = Object.assign({}, o);

o2.name = "Tim";
o.name; // "Elie."