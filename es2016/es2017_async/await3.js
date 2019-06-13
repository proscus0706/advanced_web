class MovieData {
    constructor(name){
        this.name = name;
    }
    async getMovie(){
        var response = await $.getJSON(`https://omdbapi.com?t=${this.name}&apikey=thewdb`);

    }
}

var m = new MovieData("Shrek");
m.getMovie();