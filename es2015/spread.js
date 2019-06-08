//ES5
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];

var combined = arr1.concat(arr2).concat(arr3);

//ES2015
var combiend = [...arr1, ...arr2, ...arr3];

//ES5
var arr = [3,2,4,1,5];
Math.max(arr);
Math.max.apply(null, arr);

//ES2015
Math.max(...arr);