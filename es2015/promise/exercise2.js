function getMostFollowers(...names){

    let promises = [];

    names.forEach(function(name){
        promises.push($.getJSON(`https://api.github.com/users/${name}`));
    });

    return Promise.all(promises).then(function(userInfos){
        //여기서 접근해라.
        let max = userInfos.sort((a, b) => a.followers - b.followers)[userInfos.length - 1];
        return `${max.name} has the most followers with ${max.followers}`;
    })
}

getMostFollowers("elie", "tigarcia", "colt").then(function(data){
    console.log(data);
});