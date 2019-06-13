// write your code here!

/*
1. Count the button을 누를 시, input창에 있는 값을 가져온다.- done
2. 일단 그 값을 데이터라는 어레이에 저장한다. - done
3. 일단 화면에 보여준다. - done
4. abcd 순서로 중복을 제거하여 보여주게 한다. - done
5. 많이 나온 숫자대로 '특정 로직'을 추가한다.(height를 추가하면 될 것 같다.)
6. reset 버튼
*/

let userInput = {};

//버튼을 클릭했을 때는 일단 데이터를 가져온다.
d3.select("form")
    .on("submit", function(){
        d3.event.preventDefault();
        let phrase = d3.select("input[type=text]").property("value");
        d3.select("input[type=text]").property("value", "");

        //아래 코드 설명
        //1. 일단 문자 열을 어레이로 바꾼다.
        let phrase_array = phrase.split(""); //문자열을 어레이로 바꾸는 코드
        //2. 중복되는 것 갯수 세주기.
        userInput = phrase_array.reduce(function(accumulator, nextValue, index, array){
            if(accumulator[nextValue]){
                accumulator[nextValue]++;
            } else {
                accumulator[nextValue] = 1;
            }
            return accumulator;
        }, {});
        //3. 중복되는 숫자만 출력하기
        var newLetterCounter = Object.keys(userInput).length;
        //***Object.keys(객체) => 객체의 키들을 따로 빼서 어레이로 반환

        console.log(userInput);

        //문장 출력.
        d3.select("#phrase")
            .text(`Anaylysis of: ${phrase}`);
        //카운트 출력.
        d3.select("#count")
            .text(`(New characters: ${newLetterCounter})`);
        //문자 출력.
        d3.select("#letters")
            .data(userInput, function(data){
                return data;
            })
            .enter()
            .append(`<p>${haha}</p>`);

    });

d3.select("#reset")
    .on("click", function(){

    });
// d3.select("#reset")
//     .data(userInput)
//     .on("click", function(){
//         d3.event.preventDefault();
//         d3.select("#phrase")
//             .text('');
//         d3.select("#count")
//             .text('');
//     })
//     .exit()
//     .remove();