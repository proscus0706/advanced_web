function smallestValue(...args){
    return Math.min(...args);
}

//***********
//var arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
function placeInMiddle(arr, vals){
    let mid = Math.floor(arr.length / 2);
    arr.splice(mid, 0, ...vals);
    return arr;
}

function joinArrays(...args){
    return args.reduce((acc, next) => acc.concat(next), []);
}

function sumEvenArgs(...args){
    return args.reduce((acc, next) => next % 2 === 0 ? acc += next : acc, 0);
}

function flip(fn, thisArg, ...outerArgs){
    return function(...innerArgs){
        let allArgs = outerArgs.concat(innerArgs).slice(0, fn.length);
        return fn.apply(thisArg, allArgs);
    }
}

function bind(...outerArgs){
    return function(...innerArgs){
        return fn.apply(thisArg, [...outerArgs, ...innerArgs]);
    }
}