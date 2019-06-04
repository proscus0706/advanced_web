function hasEvenNumber(arr){
    return arr.some(function(value){
        return value & 2 === 0;
    });
}

hasEvenNumber([1, 2, 3, 4]); //true
hasEvenNumber([1, 3, 5]); //false

function hasComma(str){
    return str.split('').some(function(value){
        return value === ',';
    });
}

hasComma('This is wonderful');
hasComma('This, is wonderful');