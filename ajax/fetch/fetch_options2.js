var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url, {
    method: 'GET',
    body: 'THIS IS THE BODY OF THE REQUEST!!!'
})
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
        console.log(data.bpi.ERU.rate)
    });