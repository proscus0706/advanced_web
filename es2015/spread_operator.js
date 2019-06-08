function sumValues(a, b, c){
    return a + b + c;
}

var nums = [12, 15, 20];

//ES5
sumValues.apply(null, nums);
//ES2015
sumValues(...nums);