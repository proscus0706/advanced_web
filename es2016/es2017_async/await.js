async function getMovieData(){
    console.log("starting!");
    var movieData = await $.getJSON("https://omdbapi.com?t=titanic&apikey=thewdb");
    //this line does NOT run until the promise is resolved!
    console.log("all done!");
    console.log(movieData);
}

getMovieData(); //logs an object with data about the movie!
//잠깐!!! return 값이 없으면 어떻게 돌아가는거지?