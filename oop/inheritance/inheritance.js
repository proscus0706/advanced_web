function Studnet(firstName, lastName){
    return Person.apply(this, arguments);
}

Student.prototype.sayHi = function(){
    return "Hello " + this.firstName + " " + this.lastName;
};

Student.prototype = Object.create(Person.prototype);
//메소드를 넘겨준 후에는(상속을 한 후에는)
//반드시 생성자를 재지정 해줘야 한다.
Student.prototype.constructor =  Student;