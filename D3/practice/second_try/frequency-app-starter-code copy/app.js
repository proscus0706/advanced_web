
//string을 넣으면 [{}, {}] 식으로 반환함.
function getFrequencies(str){
    let sorted = str.split('').sort();
    let data = [];
    for(var i = 0; i < sorted.length; i++){
        let last = data[data.length - 1];
        if(last && last.character === sorted[i]){
            last.count++;
        } else {
            data.push({character: sorted[i], count: 1})
        }
    }
    return data;
}

d3.select("form")
    .on("submit", function(){
        d3.event.preventDefault();
        let input = d3.select("input");
        let text = input.property("value");

        //패턴을 주기위해 변수에 저장한다.
        let letters = d3.select("#letters")
            .selectAll(".letter") //내가 몰랐던 부분.
            .data(getFrequencies(text), function(data){
                return data.character;
            });

        letters
                .classed("new", false)
            .exit()
            .remove();

        letters
            .enter()
        .append("div")
            .classed("letter", true)
            .classed("new", true)
        .merge(letters) //update와 합침.
            .style("width", "20px")
            .style("line-height", "20px")
            .style("margin-right", "5px")
            .style("height", function(data){
                return data.count * 20 + "px";
            })
            .text(function(data){
                return data.character;
            });

        d3.select("#phrase")
            .text("Analysis of: " + text);

        d3.select("#count")
            .text(`(New characters: ${letters.enter().nodes().length})`);

        input.property("value", "");
    });

d3.select("#reset")
    .on("click", function(){
        d3.selectAll(".letter")
            .remove();

        d3.select("#phrase")
            .text("");

        d3.select("#count")
            .text("");
    });