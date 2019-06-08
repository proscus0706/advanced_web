var movieCollector = {
    data: "titanic",
    async getMovie(){
        var response = await $.getJson(`https://omdbapi.com?t=${this.data}&apikey=thewdb`);
        console.log(response);
    }
};