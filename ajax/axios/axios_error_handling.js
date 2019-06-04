var btn = document.querySelector("button");
var section = document.querySelector("#comments");
btn.addEventListener("click", sendRequest);

function sendRequest(){
    axios.get("https://jsonplaceholder.typicode.com/comments?post", {
        //이 params을 통해서 더욱더 dynamic하게 사용 가능하다.
        params: {
            postId: 1
        }
    })
        .then(addComments)
        .catch(handleErrors)
}

function addComments(res){
    //res가 어레이 형태로 오나보다. 그러므로 forEach를 사용 가능.
    res.data.forEach(function(comment){
        appendComment(comment);
    });
}

function appendComment(comment){
    var newP = document.createElement("p");
    newp.innerText = comment.email;
    section.appendChild(newP);
}

function handleErrors(err){
    if(err.response){
        console.log("Problem With Response ", err.response.status);
    } else if(err.request){
        console.log("Problem With Request!");
    } else {
        console.log("Error", err.message);
    }
    //axios에서 제공해주는 err에 내부에 err.response.status, err.message가 있다.
}