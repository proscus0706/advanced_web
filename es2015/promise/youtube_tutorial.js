//promise
let p = new Promise((resolve, reject) => {
   let a = 1 + 1;
   if( a === 2){
       resolve("Success");
   } else {
       reject("Failed");
   }
});

p.then((message) => {
    //then method 붙이면 resolve를 실행.
    //parameter에 들어간 message가 위 resolve("Success"); 에서 "Success"임.
    console.log("This is in the then " + message);
}).catch((message) => {
    //catch는 reject를 실행
    //parameter에 들어간 message가 위 reject("failed"); 에서 "failed"임.
    console.log("This is in the catch " + message);
});
