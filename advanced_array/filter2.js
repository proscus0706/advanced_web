function onlyFourLetterNames(arr){
    return arr.filter(function(value){
        return value.length === 4;
    });
}



console.log(onlyFourLetterNames(['Rusty', 'Matt', 'Moxie', 'Colt']));