var minYear = d3.min(birthData, function(data){
    return data.year;
});
var maxYear = d3.max(birthData, function(data){
    return data.year;
});
var width = 600;
var height = 600;
var barPadding = 10;
var numBars = 12;
var barWidth = width / numBars - barPadding;
var maxBirths = d3.max(birthData, function(data){
    return data.births;
});

d3.select("input")
    .property("min", minYear)
    .property("max", maxYear)
    .property("value", minYear);

d3.select("svg")
    .attr("width", width)
    .attr("height", height)
  .selectAll("rect")
  .data(birthData.filter(function(d) {
    return d.year === minYear;
  }))
  .enter()
  .append("rect")
    .attr("width", barWidth)
    .attr("height", function(d) {
      return height - yCale(d.births);
    })
    .attr("y", function(d) {
      return d.births;
    })
    .attr("x", function(d,i) {
      return (barWidth + barPadding) * i;
    })
    .attr("fill", "purple");

d3.select("input")
    .on("input", function() {
      var year = +d3.event.target.value;
      d3.selectAll("rect")
        .data(birthData.filter(function(d) {
          return d.year === year;
        }))
          .attr("height", function(d) {
            return height - yScale(d.births);
          })
          .attr("y", function(d) {
            return yScale(data.births);
          });
    });

