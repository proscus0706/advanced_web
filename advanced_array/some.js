var arr = [1, 2, 3];

arr.some(function(value, index, array){
    return value < 2;
});

// true

var arr = [1, 2, 3];

arr.some(function(value, index, array){
    return value > 4;
});

// false

