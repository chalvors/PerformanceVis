
///////////////Force graph start///////////////
var forcesvg = d3.select("#force").append("svg")
    .attr("width", 660 )
    .attr("height", 250 )
  .append("g")
    .attr("transform", "translate(" + 0 + "," + 0 + ")");

var legend = d3.select("#legend").append("svg")
    .attr("width", 200 )
    .attr("height", 250 )
  .append("g")
    .attr("transform", "translate(" + 0 + "," + 0 + ")");

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody())
    .force("link", d3.forceLink().id(function(d) { return d.id; }).distance(function(d) { return 20 }).strength(1))
    .force("center", d3.forceCenter(740 / 2, 270 / 2));


drawForceGraph("Final.json");

function drawForceGraph(dataName){

  forcesvg.selectAll("g").remove();
  legend.selectAll(".chapter").remove();
  legend.selectAll(".difficulty").remove();

  simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody())
    .force("link", d3.forceLink().id(function(d) { return d.id; }).distance(function(d) { return 20 }).strength(1))
    .force("center", d3.forceCenter(740 / 2, 270 / 2));


  d3.json(dataName, function(graph) {

    var link = forcesvg.append("g")
        .attr("class", "links")
      .selectAll("line")
      .data(graph.links)
      .enter().append("line")
        .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

    var node = forcesvg.append("g")
        .attr("class", "nodes")
      .selectAll("g")
      .data(graph.nodes)
      .enter().append("g")
      
    var circles = node.append("circle")
        .attr("r", 5)
        .attr("fill", function(d) {        
         if(color_by_difficulty == true){
              return difficulty_color(d.difficulty)
         }else{
              return chapter_color(d.chapter) 
         }})
        .style("stroke", "steelblue")
        .style("stroke-width", "0.5px")
        .style("cursor", "pointer")
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
        .on("click", function(d,i){
          if (currentTree == "Final"){
            if(i <= 15){
                click(root.children[i])
            }else if(i >= 16 && i <= 18){
                if(root.children[16].children){
                    click(root.children[16].children[i-16])
                }else{
                    click(root.children[16])
                    click(root.children[16].children[i-16])
                }
                  
            }else if(i >= 19 && i <= 23){
                if(root.children[17].children){
                    click(root.children[17].children[i-19])
                }else{
                    click(root.children[17])
                    click(root.children[17].children[i-19])
                }

            }else if(i >= 24 && i <= 27){
                if(root.children[18].children){
                    click(root.children[18].children[i-24])
                }else{
                    click(root.children[18])
                    click(root.children[18].children[i-24])
                }

            }else if(i >= 28 && i <= 31){
                if(root.children[19].children){
                    click(root.children[19].children[i-28])
                }else{
                    click(root.children[19])
                    click(root.children[19].children[i-28])
                }
            }

          }else if (currentTree == "Exam1"){
            if(i <= 11){
                click(root.children[i])
            }else if(i >= 12 && i <= 15){
                if(root.children[12].children){
                    click(root.children[12].children[i-12])
                }else{
                    click(root.children[12])
                    click(root.children[12].children[i-12])
                }
                
            }else if(i >= 16 && i <= 19){
                if(root.children[13].children){
                    click(root.children[13].children[i-16])
                }else{
                    click(root.children[13])
                    click(root.children[13].children[i-16])
                }

            }else if(i >= 20 && i <= 21){
                if(root.children[14].children){
                    click(root.children[14].children[i-20])
                }else{
                    click(root.children[14])
                    click(root.children[14].children[i-20])
                }

            }

          }else if (currentTree == "Exam2"){
            if(i <= 11){
                click(root.children[i])
            }else if(i >= 12 && i <= 14){
                if(root.children[12].children){
                    click(root.children[12].children[i-12])
                }else{  
                    click(root.children[12])
                    click(root.children[12].children[i-12])
                }
                
            }else if(i >= 15 && i <= 17){
                if(root.children[13].children){
                    click(root.children[13].children[i-15])
                }else{
                    click(root.children[13])
                    click(root.children[13].children[i-15])
                }

            }

          }else if (currentTree == "Exam3"){
            click(root.children[i])
          }

        })
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));


    node.append("title")
        .text(function(d) { return d.id + "\n" + "Difficulty Index: " + d.dindex });



    //legend
    updateLegend()



    d3.select("#force_tree_color_dropdown").on("change", function(d) {

        var selectedOption = d3.select(this).property("value")

        if(selectedOption == "Difficulty Index"){
          color_by_difficulty = true;
          color_by_chapter = false;
        }else{
          color_by_difficulty = false;
          color_by_chapter = true;
        }

        update(root)
        updateForce()
        updateLegend()
    })



    simulation
        .nodes(graph.nodes)
        .on("tick", ticked);

    simulation.force("link")
        .links(graph.links);

    function ticked() {
      link
          .attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });

      node
          .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
          })
    }
  });
}

