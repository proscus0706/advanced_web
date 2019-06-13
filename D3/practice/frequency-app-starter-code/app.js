// write your code here!

// first step: 문자열을 집어넣으면 [{ character: "e", count:1 }. { character: "o", count:3}] => 이런식의 데이터를 번환하는 함수를 만든다.
function getFrequencies(str){
    var sorted = str.split("").sort();
    var data = [];
    for(var i = 0; i < sorted.length; i++){
        var last = data[data.length - 1];
        if(last && last.character === sorted[i]) last.count++;
        else data.push({character: sorted[i], count: 1})
    }
    return data;
}

// second step: submit event에서 text를 잡는다.
d3.select("form")
    .on("submit", function(){
        d3.event.preventDefault();
        var input = d3.select("input");
        var text = input.property("value");

        // third step: data join!!!!!
        var letters = d3.select("#letters")
            .selectAll(".letter")  //****이렇게 다뤄야하는지 몰랐다. 일단 없는 element를 집어야했다.
            .data(getFrequencies(text), function(data){
                return data.character;
            });

            letters
                    .classed("new", false)
                .exit() //--- 패턴 ---
                .remove();

            letters
                .enter() //--- 패턴 ---
                .append("div") //***** append의 정확한 syntax도 몰랐다.
                    .classed("letter", true)
                    .classed("new", true)
                .merge(letters) //--- 패턴 ---
                    .style("width", "20px")
                    .style("line-height", "20px")
                    .style("margin-right", "5px")
                    .style("height", function(data){
                        return data.count * 20 + "px"; //*****이런식으로 frequency마다 height를 다르게 주는구나...
                    })
                    .text(function(data){
                        return data.character; //*****마지막으로 데이터를 출력해주자.
                    });

        d3.select("#phrase")
            .text("Analysis of: " + text);

        d3.select("#count")
            .text("(New characters: " + letters.enter().nodes().length + ")") ; //★★★★★ 이런 syntax도 처음본다.

        input.property("value", "");
    });

//reset
d3.select("#reset")
    .on("click", function(){
        d3.selectAll(".letter")
            .remove();

        d3.select("#phrase")
            .text("");

        d3.select("#count")
            .text("");
    });