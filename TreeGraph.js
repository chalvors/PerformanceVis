/////////////Tree graph start///////////////
var difficulty_color = d3.scaleOrdinal()
    .domain([0,1,2,3])
    .range([ "#fff","#b4d4ff", "#1871ec", "#002e6f"])

var chapter_color = d3.scaleOrdinal()
    .domain([0,1,2,3,4,5,6,7])
    .range([ "#fff", "#cea2ff", "#b6fea5", "#87b2ff", "#feaf7b", "#a3fff1", "#fffe99", "#fe8686"])



var color_by_difficulty = true
var color_by_chapter = false

var i = 0,
    duration = 350,
    root = final_tree;
var tree = d3version3.layout.tree()
    .size([360, 300])
    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 10) / a.depth; });
var diagonal = d3version3.svg.diagonal.radial()
    .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });
var treesvg = d3version3.select("#tree").append("svg")
    .attr("width", 650 )
    .attr("height", 710 )
  .append("g")
    .attr("transform", "translate(" + 365 + "," + 370 + ")");

var currentTree = "Final"

function drawTreeGraph(treeData){
  root = treeData;
  root.x0 = 400;
  root.y0 = 0;
  root.children.forEach(collapse); 
  update(root);
}

drawTreeGraph(final_tree)

function update(source) {
  // Compute the new tree layout.
  var nodes = tree.nodes(root),
      links = tree.links(nodes);
  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 80; });
  // Update the nodes…
  var node = treesvg.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });
  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      //.attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
      .on("click", click);
  nodeEnter.append("circle")
      .attr("r", 1e-6)
      .style("fill", function(d) {
       if(color_by_difficulty == true){
            return difficulty_color(d.difficulty)
       }else{
            return chapter_color(d.chapter) 
       }})
      .on("mouseover", function(d) {
          if (color_by_difficulty){
            var tobold = ".difficulty" + d.difficulty
            legend.selectAll(tobold).classed("highlight", true)
          }else{
            var tobold = ".chapter" + d.chapter
            legend.selectAll(tobold).classed("highlight", true)
          }})
        .on("mouseleave", function(d) {
          d3.selectAll(".highlight").classed("highlight", false)
        })

  nodeEnter.append("text")
      .attr("x", 10)
      .attr("dy", ".35em")
      .attr("text-anchor", "start")
      //.attr("transform", function(d) { return d.x < 180 ? "translate(0)" : "rotate(180)translate(-" + (d.name.length * 8.5)  + ")"; })
      .text(function(d) { return d.name; })
      .style("fill-opacity", 1e-6);


  nodeEnter.append("title")
    .text(function(d) {
      if(d.name.slice(0, 2) == "HW"){
        return "Correlation: " + d.correlation  + "\n" + "Difficulty Index: " + d.dindex + "\n" + "Item ID: " + d.itemID 
      }else{
        return "Correlation: " + d.correlation  + "\n" + "Difficulty Index: " + d.dindex
      }

    });


        
  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
  nodeUpdate.select("circle")
      .attr("r", function(d) {
        if(d._children != null){
            if(d._children.length >= 13){
                return 8
            }else if(d._children.length < 13 && d._children.length >= 7) {
                return 6
            }else if (d._children.length < 7  && d._children.length >= 3){
                return 4
            }else{
                return 3
            }
        }
        if(d.children != null){
          return 5;
        }
       return 2.5; 
       })
      .style("fill", function(d) {       
        if(color_by_difficulty == true){
            return difficulty_color(d.difficulty)
       }else{
            return chapter_color(d.chapter) 
       }});
  nodeUpdate.select("text")
      .style("fill-opacity", 1)
      .attr("transform", function(d) { return d.x < 180 ? "translate(0)" : "rotate(180)translate(-" + (d.name.length + 50)  + ")"; });
  // TODO: appropriate transform
  var nodeExit = node.exit().transition()
      .duration(duration)
      //.attr("transform", function(d) { return "diagonal(" + source.y + "," + source.x + ")"; })
      .remove();
  nodeExit.select("circle")
      .attr("r", 1e-6);
  nodeExit.select("text")
      .style("fill-opacity", 1e-6);
  // Update the links…
  var link = treesvg.selectAll("path.link")
      .data(links, function(d) { return d.target.id; });
  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
      });
  // Transition links to their new position.
  link.transition()
      .duration(duration)
      .attr("d", diagonal);
  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
      .duration(duration)
      .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
      })
      .remove();
  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}
// Toggle children on click.
function click(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  update(d);
}
// Collapse nodes
function collapse(d) {
  if (d.children) {
      d._children = d.children;
      d._children.forEach(collapse);
      d.children = null;
    }
}
