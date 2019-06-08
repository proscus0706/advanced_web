function displayAtRandomTime(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(Math.random() > .5){
                resolve("Yes!")
            } else {
                reject("No!");
            }
        })
    }, 1000);
}

displayAtRandomTime()
.then(function(value){
    console.log(value);
})
.catch(function(error){
    console.log(error);
});