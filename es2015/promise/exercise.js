function getMostFollowers(...names) {

    var promises = [];

    names.forEach(function(name){
        promises.push(getPromise(name));
    });

    return Promise.all(promises).then(function(data){

        //이렇게 해줘야 개별 data에 접근할 수 있다..
        console.log(data);

        let max = data.sort((a, b) => a.followers < b.followers)[0];
        return `${max.name} has the most followers with ${max.followers}`;
    })
}
// "Colt has the most followers with 424"

//각각의 promise를 return 해주는 함수
function getPromise(user){
    return $.ajax({
        type: "GET",
        url: "https://api.github.com/users/" + user,
        dataType: "json",
        success: function(result){
           // console.log(result);
        }
    })
}



getMostFollowers("elie", "tigarcia", "colt");