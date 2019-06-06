function Person(name){
    this.name = name;
}

var elie = new Person("Elie");
var colt = new Person("Colt");

elie.__proto__ === Person.prototype;
colt.__proto__ === Person.prototype;
//__proto__ 는 instance로 접근할 때.
//prototype은 객체로 접근할 때.

Person.prototype.constructor === Person;
