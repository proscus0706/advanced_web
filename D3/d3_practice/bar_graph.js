var width = 1000;
var height = 1000;
var margin = 10;

var data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 10];
var scaleFacotr = 10;
var barHeight = 20;

var svg = d3.select("body")
    .append("svg")
        .attr("width", width)
        .attr("height", height)

    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("width", function(data){
            return 70;
        })
        .attr("height", function(data, index){
            return data * 10;
        })
        .attr("x", function(data, index){
            return 80 * index;
        })
        .attr("y", function(data, index){
            return 350 - (data * 10);
        });