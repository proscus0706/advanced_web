var names = ['Tim', 'Matt', 'Colt', 'Elie'];

var result = names.reduce(function(accumulator, nextValue){
   return accumulator += ' ' + nextValue;
}, 'The instructors are');

console.log(result);
