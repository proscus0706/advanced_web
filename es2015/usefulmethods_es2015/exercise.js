/*
Write a function called copyObject, which accepts one parameter, an object. The function should return a shallow copy of the object.

var o = {name: 'Elie'}
var o2 = copyObject({}, o)
o2.name = "Tim"
o2.name // 'Tim'
o.name // 'Elie'
*/

function copyObject(obj){
    return Object.assign(obj);
}

/*

Write a function called checkIfFinite which accepts one parameter and returns true if that parameter is a finite number.

checkIfFinite(4) // true
checkIfFinite(-3) // true
checkIfFinite(4. // .toEqual(true
checkIfFinite(NaN) // false
checkIfFinite(Infinity) // false
*/

function checkIfFinite(num){
    if(Number.isFinite(num)){
        return true;
    }
}

/*

Write a function called areAllNumbersFinite which accepts an array and returns true if every single value in the array is a finite number, otherwise return false.

var finiteNums = [4,-3,2.2]
var finiteNumsExceptOne = [4,-3,2.2,NaN]
areAllNumbersFinite(finiteNums) // true
areAllNumbersFinite(finiteNumsExceptOne) // false
*/

// function areAllNumbersFinite(arr){
//     var newArr = [];
//     arr.forEach(function(num){
//         if(Number.isFinite(num)){
//             newArr.push(true);
//         } else {
//             newArr.push(false);
//         }
//     });
//
//     if(newArr.indexOf(false) === -1){
//         return true;
//     } else {
//         return false;
//     }
// }

function areAllNumbersFinite(arr){
    return arr.every(function(num){
        return Number.isFinite(num)
    })
}

var finiteNums = [4,-3,2.2]
var finiteNumsExceptOne = [4,-3,2.2,NaN]
 // true
 // false
console.log(areAllNumbersFinite(finiteNums));
console.log(areAllNumbersFinite(finiteNumsExceptOne));

/*

Write a function called convertArrayLikeObject which accepts a single parameter, an array like object. The function should return the array like object converted to an array.

var divs = document.getElementsByTagName('div')
divs.reduce // undefined

var converted = convertArrayLikeObject(divs)
converted.reduce // funciton(){}...
*/

function convertArrayLikeObject(obj){
    return Array.from(obj);
}

/*

Write a function called displayEvenArguments which accepts a variable number of arguments and returns a new array with all of the arguments that are even numbers.

displayEvenArguments(1,2,3,4,5,6) // [2,4,6]
displayEvenArguments(7,8,9) // [8]
displayEvenArguments(1,3,7) // []
*/

function displayEvenArguments(){
    var arr = Array.from(arguments);
    arr.filter(function(element){
        return element % 2 === 0;
    })
}
