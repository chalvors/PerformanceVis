
///////////////parallel coordinates start///////////////
var margin = {top: 30, right: 30, bottom: 10, left: 30},
  width = 567 - margin.left - margin.right,
  height = 600 - margin.top - margin.bottom;

var parallelsvg = d3.select("#parallel")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

d3.selectAll('input').property('checked', false)

var BarChartWidth = 200
var BarChartHeight = 678

var barsvg = d3.select("#barChart")
.append("svg")
  .attr("width", BarChartWidth)
  .attr("height", BarChartHeight)
  .attr("class", "bar-chart")
.append("g")
  .attr("transform",
        "translate(0,2)");


var viChartWidth = 35
var viChartHeight = 500

var visvg = d3.select("#variableImportance")
.append("svg")
  .attr("width", viChartWidth)
  .attr("height", viChartHeight)
  .attr("class", "vichart")
.append("g")
  .attr("transform",
        "translate(0,2)");





var allGroup = [{"value": "Group","text": "Cohort"},
                {"value": "Firstgen_Adm","text": "First Generation"},
                {"value": "Ethnicity","text": "Ethnicity"},
                {"value": "Gender","text": "Gender"},
                {"value": "Pell","text": "Pell"},
                {"value": "AR","text": "AR Score"},
                {"value": "Onetest","text": "Onetest Score"},
                {"value": "STEM_AP_Count","text": "STEM AP Passes"},
                {"value": "C_and_below","text": "Course Letter Grade"} ]




d3.select("#selectColor")
    .selectAll('myOptions')
    .data(allGroup)
    .enter()
    .append('option')
    .text(function (d) { return d.text; }) // text showed in the menu
    .attr("value", function (d) { return d.value; }) // corresponding value returned by the button


var letterGrade = [" ", "A", "B", "C", "D", "F"]

d3.select("#compareOne1")
      .selectAll('myOptions')
      .data(letterGrade)
      .enter()
      .append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button
d3.select("#compareOne2")
      .selectAll('myOptions')
      .data(letterGrade)
      .enter()
      .append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button

d3.select("#compareOne3")
      .selectAll('myOptions')
      .data(letterGrade)
      .enter()
      .append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button

d3.select("#compareOne4")
      .selectAll('myOptions')
      .data(letterGrade)
      .enter()
      .append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button

d3.select("#compareTwo1")
        .selectAll('myOptions')
        .data(letterGrade)
        .enter()
        .append('option')
        .text(function (d) { return d; }) // text showed in the menu
        .attr("value", function (d) { return d; }) // corresponding value returned by the button

d3.select("#compareTwo2")
        .selectAll('myOptions')
        .data(letterGrade)
        .enter()
        .append('option')
        .text(function (d) { return d; }) // text showed in the menu
        .attr("value", function (d) { return d; }) // corresponding value returned by the button

d3.select("#compareTwo3")
        .selectAll('myOptions')
        .data(letterGrade)
        .enter()
        .append('option')
        .text(function (d) { return d; }) // text showed in the menu
        .attr("value", function (d) { return d; }) // corresponding value returned by the button
d3.select("#compareTwo4")
        .selectAll('myOptions')
        .data(letterGrade)
        .enter()
        .append('option')
        .text(function (d) { return d; }) // text showed in the menu
        .attr("value", function (d) { return d; }) // corresponding value returned by the button

d3.select("#compareThree1")
        .selectAll('myOptions')
        .data(letterGrade)
        .enter()
        .append('option')
        .text(function (d) { return d; }) // text showed in the menu
        .attr("value", function (d) { return d; }) // corresponding value returned by the button

d3.select("#compareThree2")
        .selectAll('myOptions')
        .data(letterGrade)
        .enter()
        .append('option')
        .text(function (d) { return d; }) // text showed in the menu
        .attr("value", function (d) { return d; }) // corresponding value returned by the button

d3.select("#compareThree3")
        .selectAll('myOptions')
        .data(letterGrade)
        .enter()
        .append('option')
        .text(function (d) { return d; }) // text showed in the menu
        .attr("value", function (d) { return d; }) // corresponding value returned by the button
d3.select("#compareThree4")
        .selectAll('myOptions')
        .data(letterGrade)
        .enter()
        .append('option')
        .text(function (d) { return d; }) // text showed in the menu
        .attr("value", function (d) { return d; }) // corresponding value returned by the button


var parallelcolor = d3.scaleOrdinal()
  .domain(["Regular", "Control", "Scholars", "Firstgen", "Not_Firstgen", "White", "Not_White", "Male", "Female", "Pell", "Not_Pell", "Above_5", "Below_5", "Above_1380", "Below_1380", "More_then_2_pass", "Less_then_2_pass", "C_and_Above", "C_and_Below", "Empty"])
  .range([ "#e46c00", "#00b181", "#7b00b1", "#b10000", "#00a1b1", "#003cb1", "#b10066", "#6db800", "#9600de", "#006397", "#bd01a5", "#b80042","#00dcd5", "#c29603","#03c252","#d500dc","#007adc","#63bdff","#d55050","#312f34"])

