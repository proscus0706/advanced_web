function doubleValues(arr){
    var newArr = [];
    arr.forEach(function(val){
        newArr.push(val * 2);
    });
    return newArr;
}

function onlyEvenValues(arr){
    var newArr = [];
    arr.forEach(function(val){
        if(val % 2 === 0){
            newArr.push(val);
        }
    })
    return newArr;
}

function showFirstAndLast(arr){
    var newArr = [];
    arr.forEach(function(val){
        newArr.push(val[0] + val[val.length - 1]);
    });
    return newArr;
}

function addKeyAndValue(arr, key, value){
    arr.forEach(function(val){
        val[key] = value;
    });
    return arr;
}

function vowelCount(str){
    var splitArr = str.split(""); //이렇게 하면 ""를 기준으로 나누어서 자동으로 어레이를 만들어준다.
    var obj = {};
    var vowels = "aeiou";

    splitArr.forEach(function(letter){
        //해당 문자가 모음이라면
        if(vowels.indexOf(letter.toLowerCase()) !== -1){
            if(letter in obj){
                //그 모음의 index가 존재한다면.
                obj[letter]++;
            } else {
                obj[letter] = 1;
            }
        }
    });
    return obj;
}