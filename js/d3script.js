(function(){
    var w = 500;
    var h = 100;
    var padding= 2;
    var dataset = [5, 10, 15, 20, 25];
    var colorset = ["#FF0000", "#000080", "#808000", "#00FFFF", "#FFA500"];
    var svg = d3.select("#hook")
        .append("svg")
        .attr("width", w)
        .attr("height", h);
    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", function(d,i){
            return (i * w/dataset.length);
        })
        .style("fill", function(d, i){
            return colorset[i];
        })
        .attr("y", function(d){
            return h-(d*4);
        })
        .attr("width", w/dataset.length-padding)
        .attr("height", function(d){
            return (d*4);
        });
})();