function getUserInfo(username){
    //api에서 user이름을 가져옴.
    return $.getJSON("https://api.github.com/users/" + username);
}

describe("#getUserInfo", function(){
    it("returns the correct name for the user", function(done){
        getUserInfo("elie").then(function(data){
            expect(data.name).toBe("Elie Schoppik");
            done();
        });
    });
});