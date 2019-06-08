function* pauseAndReturnValues(num){
    for(let i = 0; i < num; i++){
        yield i;
    }
}

for(val of pauseAndReturnValues(5)){
    console.log(val);
}