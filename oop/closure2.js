function outerFn(){
    var data = "Something from outerFn";
    var fact = "Remember me!";
    return function innerFn(){
        //if you keep the chrome dev tools open
        //this will pause our code and place us
        //in the sources tab where we can examine variables
        debugger;
        return fact;
    }
}

var outer = outerFn();
outer();