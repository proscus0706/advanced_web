var arr = [1,2,3];

arr.filter(function(value, index, array){
    //no need for an if statement
    //just return an expression
    //that evalutates to true or false!
    return value > 2;
});

// [3]

var instructors = [
    {name: "Elie"},
    {name: "Tim"},
    {name: "Matt"},
    {name: "Colt"}
];

instructors.filter(function(value, index, array){
   return value.name.length > 3;
});

