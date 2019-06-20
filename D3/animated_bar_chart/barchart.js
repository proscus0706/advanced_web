// var data = [5, 10, 12];
// var width = 200;
// var scaleFactor = 10;
// var barHeight = 20;
//
// //그래프를 일단 그려야함.
// var graph = d3.select("body")
// .append("svg")
// .attr("width", width)
// .attr("height", barHeight * data.length);
//
// var bar = graph.selectAll("g")
// .data(data)
// .enter()
// .append("g")
// .attr("transform", function(data, index){
//     //각각의 인덱스별로 아래로 데이터를 나열하게 한다.
//     return "translate(0," + index * barHeight + ")";
// });
//
// bar.append("rect")
//     .attr("width", function(data){
//        return data * scaleFactor;
//        //scalefactor는 얼마만큼 크게할지 정해주는 하나의 standard같은 느낌.
//     })
//     .attr("height", barHeight - 1);
//
// bar.append("text")
//     .attr("x", data => data * scaleFactor)
//     .attr("y", barHeight / 2) //가운데로 정렬
//     .attr("dy", ".35em")
//     .text(data => data);

/*
4개의 변수
데이터: var data = [5, 10, 12]...
도화지의 넓이: var width = 200;
막대 그래프의 높이: var barHeight = 20;
막대 그래프가 얼마만큼 커질 것인지: var scaleFactor = 10;
 */

var data = [10, 34, 72];
var width = 1000;
var barHeight = 20;
var scaleFactor = 10;

//svg
var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", barHeight * data.length);

//bar
var bar = svg.selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", (data, index) => "translate(0," + index * barHeight + ")");

//rect
bar.append("rect")
    .attr("width", data => data * scaleFactor)
    .attr("height", barHeight - 1);

//text
bar.append("text")
    .attr("x", data => data * scaleFactor)
    .attr("y", data => barHeight / 2)
    .attr("dy", ".35em")
    .text(data => data);