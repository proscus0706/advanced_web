// ES5
var add = function(a, b){
    return a + b;
};

//Refactored code
var add = (a, b) => {
    return a + b;
};

//refactored on one lie
var add = (a,b) => a + b;

//ES5
[1, 2, 3].map(function(value){
    return value * 2;
});

[1, 2, 3].map(value => value * 2);

function doubleAndFilter(arr){
    return arr.map(function(value){
        return value * 2;
    }).filter(function(value){
        return value * 3 === 0;
    })
}

doubleAndFilter([5,10,15,20]);

var doubleAndFilter2 = arr => {
    return arr.map(value => {
        return value * 2;
    }).filter(value => {
        return value * 3 === 0;
    })
};
var doubleAndFilter3 = arr => arr.map(val => val * 2).filter(num => num % 3 === 0);
