var instructor = {
    firstName: "Elie",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hello " + this.firstName);
        }, 1000)
    }
};
//instructor.sayHi(); //undefined

var instructor = {
    firstName: "Elie",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hello " + this.firstName);
        }.bind(this), 1000)
    }
};
//instructor.sayHi(); //Hello Elie

var instructor = {
    firstName: "Elie",
    sayHi: function(){
        setTimeout(() => {
            console.log("Hello " + this.firstName);
        }, 1000)
    }
};
//instructor.sayHi(); //Hello Elie

function outer(){
    return innerFunction = () => {
        return arguments;
    }
}

outer(1)(2); //Only Prints out [1]

var instructor = {
    firstName: "Elie",
    sayHi: () => `Hello $(this.firstName}`
};