var arr = [1,2,3,4,5];

console.log(arr.reduce(function(accumulator, nextValue){
    return accumulator + nextValue;
}));

//15;

//1, 2, 3
//3, 3, 6
//6, 4 , 10
//10, 5, 15

console.log(arr.reduce(function(accumulator, nextValue){
    return accumulator + nextValue;
}, 10));

//10, 1, 11
//11, 2, 13
//13, 3, 16
//16, 4, 20
//20, 5, 25