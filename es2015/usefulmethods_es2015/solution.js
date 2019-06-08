function copyObject(obj){
    return Object.assign({}, obj);
}

function checkIfFinite(num){
    return Number.isFinite(num);
}

function areAllNumbersFinite(arr){
    return arr.every(Number.isFinite);
}

function covertArrayLikeObject(obj){
    return Array.from(obj);
}

function displayEventArugments(){
    return Array.from(arguments).filter(val => val % 2 === 0);
}