function* pauseAndReturnValues(num){
    for(let i = 0; i < num; i++){
        yield i;
    }
}

var gen = pauseAndReturnValues(5);

gen.next(); // 0, false
gen.next(); // 0, false
gen.next(); // 0, false
gen.next(); // 0, false
gen.next(); // 0, false
gen.next(); // 0, true


function* printValues(){
    yield "First";
    yield "Second";
    yield "Third";
}

var g = printValues();
g.next().value; //first
g.next().value; //second
g.next().value; //third