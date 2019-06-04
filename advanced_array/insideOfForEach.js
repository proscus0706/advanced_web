function forEach(array, callback){
    for(var i = 0; i < array.length; i++){
        callback(array[i], i, array);
    }
}

function halfValues(arr){
    var newArr = [];
    arr.forEach(function(val){
        newArr.push(val / 2);
    });
    return newArr;
}
