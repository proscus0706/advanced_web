var colt = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName;
    }
};

var elie = {
    firstName: "Elie",
    //Look at all this duplication:
};

colt.sayHi.call(elie);