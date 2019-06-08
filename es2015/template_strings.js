var firstName = "Elie";
var lastName = "Schoppik";

console.log("Hello " + firstName + " " + lastName); //error prone!

//Let't see template strings of ES6
console.log(`hello ${firstName} ${lastName}`);

"
Hello
" //Does not work!

    `
Hello
How
Nice
Is
This!
` //Works well!