function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}


function updateForce() {
    forcesvg
      .selectAll("circle")
      .transition()
      .duration(350)
      .attr("fill", function(d) {        
         if(color_by_difficulty == true){
              return difficulty_color(d.difficulty)
         }else{
              return chapter_color(d.chapter) 
         }
     })
}

function updateLegend() {

 if(color_by_difficulty == true){
        legend.selectAll(".chapter").remove();

        legend.append("circle")
            .attr("class", "difficulty") 
            .attr("cx",40)
            .attr("cy",30)
            .attr("r", 6)
            .style("stroke", "steelblue")
            .style("stroke-width", "0.5px")
            .style("fill", difficulty_color(1))
        legend.append("circle")
            .attr("class", "difficulty") 
            .attr("cx",40)
            .attr("cy",60)
            .attr("r", 6)
            .style("stroke", "steelblue")
            .style("stroke-width", "0.5px")
            .style("fill", difficulty_color(2))
        legend.append("circle")
            .attr("class", "difficulty") 
            .attr("cx",40)
            .attr("cy",90)
            .attr("r", 6)
            .style("stroke", "steelblue")
            .style("stroke-width", "0.5px")
            .style("fill", difficulty_color(3))

         legend.append("text")
            .attr("class", "difficulty difficulty1") 
            .attr("x", 50)
            .attr("y", 35)
            .text("Easy")
            .style("font-size", "15px")
            .attr("alignment-baseline","middle")
        legend.append("text")
            .attr("class", "difficulty difficulty2") 
            .attr("x", 50)
            .attr("y", 65)
            .text("Medium")
            .style("font-size", "15px")
            .attr("alignment-baseline","middle")
        legend.append("text")
            .attr("class", "difficulty difficulty3") 
            .attr("x", 50)
            .attr("y", 95)
            .text("Difficult")
            .style("font-size", "15px")
            .attr("alignment-baseline","middle")

     }else{
        legend.selectAll(".difficulty").remove();

        legend.append("circle")
            .attr("class", "chapter") 
            .attr("cx",40)
            .attr("cy",30)
            .attr("r", 6)
            .style("stroke", "steelblue")
            .style("stroke-width", "0.5px")
            .style("fill", chapter_color(1))
        legend.append("circle")
            .attr("class", "chapter") 
            .attr("cx",40)
            .attr("cy",60)
            .attr("r", 6)
            .style("stroke", "steelblue")
            .style("stroke-width", "0.5px")
            .style("fill", chapter_color(2))
        legend.append("circle")
            .attr("class", "chapter") 
            .attr("cx",40)
            .attr("cy",90)
            .attr("r", 6)
            .style("stroke", "steelblue")
            .style("stroke-width", "0.5px")
            .style("fill", chapter_color(3))
        legend.append("circle")
            .attr("class", "chapter") 
            .attr("cx",40)
            .attr("cy",120)
            .attr("r", 6)
            .style("stroke", "steelblue")
            .style("stroke-width", "0.5px")
            .style("fill", chapter_color(4))
        legend.append("circle")
            .attr("class", "chapter") 
            .attr("cx",40)
            .attr("cy",150)
            .attr("r", 6)
            .style("stroke", "steelblue")
            .style("stroke-width", "0.5px")
            .style("fill", chapter_color(5))
        legend.append("circle")
            .attr("class", "chapter") 
            .attr("cx",40)
            .attr("cy",180)
            .attr("r", 6)
            .style("stroke", "steelblue")
            .style("stroke-width", "0.5px")
            .style("fill", chapter_color(6))
        legend.append("circle")
            .attr("class", "chapter") 
            .attr("cx",40)
            .attr("cy",210)
            .attr("r", 6)
            .style("stroke", "steelblue")
            .style("stroke-width", "0.5px")
            .style("fill", chapter_color(7))

         legend.append("text")
            .attr("class", "chapter chapter1") 
            .attr("x", 50)
            .attr("y", 35)
            .text("Atoms")
            .style("font-size", "15px")
            .attr("alignment-baseline","middle")
        legend.append("text")
            .attr("class", "chapter chapter2") 
            .attr("x", 50)
            .attr("y", 65)
            .text("Molecules")
            .style("font-size", "15px")
            .attr("alignment-baseline","middle")
        legend.append("text")
            .attr("class", "chapter chapter3") 
            .attr("x", 50)
            .attr("y", 95)
            .text("Fundamentals")
            .style("font-size", "15px")
            .attr("alignment-baseline","middle")
        legend.append("text")
            .attr("class", "chapter chapter4") 
            .attr("x", 50)
            .attr("y", 125)
            .text("Equilibrium")
            .style("font-size", "15px")
            .attr("alignment-baseline","middle")
        legend.append("text")
            .attr("class", "chapter chapter5") 
            .attr("x", 50)
            .attr("y", 155)
            .text("Reactions")
            .style("font-size", "15px")
            .attr("alignment-baseline","middle")
        legend.append("text")
            .attr("class", "chapter chapter6") 
            .attr("x", 50)
            .attr("y", 185)
            .text("Thermodynamics")
            .style("font-size", "15px")
            .attr("alignment-baseline","middle")
        legend.append("text")
            .attr("class", "chapter chapter7") 
            .attr("x", 50)
            .attr("y", 215)
            .text("States of Matter")
            .style("font-size", "15px")
            .attr("alignment-baseline","middle") 

     }

}


