class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(){
        return `hello ${this.firstName} ${this.lastName}`;
    }
}

var elie = new Student("Elie", "Schoppik");