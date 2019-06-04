var arr = [5, 4, 1, 4, 5];

var result = arr.reduce(function(accumulator, nextValue){
    if(nextValue in accumulator){
        accumulator[nextValue]++;
    } else {
        accumulator[nextValue] = 1;
    }
    return accumulator;
}, {});

console.log(result);

//맨 처음 nextValue는 0번 인덱스다.

//{}               5        {5:1}
//{5:1}            4        {5:1, 4:1}
//{5:1, 4:1}       1        {5:1, 4:1, 1:1}
//{5:1, 4:1, 1:1}  4        {5:1, 4:2, 1:1}
//{5:1, 4:2, 1:1}  5        {5:2, 4:2, 1:1}