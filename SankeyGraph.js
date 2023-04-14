
///////////////sankey graph start///////////////
var units = "Students";
var sankeyClicked = false;
 
var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 900 - margin.left - margin.right,
    height = 750 - margin.top - margin.bottom;

var formatNumber = d3.format(",.0f"),    // zero decimal places
    formatMillions = d3.format(",.4s"),    // millions, 1 decimal place
    formatFactor = d3.format(",.2f"),    // 2 decimal places
    format = function(d) { return formatNumber(d) + " " + units; },
    sankeycolor = d3.scaleOrdinal()
        .domain(['A', 'B', 'C', 'D', 'F'])
        .range(['#00ABA5', '#00A231', '#e2d000', '#E69200', '#DA1D02'])

// append the svg canvas to the page
var sankeysvg = d3.select("#sankey").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

// Set the sankey diagram properties
var sankey = d3.sankey()
    .nodeWidth(36)
    .nodePadding(40)
    .size([width, height]);

var path = sankey.link();

// load the data (using the timelyportfolio csv method)
d3.csv("sankeyData.csv", function(error, data) {

  //set up graph in same style as original example but empty
  graph = {"nodes" : [], "links" : []};

    data.forEach(function (d) {
      graph.nodes.push({ "name": d.source, "status": d.source.split(":")[0], 
                         "source_value": +d.source_value });
      graph.nodes.push({ "name": d.target, "status": d.source.split(":")[0], 
                         "target_value": +d.target_value });
      graph.links.push({ "source": d.source,
                         "target": d.target,
                         "value": +d.value,
                         "source_value": +d.source_value,
                         "target_value": +d.target_value});
     });

     // return only the distinct / unique nodes
    graph.nodes = d3.nest()
        .key( function(d) { return d.name; })
        .rollup(function(d, i){
          return {
          "name": d[0].name, 
          "status": d[0].status, 
          "source_value": d3.sum(d, function(dd) { return dd.source_value; }),
          "target_value": d3.sum(d, function(dd) { return dd.target_value; })
        }})
        .entries(graph.nodes);
  
    graph.nodekeys = graph.nodes.map(function(d){ return d.key });
  

     graph.links.forEach(function (d, i) {
       graph.links[i].source = graph.nodekeys.indexOf(graph.links[i].source);
       graph.links[i].target = graph.nodekeys.indexOf(graph.links[i].target);
     });


     graph.nodes.forEach(function (d, i) {
       graph.nodes[i] = d.value;
     });

  sankey
    .nodes(graph.nodes)
    .links(graph.links)
    .layout(32);

// add in the links
  var link = sankeysvg.append("g").selectAll(".slink")
      .data(graph.links)
      .enter().append("path")
      .attr("class", "slink")
      .attr("d", path)
      .on("click", function(d){

          compareOne1 = " "
          compareOne2 = " "
          compareOne3 = " "
          compareOne4 = " "


          if(d.source.name.slice(0, 5) == "Exam1"){
            if(d.source.name.slice(6, 7) == "A"){
              compareOne1 = "A"
            }else if(d.source.name.slice(6, 7) == "B"){
              compareOne1 = "B"
            }else if(d.source.name.slice(6, 7) == "C"){
              compareOne1 = "C"
            }else if(d.source.name.slice(6, 7) == "D"){
              compareOne1 = "D"
            }else if(d.source.name.slice(6, 7) == "F"){
              compareOne1 = "F"
            }
          }
          if(d.source.name.slice(0, 5) == "Exam2"){
            if(d.source.name.slice(6, 7) == "A"){
              compareOne2 = "A"
            }else if(d.source.name.slice(6, 7) == "B"){
              compareOne2 = "B"
            }else if(d.source.name.slice(6, 7) == "C"){
              compareOne2 = "C"
            }else if(d.source.name.slice(6, 7) == "D"){
              compareOne2 = "D"
            }else if(d.source.name.slice(6, 7) == "F"){
              compareOne2 = "F"
            }
          }
          if(d.source.name.slice(0, 5) == "Exam3"){
            if(d.source.name.slice(6, 7) == "A"){
              compareOne3 = "A"
            }else if(d.source.name.slice(6, 7) == "B"){
              compareOne3 = "B"
            }else if(d.source.name.slice(6, 7) == "C"){
              compareOne3 = "C"
            }else if(d.source.name.slice(6, 7) == "D"){
              compareOne3 = "D"
            }else if(d.source.name.slice(6, 7) == "F"){
              compareOne3 = "F"
            }
          }
          if(d.source.name.slice(0, 5) == "Final"){
            if(d.source.name.slice(6, 7) == "A"){
              compareOne4 = "A"
            }else if(d.source.name.slice(6, 7) == "B"){
              compareOne4 = "B"
            }else if(d.source.name.slice(6, 7) == "C"){
              compareOne4 = "C"
            }else if(d.source.name.slice(6, 7) == "D"){
              compareOne4 = "D"
            }else if(d.source.name.slice(6, 7) == "F"){
              compareOne4 = "F"
            }
          }

          if(d.target.name.slice(0, 5) == "Exam1"){
            if(d.target.name.slice(6, 7) == "A"){
              compareOne1 = "A"
            }else if(d.target.name.slice(6, 7) == "B"){
              compareOne1 = "B"
            }else if(d.target.name.slice(6, 7) == "C"){
              compareOne1 = "C"
            }else if(d.target.name.slice(6, 7) == "D"){
              compareOne1 = "D"
            }else if(d.target.name.slice(6, 7) == "F"){
              compareOne1 = "F"
            }
          }
          if(d.target.name.slice(0, 5) == "Exam2"){
            if(d.target.name.slice(6, 7) == "A"){
              compareOne2 = "A"
            }else if(d.target.name.slice(6, 7) == "B"){
              compareOne2 = "B"
            }else if(d.target.name.slice(6, 7) == "C"){
              compareOne2 = "C"
            }else if(d.target.name.slice(6, 7) == "D"){
              compareOne2 = "D"
            }else if(d.target.name.slice(6, 7) == "F"){
              compareOne2 = "F"
            }
          }
          if(d.target.name.slice(0, 5) == "Exam3"){
            if(d.target.name.slice(6, 7) == "A"){
              compareOne3 = "A"
            }else if(d.target.name.slice(6, 7) == "B"){
              compareOne3 = "B"
            }else if(d.target.name.slice(6, 7) == "C"){
              compareOne3 = "C"
            }else if(d.target.name.slice(6, 7) == "D"){
              compareOne3 = "D"
            }else if(d.target.name.slice(6, 7) == "F"){
              compareOne3 = "F"
            }
          }
          if(d.target.name.slice(0, 5) == "Final"){
            if(d.target.name.slice(6, 7) == "A"){
              compareOne4 = "A"
            }else if(d.target.name.slice(6, 7) == "B"){
              compareOne4 = "B"
            }else if(d.target.name.slice(6, 7) == "C"){
              compareOne4 = "C"
            }else if(d.target.name.slice(6, 7) == "D"){
              compareOne4 = "D"
            }else if(d.target.name.slice(6, 7) == "F"){
              compareOne4 = "F"
            }
          }

          sankeyClicked = true
          document.getElementById("parallelButton").click();


          drawParallel()
          document.getElementById('compareOne1').value = String(compareOne1);
          document.getElementById('compareOne2').value = String(compareOne2); 
          document.getElementById('compareOne3').value = String(compareOne3);
          document.getElementById('compareOne4').value = String(compareOne4); 
        })
	  
      .style("stroke-width", function(d) { return d.dy; })	  	
      .style("stroke", function(d) { 
        return sankeycolor(d.source.name[6]); })
	  /*
	  .style("stroke", d => `url(#${getGradientId(d)})`)
	  .style("stroke-width", d => Math.max(1.0, d.width))
	  */
      .sort(function(a, b) { return b.dy - a.dy; });

// add the link titles
link.append("title")
        .text(function(d) {
          var num = 100 * d.value/d.source.value
          num = Number(Math.round(num+'e2')+'e-2');
        return d.source.name + " → " + 
                d.target.name + "\n" + format(d.value) + " " +  "(" + num + "%)"; });

//
/* add the link gradient color
var gradients = link.append("linearGradient")
				.attr("gradientUnits", "userSpaceOnUse")
				.attr("x1", d => d.source.x1)
				.attr("x2", d => d.target.x0)
				.attr("id", d => getGradientId(d));
addGradientStop(gradients, 0.0, d => color(d.source.index));
addGradientStop(gradients, 1.0, d => color(d.target.index));								
*/
								
// add in the nodes
  var node = sankeysvg.append("g").selectAll(".node")
      .data(graph.nodes)
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { 
      return "translate(" + d.x + "," + d.y + ")"; })
    // .call(d3.drag()
    //     .subject(function(d) { return d; })
    //     .on("start", function() { this.parentNode.appendChild(this); })
    //     .on("drag", dragmove));
  
// add the rectangles for the nodes
  node.append("rect")
      .attr("height", function(d, i) { return d.dy; })
      .attr("width", sankey.nodeWidth())
      .style("fill", function(d) { 
      return d.color = sankeycolor(d.name[6]); })
      .style("stroke", function(d) { 
      return d3.rgb(d.color).darker(2); })
    .append("title")
      .text(function(d) { 
      return d.name + "\n" + format(d.value); });

// add in the title for the nodes
  node.append("text")
      .style("font-size", "16px")
      .attr("x", -6)
      .attr("y", function(d) { return d.dy / 2; })
      .attr("dy", "0.35em")
      .attr("text-anchor", "end")
      .text(function(d) {
          var t = d.name;
          t = t[t.length -1];
          return t;
        })
    .filter(function(d) { return d.x < width / 2; })
      .attr("x", 6 + sankey.nodeWidth())
      .attr("text-anchor", "start");



// the function for moving the nodes
  // function dragmove(d) {
  //   d3.select(this)
  //     .attr("transform", 
  //           "translate(" 
  //              + d.x + "," 
  //              + (d.y = Math.max(
  //                 0, Math.min(height - d.dy, d3.event.y))
  //                ) + ")");
  //   sankey.relayout();
  //   link.attr("d", path);
  // }
});


function updateSankey() {
    sankeysvg
      .selectAll(".slink")
      .transition()
      .duration(350)
      .style("stroke", function(d) { 
        return sankeycolor(d.source.name[6]); })

    sankeysvg
      .selectAll("rect")
      .transition()
      .duration(350)
      .style("fill", function(d) { 
        return d.color = sankeycolor(d.name[6]); })
      .style("stroke", function(d) { 
        return d3.rgb(d.color).darker(2); })
     
}