var force_tree_color_dropdown = ["Difficulty Index","Topic"]

  d3.select("#force_tree_color_dropdown")
      .selectAll('myOptions')
      .data(force_tree_color_dropdown)
      .enter()
      .append('option')
      .text(function (d) { return d; }) 
      .attr("value", function (d) { return d; }) 




var input_data_dropdown = [{"value": "Final","text": "Final Exam"},
                {"value": "Exam1","text": "Exam 1"},
                {"value": "Exam2","text": "Exam 2"},
                {"value": "Exam3","text": "Exam 3"} ]


  d3.select("#input_data")
      .selectAll('myOptions')
      .data(input_data_dropdown)
      .enter()
      .append('option')
      .text(function (d) { return d.text; }) 
      .attr("value", function (d) { return d.value; }) 

  
d3.select("#input_data").on("change", function(d) {
        var dataName = d3.select(this).property("value")

        if(dataName == "Final"){
          currentTree = "Final"
          drawTreeGraph(final_tree)
        }else if(dataName == "Exam1"){
          currentTree = "Exam1"
          drawTreeGraph(exam1_tree)
        }else if(dataName == "Exam2"){
          currentTree = "Exam2"
          drawTreeGraph(exam2_tree)
        }else if(dataName == "Exam3"){
          currentTree = "Exam3"
          drawTreeGraph(exam3_tree)
        }


        dataName = dataName + ".json"
        drawForceGraph(dataName)
  })





