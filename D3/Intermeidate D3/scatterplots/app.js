//그래프의 width * height
var width = 500;
var height = 500;
var padding = 30;

var yMax = d3.max(birthData2011, d => d.lifeExpectancy);
var yMin = d3.min(birthData2011, d => d.lifeExpectancy);

var yScale = d3.scaleLinear()
            .domain(d3.extent(birthData2011, d => d.lifeExpectancy))
            .range([height - padding, padding]); //y축, 원래는 height, 0
var xScale = d3.scaleLinear()
            .domain(d3.extent(birthData2011, d => d.births / d.population))
            .range([padding, width - padding]); //x축, 원래는 0, width

var xAxis = d3.axisBottom(xScale) //아래 눈금그리기 (x축)
            .tickSize(-height + 2 * padding);
var yAxis = d3.axisLeft(yScale) //왼쪽 눈금그리기 (y축)
            .tickSize(-width + 2 * padding);
//population density ( population / area )에 따라서 색깔추가. 인구 밀도가 높을 수록 검은색이 됨.
var colorScale = d3.scaleLinear()
                .domain(d3.extent(birthData2011, d => d.population / d.area))
                .range(['lightgreen', 'black']);

//태어나는 인구가 많을 수록 원이 커짐.
var radiusScale = d3.scaleLinear()
                    .domain(d3.extent(birthData2011, d => d.births))
                    .range([2, 40]);

//자주 쓰이는 xAxis 패턴 그리기
d3.select("svg")
    .append("g")
        .attr("transform", "translate(0," + (height - padding) + ")")
        .call(xAxis); //이런식으로 쓴다.

d3.select("svg")
    .append("g")
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxis);

d3.select("svg")
        .attr("width", width)
        .attr("height", height)
    .selectAll("circle")
    .data(birthData2011)
    .enter()
    .append("circle")
        .attr("cx", d => xScale(d.births / d.population))
        .attr("cy", d => yScale(d.lifeExpectancy))
        .attr("fill", d => colorScale(d.population / d.area)) //density가 높으면 높을 수록 검은색이 된다.
        .attr("r", d => radiusScale(d.births));

//text label 달기
d3.select("svg")
    .append("text")
        .attr("x", width / 2)
        .attr("y", height - padding)
        .attr("dy", "1.5em")
        .style("text-anchor", "middle")
        .text("Births per Capita");

//title 달기
d3.select("svg")
    .append("text")
        .attr("x", width / 2)
        .attr("y", padding)
        .style("text-anchor", "middle")
        .style("font-size", "1.5em")
        .text("Data on Births by Country in 2100");

//y축 label 달기
d3.select("svg")
    .append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", - height / 2)
        .attr("y", padding)
        .attr("dy", "-1.1em")
        .style("text-anchor", "middle")
        .text("Life Expectancy");