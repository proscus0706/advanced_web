function sumOddNumbers(arr){
    return arr.reduce(function(accumulator, nextValue){
        if(nextValue % 2 !== 0){
            accumulator += nextValue;
        }
        return accumulator;
    }, 0);
}

var result = sumOddNumbers([1,2,3,4,5]);
console.log(result);

function createFullName(arr){
    return arr.reduce(function(accumulator, nextValue){
        accumulator.push(nextValue.first + " " + nextValue.last);
        return accumulator;
    }, []);
}

var result2 = createFullName([{first:"Colt", last:"Steele"},{first:"Matt", last:"Lane"} ]);
console.log(result2);