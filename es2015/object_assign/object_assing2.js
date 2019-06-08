// ES2015

var o = {instructors: ["Elie", "Tim"]};
var o2 = Object.assign({},o);

o2.instructors.push("Colt");
o.instructors; //["Elie", "Tim", "Colt"]