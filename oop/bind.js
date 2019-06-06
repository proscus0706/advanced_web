function addNumbers(a, b, c, d){
    return this.firstName + " just calculated " + (a + b + d + d);
}

var elie = {
    firstName: "Elie"
};

//이런 식으로 새로운 함수를 정의가 가능하다.
var elieCalc = addNumbers.bind(elie, 1, 2, 3, 4);
elieCalc();

//with bind - we do not need to know all the arguments up front!
var elieCalc = addNumbers.bind(elie, 1, 2);
elieCalc(3 , 4);


