function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    console.log(this);
}

var elie = new Person("Elie", "Schoppik");
//이런식으로 new keyword를 붙이면 this는 새로운 object를 가리키게 된다.

