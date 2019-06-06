function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHi = function(){
    return "Hello " + this.firstName + " " + this.lastName;
};

function Student(firstName, lastName){
    return Person.apply(this, arguments);
}

Student.prototype = Object.create(Person.prototype);
//여기서 주의할 점! Student.prototype = Person.prototype은 같은 메모리 주소를 공유한다..
//새로운 object를 만드는 것이 아니라 assign한 것이기 때문이다.

//새로운 메소드를 추가해도 parent object에는 영향을 주지 않음.
Student.prototype.status = function(){
    return "I am currently a student!";
};

var elie = new Person("Elie", "Schoppik");