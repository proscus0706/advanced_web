/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    var newArr = [];
    arr.forEach(function(element){
        newArr.push(element * 2);
    });
    return newArr;
}

console.log(doubleValues([5,1,2,3,10]));

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    var newArr = [];
    arr.forEach(function(element){
        if(element % 2 === 0){
            newArr.push(element)
        }
    });
    return newArr;
}

console.log(onlyEvenValues([5,1,2,3,10]));

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    var newArr = [];
    arr.forEach(function(element, index, array){
        //여기서 첫째 글자와 끝에 글자만 출력해주는 로직을 짜야한다.
        var newElement = element[0] + element[element.length - 1];
        newArr.push(newElement);
    });
    return newArr;
}

console.log( showFirstAndLast(['colt','matt', 'tim', 'udemy']));

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')

    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    var newArr = [];
    arr.forEach(function(element, index, array){
        //1. 어떤 객체라도 받는다. 즉 객체를 받는다. 객체는 key - value로 이루어져있다.
        //그냥 간단하게 생각해서 모든 객체에 새로운 key - value 값을 추가해주면 된다.
        var obj = element;
        obj[key] = value;
        newArr.push(obj);
    });
    return newArr;
}

console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));

//

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCoverter(str) {

    var newStr = str.toLowerCase();
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var onlyVowels = "";

    for (var i = 0; i < newStr.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (newStr[i] === vowels[j]) {
                onlyVowels += newStr[i];
            }
        }
    }

    return onlyVowels;

}


function char_count(str, letter)
{
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++)
    {
        if (str.charAt(position) == letter)
        {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

function vowelCount(str){

    var newStr = vowelCoverter(str);
    var vowel_counter = {};

    var a = char_count(newStr, "a");
    var e = char_count(newStr, "e");
    var i = char_count(newStr, "i");
    var o = char_count(newStr, "o");
    var u = char_count(newStr, "u");
    if(a !== 0){
        vowel_counter["a"] = a;
    }
    if(e !== 0){
        vowel_counter["e"] = e;
    }
    if(i !== 0){
        vowel_counter["i"] = i;
    }
    if(o !== 0){
        vowel_counter["o"] = o;
    }
    if(u !== 0){
        vowel_counter["u"] = u;
    }

    return vowel_counter;
}

console.log(vowelCount('Elie'));