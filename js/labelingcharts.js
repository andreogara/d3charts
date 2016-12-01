(function () {
    var w = 300;
    var h = 200;
    var padding = 2;
    var dataset = [5, 10, 15, 20, 25, 13, 19, 17, 23];
    var colorset = ["#FF0000", "#000080", "#808000", "#00FFFF", "#FFA500", "#00CED1", "#708090", "#DA70D6", "#D2691E"];

    var svg = d3.select("#hook")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", function (d, i) {
            return (i * (w / dataset.length))+3;
        })
        .attr("y", function (d) {
            return h - (d * 4);
        })
        .attr("width", w / dataset.length - padding)
        .attr("height", function (d) {
            return d * 4;
        })
        .style("fill", function (d, i) {
            return colorset[i];
        })


    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function(d){
            return d;
        })
        .attr("text-anchor", "middle")
        .attr("x", function (d,i) {
            return (i * (w/dataset.length)+3)+(w/dataset.length -padding)/2;
        })
        .attr("y", function (d) {
            return h - (d*4)+16;
        })
})();