// 1 - Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber)

function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
}

/* 2 - Add a function on the Person.proto type called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.



Examples:
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.fullName() // "Elie Schoppik"

*/

Person.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
};

// 3 -  Add a property on the object created from the Person function called family which is an empty array. This will involve you going back and adding an additional line of code to your Person constructor you previously created in exercise 1.
Person.prototype.family = [];

Person.prototype.addToFamily = function(anotherPerson){
    if(anotherPerson instanceof Person){
        //그리고 another person은 들어가지 못함..
        for(var i = 0; i < Person.prototype.family.length; i++){
            if(!(anotherPerson === Person.prototype.family[i])){
             Person.prototype.family.push(anotherPerson)
            }
        }
    }
    return Person.prototype.family.length;
};

var person = new Person("Elie", "Schoppik", "purple", 34);
var anotherPerson = new Person();

console.log(person.addToFamily(anotherPerson));
console.log(person.addToFamily(anotherPerson));


/* 4 - Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object constructed from the Person constructor (HINT - take a look at the instanceof keyword). Make sure that your family array does not include duplicates! This method should return the length of the family array.


Examples:

    var person = new Person("Elie", "Schoppik", "purple", 34)
    var anotherPerson = new Person()
    person.addToFamily(anotherPerson); // 1
    person.addToFamily(anotherPerson); // 1
    person.family.length // 1

    person.addToFamily("test"); // 1
    person.addToFamily({}); // 1
    person.addToFamily([]); // 1
    person.addToFamily(false); // 1
    person.family.length // 1
*/

// PART II

// 1 - Implement your own version of Array.prototype.map. The function should accept a callback and return a new array with the result of the callback for each value in the array.

/* 2 - Implement a function called reverse that reverses a string and place it on the String.prototype

Examples:
    "test".reverse() // "tset"
    "tacocat".reverse() // "tacocat"
*/