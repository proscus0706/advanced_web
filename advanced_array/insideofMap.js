function map(arr, callback){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(callback(arry[i], i , array));
    }
    return newArr;
}

//이런 구조라는 뜻.
function tripleValues(arr){
    return arr.map(function(value){
        return value * 3;
    });
}

;function onlyFirstName(arr){
    return arr.map(function(val){
        return val.first;
    });
}

console.log(onlyFirstName([{first: "Tim", last:"Garcia"}, {first:"Matt", last: "Lane"}]));
