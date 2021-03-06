(function () {
    var w = 300;
    var h = 100;
    var padding = 2;
    var dataset = [5, 10, 15, 20, 25];

    var colorPicker = function(v){
        if(v < 20){
            return "#666666"
        }
        else if(v > 20){
            return "#FF0033"
        }
    }

    var svg = d3.select("#hook")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", function(d, i){return i * (w/dataset.length);})
        .attr("y", function(d){return h - (d * 4);})
        .attr("width", w / dataset.length - padding)
        .attr("height", function (d) {return d * 4;})
        .style("fill", function (d) {return colorPicker(d);})
})();