var barcolor = d3.scaleOrdinal()
  .range([ "#e46c00", "#00b181", "#7b00b1", "#b10000", "#00a1b1", "#003cb1", "#b10066", "#6db800", "#9600de", "#006397", "#bd01a5", "#b80042","#00dcd5", "#c29603","#03c252","#d500dc","#007adc","#63bdff","#d55050","#312f34"])
  .domain([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);



var compareOne1 = " "
var compareOne2 = " "
var compareOne3 = " "
var compareOne4 = " "
var compareTwo1 = " "
var compareTwo2 = " "
var compareTwo3 = " "
var compareTwo4 = " "
var compareThree1 = " "
var compareThree2 = " "
var compareThree3 = " "
var compareThree4 = " "
var drawComTwo = false
var drawComThree = false
var selection = "Group"

const popButton = document.getElementById("populate-parallel-graph");
const parallelDataInput = document.getElementById("parallel-graph-data");

popButton.addEventListener("click", () => {
  //drawParallel(parallelDataInput.value);
  drawParallel("Parallel_Mock_Data.csv")
});



  function drawParallel(parallelData) {
    d3.csv(parallelData, function(data) {   //data input

    var newData = data

    var dimensions = ["Exam_1", "Exam_2", "Exam_3", "Final_exam"]
   
    x = d3.scalePoint()
      .range([0, width])
      .domain(dimensions);


    var y = {}

    y["Exam_1"] = d3.scaleLinear()
        .domain( [0,100] ) 
        .range([height, 0])
    y["Exam_2"] = d3.scaleLinear()
        .domain( [0,100] ) 
        .range([height, 0])
    y["Exam_3"] = d3.scaleLinear()
        .domain( [0,100] ) 
        .range([height, 0])
    y["Final_exam"] = d3.scaleLinear()
        .domain( [0,100] ) 
        .range([height, 0])




    function drawpath(d) {
        return d3.line()(dimensions.map(function(p) {return [x(p), y[p](d[p])]}));
    }

    // Draw the axis:
    parallelsvg.selectAll("myAxis")
      .data(dimensions).enter()
      .append("g")
      .attr("class", "axis")
      .attr("transform", function(d) { return "translate(" + x(d) + ")"; })
      .each(function(d) { d3.select(this).call(d3.axisLeft().ticks(5).scale(y[d])); })
      .append("text")
        .style("text-anchor", "middle")
        .attr("y", -9)
        .text(function(d) { return d; })
        .style("fill", "black")



    var highlight = function(d){

      var pdata = d

      parallelsvg
        .append("path")
          .datum(pdata)
          .attr("class", "temp")
          .attr("d", drawpath)
          .style("fill", "none" )
          .style("stroke-width", "5")
          .style("opacity", "0.8")
          .style("stroke","black")
          .on("mouseover", function (d) { 

            d3.selectAll(".line1")
              .transition().duration(200)
              .style("stroke", "lightgrey")
              .style("opacity", "0.2")

            d3.selectAll("." + d[selection])
              .transition().duration(200)
              .style("stroke", parallelcolor(d[selection]))
              .style("opacity", "0.6")

            var values = [];
            for (key in d){
              if(d.hasOwnProperty(key)) {
                  var value = d[key];
                  values.push(value)
              }
            }
            d3.selectAll(".cb").each(function(d){
              division = d3.select(this);
              checkbox = division.select(".filter")
              var cbvalue = checkbox.property("value")
              if(values.includes(cbvalue)){
                division.classed("highlight", true)
              }
            })

           })
          .on("mouseleave", function (d) { 
            d3.selectAll(".temp").remove();
            d3.selectAll(".highlight").classed("highlight", false);
            d3.selectAll(".line1")
              .transition().duration(200).delay(200)
              .style("stroke", function(d){ return( parallelcolor(d[selection]))} )
              .style("opacity", "0.6")
              .style("stroke-width", "1")
          })
          .append("title").text("ID: " + d.Anonymized_Student_ID + "\n" + "Course Grade: " + d.Course_Grade);


    }


    var unHighlight = function(d){
      d3.selectAll(".line1")
        .transition().duration(200).delay(200)
        .style("stroke", function(d){ return( parallelcolor(d[selection]))} )
        .style("opacity", "0.6")
        .style("stroke-width", "1")
    }



    // Draw the lines
     parallelsvg
      .append("g")
      .selectAll("path")
      .data(data)
      .enter()
      .append("path")
        .attr("class", function (d) { return "line1 " + d[selection] } ) 
        .attr("d",  drawpath)
        .style("fill", "none" )
        .style("stroke", function(d){ return( parallelcolor(d[selection]))} )
        .style("opacity", 0.6)
        .on("mouseover", highlight)
        .on("mouseleave", unHighlight )
        .append("title").text(function(d) { return "ID: " + d.Anonymized_Student_ID + "\n" + "Course Grade: " + d.Course_Grade; });



    
    function updateColor(selectedOption) {

        selection = String(selectedOption)

        parallelsvg.selectAll(".line1")
         .transition()
         .duration(200)
         .delay(50)
            .attr("class", function (d) { return "line1 " + d[selection] } ) 
            .style("stroke", function(d){ return( parallelcolor(d[selection]))} )
    }

      // When the button is changed, run the updateChart function
    d3.select("#selectColor").on("change", function(d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")

        // run the updateChart function with this selected option
        updateColor(selectedOption)
    })




     //comparison 1 dropdowns
    d3.select("#compareOne1").on("change", function(d) {
          var selectedGrade = d3.select(this).property("value")
          compareOne1 = selectedGrade
          drawCompareOne()

    })
    d3.select("#compareOne2").on("change", function(d) {
          var selectedGrade = d3.select(this).property("value")
          compareOne2 = selectedGrade
          drawCompareOne()
    })
    d3.select("#compareOne3").on("change", function(d) {
          var selectedGrade = d3.select(this).property("value")
          compareOne3 = selectedGrade
          drawCompareOne()
    })
    d3.select("#compareOne4").on("change", function(d) {
          var selectedGrade = d3.select(this).property("value")
          compareOne4 = selectedGrade
          drawCompareOne()
    })

    //comparison 2 dropdowns
    d3.select("#compareTwo1").on("change", function(d) {
          var selectedGrade = d3.select(this).property("value")
          compareTwo1 = selectedGrade
          if (drawComTwo == true) {
              drawCompareOne()
              drawCompareTwo()
          }
    })
    d3.select("#compareTwo2").on("change", function(d) {
          var selectedGrade = d3.select(this).property("value")
          compareTwo2 = selectedGrade
          if (drawComTwo == true) {
              drawCompareOne()
              drawCompareTwo()
          }
    })
    d3.select("#compareTwo3").on("change", function(d) {
          var selectedGrade = d3.select(this).property("value")
          compareTwo3 = selectedGrade
          if (drawComTwo == true) {
              drawCompareOne()
              drawCompareTwo()
          }
    })
    d3.select("#compareTwo4").on("change", function(d) {
          var selectedGrade = d3.select(this).property("value")
          compareTwo4 = selectedGrade
          if (drawComTwo == true) {
              drawCompareOne()
              drawCompareTwo()
          } 
    })

      //comparison 3 dropdowns
    d3.select("#compareThree1").on("change", function(d) {
          var selectedGrade = d3.select(this).property("value")
          compareThree1 = selectedGrade
          if (drawComThree == true) {
              drawCompareOne()
              drawCompareThree()
          }
    })
    d3.select("#compareThree2").on("change", function(d) {
          var selectedGrade = d3.select(this).property("value")
          compareThree2 = selectedGrade
          if (drawComThree == true) {
              drawCompareOne()
              drawCompareThree()
          }
    })
    d3.select("#compareThree3").on("change", function(d) {
          var selectedGrade = d3.select(this).property("value")
          compareThree3 = selectedGrade
          if (drawComThree == true) {
              drawCompareOne()
              drawCompareThree()
          }
    })
    d3.select("#compareThree4").on("change", function(d) {
          var selectedGrade = d3.select(this).property("value")
          compareThree4 = selectedGrade
          if (drawComThree == true) {
              drawCompareOne()
              drawCompareThree()
          }
    })

    d3.select("#showTwo").on("change",showCompareTwo);


    function showCompareTwo(){

      if(d3.select("#showTwo").property("checked")){
        drawComTwo = true;
        drawCompareOne();
        drawCompareTwo();
      } else {
        drawComTwo = false;
        parallelsvg.selectAll(".line2").remove();
        if(drawComThree == false){
          parallelsvg.selectAll(".line1")
            .attr("class", function (d) { return "line1 " + d[selection] } ) 
            .style("stroke", function(d){ return( parallelcolor(d[selection]))} )
            .on("mouseover", highlight)
            .on("mouseleave", unHighlight )
        }  
      }
     }

    d3.select("#showThree").on("change",showCompareThree);


    function showCompareThree(){

      if(d3.select("#showThree").property("checked")){
        drawComThree = true;
        drawCompareOne();
        drawCompareThree();
      } else {
        drawComThree = false;
        parallelsvg.selectAll(".line3").remove();
        if(drawComTwo == false){
          parallelsvg.selectAll(".line1")
            .attr("class", function (d) { return "line1 " + d[selection] } ) 
            .style("stroke", function(d){ return( parallelcolor(d[selection]))} )
            .on("mouseover", highlight)
            .on("mouseleave", unHighlight )
        }  
      }
     }

     

    function drawCompareOne() {

        var dataFilter = newData

        if (compareOne1 != " ") {
          dataFilter = dataFilter.filter(function(d){return d.E1 == compareOne1});
        }
        if (compareOne2 != " ") {
          dataFilter = dataFilter.filter(function(d){return d.E2 == compareOne2});
        }
        if (compareOne3 != " ") {
          dataFilter = dataFilter.filter(function(d){return d.E3 == compareOne3});
        }
        if (compareOne4 != " ") {
          dataFilter = dataFilter.filter(function(d){return d.FINAL == compareOne4});
        }


      if (((compareTwo1 == " " && compareTwo2 == " " && compareTwo3 == " " && compareTwo4 == " ") || drawComTwo == false) && 
        ((compareThree1 == " " && compareThree2 == " " && compareThree3 == " " && compareThree4 == " ") || drawComThree == false)) {

        parallelsvg.selectAll(".line1").remove()

        var line1 = parallelsvg
          .selectAll(".line1")
          .data(dataFilter);

        line1
          .enter()
          .append("path")
          .attr("class", function (d) { return "line1 " + d[selection] } )
          .attr("d",  drawpath)
          .style("fill", "none" )
          .style("stroke", function(d){ return( parallelcolor(d[selection]))} )
          .style("opacity", 0.6) 
          .on("mouseover", highlight)
          .on("mouseleave", unHighlight )
          .append("title").text(function(d) { return "ID: " + d.Anonymized_Student_ID + "\n" + "Course Grade: " + d.Course_Grade; });


        line1
          .attr("class", function (d) { return "line1 " + d[selection] } )
          .attr("d",  drawpath)
          .style("fill", "none" )
          .style("stroke", function(d){ return( parallelcolor(d[selection]))} )
          .style("opacity", 0.6) 
          .on("mouseover", highlight)
          .on("mouseleave", unHighlight )
          .append("title").text(function(d) { return "ID: " + d.Anonymized_Student_ID + "\n" + "Course Grade: " + d.Course_Grade; });

        line1.exit().remove();

      } else {

        parallelsvg.selectAll(".line1").remove()

        var line1 = parallelsvg
          .selectAll(".line1")
          .data(dataFilter);

        line1
          .enter()
          .append("path")
          .attr("class", function (d) { return "line1 " + d[selection] } )
          .attr("d",  drawpath)
          .style("fill", "none" )
          .style("stroke", "#dd430f" )
          .style("opacity", 0.4) 
          .on("mouseover", function(d) {
            var pdata = d
            parallelsvg
              .append("path")
                .datum(pdata)
                .attr("class", "temp")
                .attr("d", drawpath)
                .style("fill", "none" )
                .style("stroke-width", "5")
                .style("opacity", "0.8")
                .style("stroke","black")
                .on("mouseover", function (d) { 
                  d3.selectAll(".line2")
                    .transition().duration(200)
                    .style("opacity", 0.05)
                  d3.selectAll(".line3")
                    .transition().duration(200)
                    .style("opacity", 0.05) 

                  var values = [];
                  for (key in d){
                    if(d.hasOwnProperty(key)) {
                        var value = d[key];
                        values.push(value)
                    }
                  }
                  d3.selectAll(".cb").each(function(d){
                    division = d3.select(this);
                    checkbox = division.select(".filter")
                    var cbvalue = checkbox.property("value")
                    if(values.includes(cbvalue)){
                      division.classed("highlight", true)
                    }
                  })

                 })
                .on("mouseleave", function (d) { 
                  d3.selectAll(".temp").remove();
                  d3.selectAll(".highlight").classed("highlight", false);
                  d3.selectAll(".line1")
                    .transition().duration(200).delay(200)
                    .style("opacity", 0.4)
                    .style("stroke-width", "1")
                    .style("stroke", "#dd430f")
                  d3.selectAll(".line2")
                    .transition().duration(200).delay(200)
                    .style("opacity", 0.4)
                    .style("stroke-width", "1")
                    .style("stroke", "#3b8fba")
                  d3.selectAll(".line3")
                    .transition().duration(200).delay(200)
                    .style("opacity", 0.4)              
                    .style("stroke-width", "1")
                    .style("stroke", "#42c107")
                })
                .append("title").text("ID: " + d.Anonymized_Student_ID + "\n" + "Course Grade: " + d.Course_Grade);

          })
          .on("mouseleave", function(d) {
            d3.selectAll(".highlight").classed("highlight", false)
          })
          .append("title").text(function(d) { return "ID: " + d.Anonymized_Student_ID + "\n" + "Course Grade: " + d.Course_Grade; });



        // line1
        //   .attr("class", function (d) { return "line1 " + d[selection] } )
        //   .attr("d",  drawpath)
        //   .style("fill", "none" )
        //   .style("stroke", "#dd430f" )
        //   .style("opacity", 0.4) 
        //   .on("mouseover", function(d) {
        //     var pdata = d
        //     parallelsvg
        //       .append("path")
        //         .datum(pdata)
        //         .attr("class", "temp")
        //         .attr("d", drawpath)
        //         .style("fill", "none" )
        //         .style("stroke-width", "5")
        //         .style("opacity", "0.8")
        //         .style("stroke","black")
        //         .on("mouseover", function (d) { 
        //           d3.selectAll(".line2")
        //             .transition().duration(200)
        //             .style("opacity", 0.05)
        //           d3.selectAll(".line3")
        //             .transition().duration(200)
        //             .style("opacity", 0.05) 

        //           var values = [];
        //           for (key in d){
        //             if(d.hasOwnProperty(key)) {
        //                 var value = d[key];
        //                 values.push(value)
        //             }
        //           }
        //           d3.selectAll(".cb").each(function(d){
        //             division = d3.select(this);
        //             checkbox = division.select(".filter")
        //             var cbvalue = checkbox.property("value")
        //             if(values.includes(cbvalue)){
        //               division.classed("highlight", true)
        //             }
        //           })

        //          })
        //         .on("mouseleave", function (d) { 
        //           d3.selectAll(".temp").remove();
        //           d3.selectAll(".highlight").classed("highlight", false);
        //           d3.selectAll(".line1")
        //             .transition().duration(200).delay(300)
        //             .style("opacity", 0.4)
        //             .style("stroke-width", "1")
        //             .style("stroke", "#dd430f")
        //           d3.selectAll(".line2")
        //             .transition().duration(200).delay(300)
        //             .style("opacity", 0.4)
        //             .style("stroke-width", "1")
        //             .style("stroke", "#3b8fba")
        //           d3.selectAll(".line3")
        //             .transition().duration(200).delay(300)
        //             .style("opacity", 0.4)              
        //             .style("stroke-width", "1")
        //             .style("stroke", "#42c107")
        //         })
        //         .append("title").text("ID: " + d.Anonymized_Student_ID + "\n" + "Course Grade: " + d.Course_Grade);

        //   })
        //   .on("mouseleave", function(d) {
        //     d3.selectAll(".highlight").classed("highlight", false)
        //   })
        //   .append("title").text(function(d) { return "ID: " + d.Anonymized_Student_ID + "\n" + "Course Grade: " + d.Course_Grade; });

      }



          var data1 = dataFilter.filter(function(d){return d.Group == "Regular"});
          var data2 = dataFilter.filter(function(d){return d.Group == "Control"});
          var data3 = dataFilter.filter(function(d){return d.Group == "Scholars"});
          var data4 = dataFilter.filter(function(d){return d.Firstgen_Adm == "Firstgen"});
          var data5 = dataFilter.filter(function(d){return d.Firstgen_Adm == "Not_Firstgen"});
          var data6 = dataFilter.filter(function(d){return d.Ethnicity == "White"});
          var data7 = dataFilter.filter(function(d){return d.Ethnicity == "Not_White"});
          var data8 = dataFilter.filter(function(d){return d.Gender == "Male"});
          var data9 = dataFilter.filter(function(d){return d.Gender == "Female"});
          var data10 = dataFilter.filter(function(d){return d.Pell == "Pell"});
          var data11 = dataFilter.filter(function(d){return d.Pell == "Not_Pell"});
          var data12 = dataFilter.filter(function(d){return d.AR == "Above_5"});
          var data13 = dataFilter.filter(function(d){return d.AR == "Below_5"});
          var data14 = dataFilter.filter(function(d){return d.Onetest == "Above_1380"});
          var data15 = dataFilter.filter(function(d){return d.Onetest == "Below_1380"});
          var data16 = dataFilter.filter(function(d){return d.STEM_AP_Count == "More_then_2_pass"});
          var data17 = dataFilter.filter(function(d){return d.STEM_AP_Count == "Less_then_2_pass"});
          var data18 = dataFilter.filter(function(d){return d.C_and_below == "C_and_Above"});
          var data19 = dataFilter.filter(function(d){return d.C_and_below == "C_and_Below"});


          var barData = [data1.length/(data1.length+data2.length+data3.length+0.000000000000001),
                         data2.length/(data1.length+data2.length+data3.length+0.000000000000001), 
                         data3.length/(data1.length+data2.length+data3.length+0.000000000000001), 
                         data4.length/(data4.length+data5.length+0.000000000000001), 
                         data5.length/(data4.length+data5.length+0.000000000000001), 
                         data6.length/(data6.length+data7.length+0.000000000000001), 
                         data7.length/(data6.length+data7.length+0.000000000000001), 
                         data8.length/(data8.length+data9.length+0.000000000000001), 
                         data9.length/(data8.length+data9.length+0.000000000000001), 
                         data10.length/(data10.length+data11.length+0.000000000000001), 
                         data11.length/(data10.length+data11.length+0.000000000000001), 
                         data12.length/(data12.length+data13.length+0.000000000000001), 
                         data13.length/(data12.length+data13.length+0.000000000000001), 
                         data14.length/(data14.length+data15.length+0.000000000000001), 
                         data15.length/(data14.length+data15.length+0.000000000000001), 
                         data16.length/(data16.length+data17.length+0.000000000000001), 
                         data17.length/(data16.length+data17.length+0.000000000000001), 
                         data18.length/(data18.length+data19.length+0.000000000000001), 
                         data19.length/(data18.length+data19.length+0.000000000000001)]

          var barPadding = 15;
          var barWidth = (BarChartHeight / barData.length)

          var bar_x = d3.scaleLinear()
              .range([0, 145])
              .domain([0, 1]);

          var bar_y = d3.scalePoint()
              .range([0, BarChartHeight])
              .domain([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);


          var bars = barsvg.selectAll(".bar").data(barData)
          var percents = barsvg.selectAll(".label").data(barData)

          bars
              .enter()
              .append("rect")
              .attr("class", "bar")
              .attr("y", function (d, i) {
                  return bar_y(i);
              })
              .attr("height", barWidth - barPadding)
              .attr("x", 0)
              .attr("width", function (d) {
                  return bar_x(d);
              })
              .style('fill', function (d, i) {
                  return barcolor(i);
              })
              
          percents
              .enter()
              .append("text")
                .attr("class", "label")
                //y position of the label is halfway down the bar
                .attr("y", function (d, i) {
                    return bar_y(i) + 18;
                })
                //x position is 3 pixels to the right of the bar
                .attr("x", function (d) {
                    return bar_x(d) + 5;
                })
                .text(function (d) {
                    var num = 100 * d
                    num = num.toFixed(1);
                    return num + "%"; 
                })
                .style("fill", "black")

          bars
              .transition()
              .duration(750)
              .attr("y", function (d, i) {
                  return bar_y(i);
              })
              .attr("height", barWidth - barPadding)
              .attr("x", 0)
              .attr("width", function (d) {
                  return bar_x(d);
              })
              .style('fill', function (d, i) {
                  return barcolor(i);
              })
              
          percents
                .transition()
                .duration(750)
                .attr("class", "label")
                //y position of the label is halfway down the bar
                .attr("y", function (d, i) {
                    return bar_y(i) + 18;
                })
                //x position is 3 pixels to the right of the bar
                .attr("x", function (d) {
                    return bar_x(d) + 5;
                })
                .text(function (d) {
                    var num = 100 * d
                    num = num.toFixed(1);
                    return num + "%"; 
                })
                .style("fill", "black")

          bars.exit().remove();
          percents.exit().remove();

    }




    function drawCompareTwo() {

      if (compareTwo1 == " " && compareTwo2 == " " && compareTwo3 == " " && compareTwo4 == " "){
          parallelsvg.selectAll(".line2").remove()

      } else {

        var dataFilter = newData

          if (compareTwo1 != " ") {
            dataFilter = dataFilter.filter(function(d){return d.E1 == compareTwo1});
          }
          if (compareTwo2 != " ") {
            dataFilter = dataFilter.filter(function(d){return d.E2 == compareTwo2});
          }
          if (compareTwo3 != " ") {
            dataFilter = dataFilter.filter(function(d){return d.E3 == compareTwo3});
          }
          if (compareTwo4 != " ") {
            dataFilter = dataFilter.filter(function(d){return d.FINAL == compareTwo4});
          }

        parallelsvg.selectAll(".line2").remove()

        var line2 = parallelsvg
          .selectAll(".line2")
          .data(dataFilter);

        line2
          .enter()
          .append("path")
          .attr("class", function (d) { return "line2 " + d[selection] } )
          .attr("d",  drawpath)
          .style("fill", "none" )
          .style("stroke", "#3b8fba")
          .style("opacity", 0.4)
          .on("mouseover", function(d) {
            var pdata = d
            parallelsvg
              .append("path")
                .datum(pdata)
                .attr("class", "temp")
                .attr("d", drawpath)
                .style("fill", "none" )
                .style("stroke-width", "5")
                .style("opacity", "0.8")
                .style("stroke","black")
                .on("mouseover", function (d) { 
                  d3.selectAll(".line1")
                    .transition().duration(200)
                    .style("opacity", 0.05)
                  d3.selectAll(".line3")
                    .transition().duration(200)
                    .style("opacity", 0.05) 

                  var values = [];
                  for (key in d){
                    if(d.hasOwnProperty(key)) {
                        var value = d[key];
                        values.push(value)
                    }
                  }
                  d3.selectAll(".cb").each(function(d){
                    division = d3.select(this);
                    checkbox = division.select(".filter")
                    var cbvalue = checkbox.property("value")
                    if(values.includes(cbvalue)){
                      division.classed("highlight", true)
                    }
                  })

                 })
                .on("mouseleave", function (d) { 
                  d3.selectAll(".temp").remove();
                  d3.selectAll(".highlight").classed("highlight", false);
                  d3.selectAll(".line1")
                    .transition().duration(200).delay(200)
                    .style("opacity", 0.4)
                    .style("stroke-width", "1")
                    .style("stroke", "#dd430f")
                  d3.selectAll(".line2")
                    .transition().duration(200).delay(200)
                    .style("opacity", 0.4)
                    .style("stroke-width", "1")
                    .style("stroke", "#3b8fba")
                  d3.selectAll(".line3")
                    .transition().duration(200).delay(200)
                    .style("opacity", 0.4)              
                    .style("stroke-width", "1")
                    .style("stroke", "#42c107")
                })
                .append("title").text("ID: " + d.Anonymized_Student_ID + "\n" + "Course Grade: " + d.Course_Grade);

          })
          .on("mouseleave", function(d) {
            d3.selectAll(".highlight").classed("highlight", false)
          })
          .append("title").text(function(d) { return "ID: " + d.Anonymized_Student_ID + "\n" + "Course Grade: " + d.Course_Grade; });




        // line2
        //   .attr("class", function (d) { return "line2 " + d[selection] } )
        //   .attr("d",  drawpath)
        //   .style("fill", "none" )
        //   .style("stroke", "#3b8fba")
        //   .style("opacity", 0.4) 
        //   .on("mouseover", function(d) {
        //     d3.selectAll(".line1")
        //       .transition().duration(200)
        //       .style("opacity", 0.05)
        //     d3.selectAll(".line3")
        //       .transition().duration(200)
        //       .style("opacity", 0.05) 
        //     d3.select(this).transition().duration(200).style("stroke-width", "5").style("opacity", "0.8").style("stroke","black")
        //     var values = [];
        //     for (key in d){
        //       if(d.hasOwnProperty(key)) {
        //           var value = d[key];
        //           values.push(value)
        //       }
        //     }
        //     d3.selectAll(".cb").each(function(d){
        //       division = d3.select(this);
        //       checkbox = division.select(".filter")
        //       var cbvalue = checkbox.property("value")
        //       if(values.includes(cbvalue)){
        //         division.classed("highlight", true)
        //       }
        //     })
        //   })
        //   .on("mouseleave", function(d) {
        //     d3.selectAll(".line1")
        //       .transition().duration(200)
        //       .style("opacity", 0.4)
        //       .style("stroke-width", "1")
        //       .style("stroke", "#dd430f")
        //     d3.selectAll(".line2")
        //       .transition().duration(200)
        //       .style("opacity", 0.4)
        //       .style("stroke-width", "1")
        //       .style("stroke", "#3b8fba")
        //     d3.selectAll(".line3")
        //       .transition().duration(200)
        //       .style("opacity", 0.4)              
        //       .style("stroke-width", "1")
        //       .style("stroke", "#42c107")
        //     d3.selectAll(".highlight").classed("highlight", false)
        //   })
        //   .append("title").text(function(d) { return "ID: " + d.Anonymized_Student_ID + "\n" + "Course Grade: " + d.Course_Grade; });


        // line2.exit().remove();
      }
   }


    function drawCompareThree() {

      if (compareThree1 == " " && compareThree2 == " " && compareThree3 == " " && compareThree4 == " "){
          parallelsvg.selectAll(".line3").remove()

      } else {

        var dataFilter = newData

          if (compareThree1 != " ") {
            dataFilter = dataFilter.filter(function(d){return d.E1 == compareThree1});
          }
          if (compareThree2 != " ") {
            dataFilter = dataFilter.filter(function(d){return d.E2 == compareThree2});
          }
          if (compareThree3 != " ") {
            dataFilter = dataFilter.filter(function(d){return d.E3 == compareThree3});
          }
          if (compareThree4 != " ") {
            dataFilter = dataFilter.filter(function(d){return d.FINAL == compareThree4});
          }

        parallelsvg.selectAll(".line3").remove()

        var line3 = parallelsvg
          .selectAll(".line3")
          .data(dataFilter);

        line3
          .enter()
          .append("path")
          .attr("class", function (d) { return "line3 " + d[selection] } )
          .attr("d",  drawpath)
          .style("fill", "none" )
          .style("stroke", "#42c107")
          .style("opacity", 0.4)
          .on("mouseover", function(d) {
            var pdata = d
            parallelsvg
              .append("path")
                .datum(pdata)
                .attr("class", "temp")
                .attr("d", drawpath)
                .style("fill", "none" )
                .style("stroke-width", "5")
                .style("opacity", "0.8")
                .style("stroke","black")
                .on("mouseover", function (d) { 
                  d3.selectAll(".line1")
                    .transition().duration(200)
                    .style("opacity", 0.05)
                  d3.selectAll(".line2")
                    .transition().duration(200)
                    .style("opacity", 0.05) 

                  var values = [];
                  for (key in d){
                    if(d.hasOwnProperty(key)) {
                        var value = d[key];
                        values.push(value)
                    }
                  }
                  d3.selectAll(".cb").each(function(d){
                    division = d3.select(this);
                    checkbox = division.select(".filter")
                    var cbvalue = checkbox.property("value")
                    if(values.includes(cbvalue)){
                      division.classed("highlight", true)
                    }
                  })

                 })
                .on("mouseleave", function (d) { 
                  d3.selectAll(".temp").remove();
                  d3.selectAll(".highlight").classed("highlight", false);
                  d3.selectAll(".line1")
                    .transition().duration(200).delay(200)
                    .style("opacity", 0.4)
                    .style("stroke-width", "1")
                    .style("stroke", "#dd430f")
                  d3.selectAll(".line2")
                    .transition().duration(200).delay(200)
                    .style("opacity", 0.4)
                    .style("stroke-width", "1")
                    .style("stroke", "#3b8fba")
                  d3.selectAll(".line3")
                    .transition().duration(200).delay(200)
                    .style("opacity", 0.4)              
                    .style("stroke-width", "1")
                    .style("stroke", "#42c107")
                })
                .append("title").text("ID: " + d.Anonymized_Student_ID + "\n" + "Course Grade: " + d.Course_Grade);

          })
          .on("mouseleave", function(d) {
            d3.selectAll(".highlight").classed("highlight", false)
          })
          .append("title").text(function(d) { return "ID: " + d.Anonymized_Student_ID + "\n" + "Course Grade: " + d.Course_Grade; });


        // line3
        //   .attr("class", function (d) { return "line3 " + d[selection] } )
        //   .attr("d",  drawpath)
        //   .style("fill", "none" )
        //   .style("stroke", "#42c107")
        //   .style("opacity", 0.4) 
        //   .on("mouseover", function(d) {
        //     d3.selectAll(".line1")
        //       .transition().duration(200)
        //       .style("opacity", 0.05) 
        //     d3.selectAll(".line2")
        //       .transition().duration(200)
        //       .style("opacity", 0.05)
        //     d3.select(this).transition().duration(200).style("stroke-width", "5").style("opacity", "0.8").style("stroke","black")
        //     var values = [];
        //     for (key in d){
        //       if(d.hasOwnProperty(key)) {
        //           var value = d[key];
        //           values.push(value)
        //       }
        //     }
        //     d3.selectAll(".cb").each(function(d){
        //       division = d3.select(this);
        //       checkbox = division.select(".filter")
        //       var cbvalue = checkbox.property("value")
        //       if(values.includes(cbvalue)){
        //         division.classed("highlight", true)
        //       }
        //     })
        //   })
        //   .on("mouseleave", function(d) {
        //     d3.selectAll(".line1")
        //       .transition().duration(200)
        //       .style("opacity", 0.4)
        //       .style("stroke-width", "1")
        //       .style("stroke", "#dd430f")
        //     d3.selectAll(".line2")
        //       .transition().duration(200)
        //       .style("opacity", 0.4)
        //       .style("stroke-width", "1")
        //       .style("stroke", "#3b8fba")
        //     d3.selectAll(".line3")
        //       .transition().duration(200)
        //       .style("opacity", 0.4)              
        //       .style("stroke-width", "1")
        //       .style("stroke", "#42c107")
        //     d3.selectAll(".highlight").classed("highlight", false)
        //   })
        //   .append("title").text(function(d) { return "ID: " + d.Anonymized_Student_ID + "\n" + "Course Grade: " + d.Course_Grade; });


        // line3.exit().remove();
      }
   }



    d3.selectAll(".filter").on("change",updateFilter);

    function updateFilter(){
        newData = data
        var choices = [];
        d3.selectAll(".filter").each(function(d){
          checkbox = d3.select(this);
          if(checkbox.property("checked")){
            choices.push(checkbox.property("value"));
          }
        });

        if(choices.length > 0){
          var checkColumn = " "
          for (c of choices){
            if (c == "Regular" || c == "Control" || c == "Scholars"){
              checkColumn = "Group"
            }else if(c == "C_and_Above" || c == "C_and_Below"){
              checkColumn = "C_and_below"
            }else if(c == "Firstgen" || c == "Not_Firstgen"){
              checkColumn = "Firstgen_Adm"
            }else if(c == "White" || c == "Not_White"){
              checkColumn = "Ethnicity"
            }else if(c == "Male" || c == "Female"){
              checkColumn = "Gender"
            }else if(c == "Pell" || c == "Not_Pell"){
              checkColumn = "Pell"
            }else if(c == "Below_5" || c == "Above_5"){
              checkColumn = "AR"
            }else if(c == "Above_1380" || c == "Below_1380"){
              checkColumn = "Onetest"
            }else if(c == "More_then_2_pass" || c == "Less_then_2_pass"){
              checkColumn = "STEM_AP_Count"
            }


            // if(choices.includes("Regular") && choices.includes("Control") && choices.includes("Scholars")){
            //   choices.splice(choices.indexOf("Regular"), 1);
            //   hoices.splice(choices.indexOf("Control"), 1);
            //   hoices.splice(choices.indexOf("Scholars"), 1);
            //   console.log(choices)
            //   newData = newData.filter(function(d){return d[checkColumn] == "no"});
            // }else if(choices.includes("Regular") && choices.includes("Control")){
            //   choices.splice(choices.indexOf("Regular"), 1);
            //   hoices.splice(choices.indexOf("Control"), 1);
            //   hoices.splice(choices.indexOf("Scholars"), 1);
            //    console.log(choices)
            //   newData = newData.filter(function(d){return d[checkColumn] != "Scholars"});
            // }else if(choices.includes("Regular") && choices.includes("Scholars")){
            //   choices.splice(choices.indexOf("Regular"), 1);
            //   hoices.splice(choices.indexOf("Control"), 1);
            //   hoices.splice(choices.indexOf("Scholars"), 1);
            //    console.log(choices)
            //   newData = newData.filter(function(d){return d[checkColumn] != "Control"});
            // }else if(choices.includes("Control") && choices.includes("Scholars")){
            //   choices.splice(choices.indexOf("Regular"), 1);
            //   hoices.splice(choices.indexOf("Control"), 1);
            //   hoices.splice(choices.indexOf("Scholars"), 1);
            //    console.log(choices)
            //   newData = newData.filter(function(d){return d[checkColumn] != "Regular"});
            // }else{
            //   newData = newData.filter(function(d){return d[checkColumn] == c});
            // }

            newData = newData.filter(function(d){return d[checkColumn] == c});
            
          }
        } 

        parallelsvg.selectAll(".line1").remove()
        parallelsvg.selectAll(".line2").remove()
        parallelsvg.selectAll(".line3").remove()

        drawCompareOne()
        if(drawComTwo){ drawCompareTwo() }
        if(drawComThree){ drawCompareThree() }
        
    }

   drawBarChart()

   function drawBarChart(){

    var data1 = newData.filter(function(d){return d.Group == "Regular"});
    var data2 = newData.filter(function(d){return d.Group == "Control"});
    var data3 = newData.filter(function(d){return d.Group == "Scholars"});
    var data4 = newData.filter(function(d){return d.Firstgen_Adm == "Firstgen"});
    var data5 = newData.filter(function(d){return d.Firstgen_Adm == "Not_Firstgen"});
    var data6 = newData.filter(function(d){return d.Ethnicity == "White"});
    var data7 = newData.filter(function(d){return d.Ethnicity == "Not_White"});
    var data8 = newData.filter(function(d){return d.Gender == "Male"});
    var data9 = newData.filter(function(d){return d.Gender == "Female"});
    var data10 = newData.filter(function(d){return d.Pell == "Pell"});
    var data11 = newData.filter(function(d){return d.Pell == "Not_Pell"});
    var data12 = newData.filter(function(d){return d.AR == "Above_5"});
    var data13 = newData.filter(function(d){return d.AR == "Below_5"});
    var data14 = newData.filter(function(d){return d.Onetest == "Above_1380"});
    var data15 = newData.filter(function(d){return d.Onetest == "Below_1380"});
    var data16 = newData.filter(function(d){return d.STEM_AP_Count == "More_then_2_pass"});
    var data17 = newData.filter(function(d){return d.STEM_AP_Count == "Less_then_2_pass"});
    var data18 = newData.filter(function(d){return d.C_and_below == "C_and_Above"});
    var data19 = newData.filter(function(d){return d.C_and_below == "C_and_Below"});


    var barData = [data1.length/(data1.length+data2.length+data3.length+0.000000000000001),
                   data2.length/(data1.length+data2.length+data3.length+0.000000000000001), 
                   data3.length/(data1.length+data2.length+data3.length+0.000000000000001), 
                   data4.length/(data4.length+data5.length+0.000000000000001), 
                   data5.length/(data4.length+data5.length+0.000000000000001), 
                   data6.length/(data6.length+data7.length+0.000000000000001), 
                   data7.length/(data6.length+data7.length+0.000000000000001), 
                   data8.length/(data8.length+data9.length+0.000000000000001), 
                   data9.length/(data8.length+data9.length+0.000000000000001), 
                   data10.length/(data10.length+data11.length+0.000000000000001), 
                   data11.length/(data10.length+data11.length+0.000000000000001), 
                   data12.length/(data12.length+data13.length+0.000000000000001), 
                   data13.length/(data12.length+data13.length+0.000000000000001), 
                   data14.length/(data14.length+data15.length+0.000000000000001), 
                   data15.length/(data14.length+data15.length+0.000000000000001), 
                   data16.length/(data16.length+data17.length+0.000000000000001), 
                   data17.length/(data16.length+data17.length+0.000000000000001), 
                   data18.length/(data18.length+data19.length+0.000000000000001), 
                   data19.length/(data18.length+data19.length+0.000000000000001)]

    var barPadding = 15;
    var barWidth = (BarChartHeight / barData.length)

    var bar_x = d3.scaleLinear()
        .range([0, 145])
        .domain([0, 1]);

    var bar_y = d3.scalePoint()
        .range([0, BarChartHeight])
        .domain([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);


    var bars = barsvg.selectAll(".bar").data(barData)
    var percents = barsvg.selectAll(".label").data(barData)

    bars
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("y", function (d, i) {
            return bar_y(i);
        })
        .attr("height", barWidth - barPadding)
        .attr("x", 0)
        .attr("width", function (d) {
            return bar_x(d);
        })
        .style('fill', function (d, i) {
            return barcolor(i);
        })
        
    percents
        .enter()
        .append("text")
          .attr("class", "label")
          //y position of the label is halfway down the bar
          .attr("y", function (d, i) {
              return bar_y(i) + 18;
          })
          //x position is 3 pixels to the right of the bar
          .attr("x", function (d) {
              return bar_x(d) + 5;
          })
          .text(function (d) {
              var num = 100 * d
              num = num.toFixed(1);
              return num + "%"; 
          })
          .style("fill", "black")

    bars
        .transition()
        .duration(750)
        .attr("y", function (d, i) {
            return bar_y(i);
        })
        .attr("height", barWidth - barPadding)
        .attr("x", 0)
        .attr("width", function (d) {
            return bar_x(d);
        })
        .style('fill', function (d, i) {
            return barcolor(i);
        })
        
    percents
          .transition()
          .duration(750)
          .attr("class", "label")
          //y position of the label is halfway down the bar
          .attr("y", function (d, i) {
              return bar_y(i) + 18;
          })
          //x position is 3 pixels to the right of the bar
          .attr("x", function (d) {
              return bar_x(d) + 5;
          })
          .text(function (d) {
              var num = 100 * d
              num = num.toFixed(1);
              return num + "%"; 
          })
          .style("fill", "black")

    bars.exit().remove();
    percents.exit().remove();

   }






   drawviChart()

   function drawviChart(){

    
    var viData = [0.026433, 0.08455, 0.048713, 0.028469, 0.137787, 0.227221, 0.142154]

    var vibarPadding = 53;
    var vibarWidth = (viChartHeight/ viData.length)

    var vi_x = d3.scaleLinear()
        .range([0, 30])
        .domain([0, 0.23]);

    var vi_y = d3.scalePoint()
        .range([0, viChartHeight])
        .domain([0,1,2,3,4,5,6,7]);


    var vibars = visvg.selectAll(".vibar").data(viData)

    var vibarsEnter = vibars.enter().append("g")

    vibarsEnter
        .append("rect")
        .attr("class", "vibar")
        .attr("y", function (d, i) {
            return vi_y(i);
        })
        .attr("height", vibarWidth - vibarPadding)
        .attr("x", 0)
        .attr("width", function (d) {
            return vi_x(d);
        })
        .style('fill', function (d, i) {
            return "orange"
        })
        
    vibarsEnter.append("title").text(function(d) {
        return "Predictive Importance: " + d });

   }




  //when sankey graph is clicked 
  if(sankeyClicked){
    updateFilter()
    if(drawComTwo == false && drawComThree == false){
      updateColor(document.getElementById('selectColor').value)
    }
  }


  })
}