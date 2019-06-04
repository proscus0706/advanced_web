fetch(url)
    .then(function(res){
        //기본적으로 통신에 실패하더라도 fetch는 오류를 던지지 않는다.
        //그래서 아래와 같이 핸들링한다.
        if(!res.ok){
            throw Error(404); //up to you
        }
        return res;
    })
    .then(function(response){
        console.log("ok");
    })
    .catch(function(error){
        console.log(error);
    });


