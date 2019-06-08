function add1(a, b){
    return a + b
}

add(); // NaN because a is undefined and b is undefined
// undefined + undefined = NaN

function add2(a, b){
    if(a === undefined){
        a = 2;
    }
    if(b === undefined){
        b = 2;
    }
    return a + b;
}

function add3(a=10, b=20){
    return a + b;
}

add(); // 30
add(20); // 40