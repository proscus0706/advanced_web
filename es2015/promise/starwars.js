starWarsString = (num) => {
    let promise = $.getJSON(`https://swapi.co/api/people/${num}`);
    return promise.then(function(data){
        let movieUrl = data.films[0];
        let str = `${data.name} is featured in`;
        // ${movieTitle}, directed by ${movieDirector}`;
        return [movieUrl, str];
    }).then(function(results){
        let movieUrl = results[0];
        let str = results[1];
        $.getJSON(results[0])
            .then(function(movie){
                str += ` ${movie.title}, directed by ${movie.director}`;
                return str;
            })
    })
};

starWarsString(1).then(function(data){
    console.log(data)
});