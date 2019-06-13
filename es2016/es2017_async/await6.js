async function getMovieData(first, second){
    var movieList = await Promise.all([
        $.getJSON(`https://ombdapi.com?t=titanic&apikey=thewdb`),
        $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewb`)
    ]);
    console.log(movieList[0].Year);
    console.log(movieList[1].Year);
}

getMovieData("shrek", "blade");

//2001
//1998