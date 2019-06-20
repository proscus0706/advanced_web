// we'll write this code together

var width = 600;
var height = 600;
var barPadding = 1;

var minYear = d3.min(birthData, d => d.year);
// birthData 데이터 set에서 최소값을 찾아서 저장한다.
var yearData = birthData.filter(d => d.year === minYear);
// birthData에서 제일 작은 년도 minYear값에 해당하는 값들만 저장해서 어레이로 리턴한다.

var histogram = d3.histogram()
                    .value(d => d.births);

var bins = histogram(yearData);

var barWidth = width / bins.length - barPadding;

var yScale = d3.scaleLinear()
                .domain([0, d3.max(bins, d => d.length)])
                .range([height, 0]);

var bars = d3.select("svg")
            .attr("width", width)
            .attr("height", height)
        .selectAll(".bar")
        .data(bins)
        .enter()
        .append("g")
            .classed("bar", true);

bars
    .append("rect")
        .attr("x", (d, i) => (barWidth + barPadding) * i)
        .attr("y", d => yScale(d.length))
        .attr("height", d => height - yScale(d.length))
        .attr("witdh", barWidth)
        .attr("fill", "#9c27b0");