var arr = [-1, -2, -3];

arr.every(function(value, index, array){
   return value < 0;
});

//true => 모두 틀리기 때문에

var arr2 = [1, 2, 3];

arr.every(function(value, index, array){
   return value > 2;
});

//false => 하나라도 2보다 큰 것이 있기 때문에.