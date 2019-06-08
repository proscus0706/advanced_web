function* getMovieData(movieName){
    console.log("Starting");
    yield $.getJSON(`https://omdbapi.com?t=${movieName}&apikey=thewdb`);
    console.log("ending");
}

var movieGetter = getMovieData("titanic");
movieGetter.next().value.then(val => console.log(val));