// SEQUENTIAL NOT PARALLEL
async function getMovieData(){
    var responseOne = await $.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`);
    var responseTwo = await $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewdb`);
    console.log(responseOne);
    console.log(responseTwo);
}

getMovieData();

// refactoring
// Much Fater!
async function getMovieData(){
    //일단 여기서 request를 동시에 한다.
    var titanicPromise = $.getJSON(`https://ombdapi.com?t=titanic&apikey=thewdb`);
    var shrekPromise = $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewb`);
    //변수에 넣을 때만 딱 딱 기다려 주면 된다.
    var titanicData = await titanicPromise;
    var shrekData = await shrekPromise;

    console.log(titanicData);
    console.log(shrekData);
}

getMovieData();