class MessageBoard {
    constructor(){
        this.messages = new Map;
        this.id = 1;
    }
    addMessage(value){
        this.messages.set(this.id, value);
        this.id++;
        return this;
    }
    findMessageById(id){
        return this.messages.get(id);
    }
    findMessageByValue(value){
        for(let msg of this.messages.values()){
            if(msg === val) return msg;
        }
    }
    removeMessage(id){
        this.messages.delete(id);
    }
    numberOfMessages(){
        return this.messages.size;
    }
    messagesToArray(){
        //★중요 es2015에 추가된 기능이다.
        return Array.from(this.messages.values());
    }
}

function uniqueValues(arr){
    //set을 쓸 때 그냥 array를 parameter로 넘길 수 있다.
    return new Set(arr).size;
}

function hasDuplicates(arr){
    return new Set(arr).size !== arr.length;
}

/*

Write a function called countPairs which accepts an array of numbers and a number. The function should return the number of unique pairs (two numbers) that sum up to the number passed to the function.

countPairs([8,2,6,4,10,0],10) // 3
countPairs([8,2],10) // 1
countPairs([1,2],10) // 0
countPairs([1,2,3,4,5],10) // 0
countPairs([],10) // 0
countPairs([5,4,-10,6,-20,16],-4) // 2
countPairs([0,-4],-4) // 1
*/

function countPairs(arr, num){
    //num은 기준이 되는 숫자. num-val
    var cache = new Set(arr);
    var count = 0;
    for(let val of arr){
        cache.delete(val); //이렇게 해주면 중복되는 숫자랑 비교하지 않는다.
        console.log(cache);
        if(cache.has(num - val)){
            // 첫 번 째 10 - 8   cache.has(2) => true
            // 두 번 째 10 - 2   cache.has(8) => false
            // 세 번 째 10 - 6   cache.has(4) => true
            // 네 번 째 10 - 4   cache.has(6) => false
            // 5 번 째 10 - 10   cache.has(0) => true
            // 여섯 번 째 10 - 0  cache.has(10) => false
            count++;
        }
    }
    return count;
}

countPairs([8,2,6,4,10,0],10) // 3