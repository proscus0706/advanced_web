//api에서 가져온 정보를 읽는 것에 집중하자.

function getMostFollowers(...usernames){
    let baseURL = "https://api.github.com/users/";
    let urls = usernames.map(username => $.getJSON(baseUrl + username));
    return Promise.all(urls).then(function(data){
        let max = data.sort((a, b) => a.followers < b.followers)[0];
        return `${max.name} has the most followers with ${max.followers}`;
    })
}