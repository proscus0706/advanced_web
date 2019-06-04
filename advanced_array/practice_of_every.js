function allLowerCase(str){
    return str.split('').every(function(value){
        return value === value.toLowerCase();
    });
}

allLowerCase("this is really nice");
allLowerCase("this is really Nice");

function allArrays(arr){
    return arr.every(Array.isArray);
}

allArrays([[1], [2], [3,4]]);
allArrays([[1], [2], {}]);