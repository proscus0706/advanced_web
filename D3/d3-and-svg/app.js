//input[type=range] 범위 정해주기
var minYear = birthData[0].year;
var maxYear = birthData[birthData.length - 1].year;

//svg 도화지 그리기
var width = 600;
var height = 600;
//각각의 데이터를 직사각형으로 그리기.
var numBars = 12;
var barPadding = 10;
var barWidth = width / numBars - barPadding;

d3.select("input")
    .property("min", minYear)
    .property("max", maxYear)
    .property("value", minYear);

d3.select("svg")
    .attr("width", width)
    .attr("height", height)
.selectAll("rect") //이전에 봤던 패턴
.data(birthData.filter(function(data){
    return data.year === minYear;
}))
    .enter()
    .append("rect") //이전에 봤던 패턴
        .attr("width", barWidth)
        .attr("height", function(data){
            return data.births;
        })
        .attr("y", function(data){
            return height - data.births / 2.5e6 * height;
        })
        .attr("x", function(data, index){
           return (barWidth + barPadding) * index;
        })
        .attr("fill", "purple");

//인풋이 변화하면... value가 변환한다.
//그걸 시각적으로 곧바로 적용하기.
d3.select("input")
    .on("input", function(){
         var year = +d3.event.target.value; //뭐지 이 syntax는? => It converts the variable to a number.
         d3.selectAll("rect")
             .data(birthData.filter(function(data){
                 return data.year === year;
             }))
             .attr("height", function(data){
                 return data.births / 2.5e6 * height;
             })
             .attr("y", function(data){
                 return height - data.births / 2.5e6 * height;
             })
    });