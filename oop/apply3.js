var nums = [5, 7, 1, 4, 2];

Math.max(nums); //NaN

var max_result = Math.max.apply(this, nums); //7

console.log(max_result);

function sumValues(a, b, c){
    return a + b + c;
}

var values = [4, 1, 2];

sumValues(values);

var sumResult = sumValues.apply(this, [4, 1, 2]); //7

console.log(sumResult);