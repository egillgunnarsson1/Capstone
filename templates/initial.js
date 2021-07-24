var accArray = new Array(64*64);
var bacArray = new Array(64*64);
var gemArray = new Array(64*64);
var preArray = new Array(64*64);
var recArray = new Array(64*64);
var f1sArray = new Array(64*64);
var gsrArray = new Array(64*64);
var dliArray = new Array(64*64);
var tssArray = new Array(64*64);
var hssArray = new Array(64*64);
var ydnArray = new Array(64*64);
var rocArray = new Array(64*64);

function getGraphs(neg){
    $.ajaxSetup({async: false});
    $.ajax({
        url: 'http://localhost:5000/imbalance/'+neg+'/',
        type: 'GET',
        success: function(response) {
            var acc_mat = response.acc_mat;
            var bac_mat = response.bac_mat;
            var gem_mat = response.gem_mat;
            var pre_mat = response.pre_mat;
            var rec_mat = response.rec_mat;
            var f1s_mat = response.f1s_mat;
            var gsr_mat = response.gsr_mat;
            var dli_mat = response.dli_mat;
            var tss_mat = response.tss_mat;
            var hss_mat = response.hss_mat;
            var ydn_mat = response.ydn_mat;
            var roc_mat = response.roc_mat;
            var k = 0;
            for (var i = 0; i < acc_mat.length; i++){
                for (var j = 0; j < acc_mat[i].length; j++){
                    accArray[k] = acc_mat[i][j];
                    bacArray[k] = bac_mat[i][j];
                    gemArray[k] = gem_mat[i][j];
                    preArray[k] = pre_mat[i][j];
                    recArray[k] = rec_mat[i][j];
                    f1sArray[k] = f1s_mat[i][j];
                    gsrArray[k] = gsr_mat[i][j];
                    dliArray[k] = dli_mat[i][j];
                    tssArray[k] = tss_mat[i][j];
                    hssArray[k] = hss_mat[i][j];
                    ydnArray[k] = ydn_mat[i][j];
                    rocArray[k] = roc_mat[i][j];
                    k += 1;
                }
            }
        },
        error: function(error) {
            alert("ERROR");
            console.log(error);
        },
    });
    $.ajaxSetup({async: true});
}

function getACC(neg, pos){
    $.ajaxSetup({async: false});
    $.ajax({
        url: 'http://localhost:5000/imbalance/'+neg+'/'+pos+'/',
        type: 'GET',
        success: function(response) {
            var acc_mat = response.acc_mat;
            var k = 0;
            for (var i = 0; i < acc_mat.length; i++){
                for (var j = 0; j < acc_mat[i].length; j++){
                    accArray[k] = acc_mat[i][j];
                    k += 1;
                }
            }
        },
        error: function(error) {
            alert("ERROR");
            console.log(error);
        }
    });
    $.ajaxSetup({async: true});
}

function getBAC(neg, pos){
    $.ajaxSetup({async: false});
    $.ajax({
        url: 'http://localhost:5000/imbalance/'+neg+'/'+pos+'/',
        type: 'GET',
        success: function(response) {
            var bac_mat = response.bac_mat;
            var k = 0;
            for (var i = 0; i < bac_mat.length; i++){
                for (var j = 0; j < bac_mat[i].length; j++){
                    bacArray[k] = bac_mat[i][j];
                    k += 1;
                }
            }
        },
        error: function(error) {
            alert("ERROR");
            console.log(error);
        }
    });
    $.ajaxSetup({async: true});
}

function getGEM(neg, pos){
    $.ajaxSetup({async: false});
    $.ajax({
        url: 'http://localhost:5000/imbalance/'+neg+'/'+pos+'/',
        type: 'GET',
        success: function(response) {
            var gem_mat = response.gem_mat;
            var k = 0;
            for (var i = 0; i < gem_mat.length; i++){
                for (var j = 0; j < gem_mat[i].length; j++){
                    gemArray[k] = gem_mat[i][j];
                    k += 1;
                }
            }
        },
        error: function(error) {
            alert("ERROR");
            console.log(error);
        }
    });
    $.ajaxSetup({async: true});
}

function getPRE(neg, pos){
    $.ajaxSetup({async: false});
    $.ajax({
        url: 'http://localhost:5000/imbalance/'+neg+'/'+pos+'/',
        type: 'GET',
        success: function(response) {
            var pre_mat = response.pre_mat;
            var k = 0;
            for (var i = 0; i < pre_mat.length; i++){
                for (var j = 0; j < pre_mat[i].length; j++){
                    preArray[k] = pre_mat[i][j];
                    k += 1;
                }
            }
        },
        error: function(error) {
            alert("ERROR");
            console.log(error);
        }
    });
    $.ajaxSetup({async: true});
}

function getREC(neg, pos){
    $.ajaxSetup({async: false});
    $.ajax({
        url: 'http://localhost:5000/imbalance/'+neg+'/'+pos+'/',
        type: 'GET',
        success: function(response) {
            var rec_mat = response.rec_mat;
            var k = 0;
            for (var i = 0; i < rec_mat.length; i++){
                for (var j = 0; j < rec_mat[i].length; j++){
                    recArray[k] = rec_mat[i][j];
                    k += 1;
                }
            }
        },
        error: function(error) {
            alert("ERROR");
            console.log(error);
        }
    });
    $.ajaxSetup({async: true});
}

function getF1S(neg, pos){
    $.ajaxSetup({async: false});
    $.ajax({
        url: 'http://localhost:5000/imbalance/'+neg+'/'+pos+'/',
        type: 'GET',
        success: function(response) {
            var f1s_mat = response.f1s_mat;
            var k = 0;
            for (var i = 0; i < f1s_mat.length; i++){
                for (var j = 0; j < f1s_mat[i].length; j++){
                    f1sArray[k] = f1s_mat[i][j];
                    k += 1;
                }
            }
        },
        error: function(error) {
            alert("ERROR");
            console.log(error);
        }
    });
    $.ajaxSetup({async: true});
}

function getGSR(neg, pos){
    $.ajaxSetup({async: false});
    $.ajax({
        url: 'http://localhost:5000/imbalance/'+neg+'/'+pos+'/',
        type: 'GET',
        success: function(response) {
            var gsr_mat = response.gsr_mat;
            var k = 0;
            for (var i = 0; i < gsr_mat.length; i++){
                for (var j = 0; j < gsr_mat[i].length; j++){
                    gsrArray[k] = gsr_mat[i][j];
                    k += 1;
                }
            }
        },
        error: function(error) {
            alert("ERROR");
            console.log(error);
        }
    });
    $.ajaxSetup({async: true});
}

function getDLI(neg, pos){
    $.ajaxSetup({async: false});
    $.ajax({
        url: 'http://localhost:5000/imbalance/'+neg+'/'+pos+'/',
        type: 'GET',
        success: function(response) {
            var dli_mat = response.dli_mat;
            var k = 0;
            for (var i = 0; i < dli_mat.length; i++){
                for (var j = 0; j < dli_mat[i].length; j++){
                    dliArray[k] = dli_mat[i][j];
                    k += 1;
                }
            }
        },
        error: function(error) {
            alert("ERROR");
            console.log(error);
        }
    });
    $.ajaxSetup({async: true});
}

function getTSS(neg, pos){
    $.ajaxSetup({async: false});
    $.ajax({
        url: 'http://localhost:5000/imbalance/'+neg+'/'+pos+'/',
        type: 'GET',
        success: function(response) {
            var tss_mat = response.tss_mat;
            var k = 0;
            for (var i = 0; i < tss_mat.length; i++){
                for (var j = 0; j < tss_mat[i].length; j++){
                    tssArray[k] = tss_mat[i][j];
                    k += 1;
                }
            }
        },
        error: function(error) {
            alert("ERROR");
            console.log(error);
        }
    });
    $.ajaxSetup({async: true});
}

function getHSS(neg, pos){
    $.ajaxSetup({async: false});
    $.ajax({
        url: 'http://localhost:5000/imbalance/'+neg+'/'+pos+'/',
        type: 'GET',
        success: function(response) {
            var hss_mat = response.hss_mat;
            var k = 0;
            for (var i = 0; i < hss_mat.length; i++){
                for (var j = 0; j < hss_mat[i].length; j++){
                    hssArray[k] = hss_mat[i][j];
                    k += 1;
                }
            }
        },
        error: function(error) {
            alert("ERROR");
            console.log(error);
        }
    });
    $.ajaxSetup({async: true});
}

function getYDN(neg, pos){
    $.ajaxSetup({async: false});
    $.ajax({
        url: 'http://localhost:5000/imbalance/'+neg+'/'+pos+'/',
        type: 'GET',
        success: function(response) {
            var ydn_mat = response.ydn_mat;
            var k = 0;
            for (var i = 0; i < ydn_mat.length; i++){
                for (var j = 0; j < ydn_mat[i].length; j++){
                    ydnArray[k] = ydn_mat[i][j];
                    k += 1;
                }
            }
        },
        error: function(error) {
            alert("ERROR");
            console.log(error);
        }
    });
    $.ajaxSetup({async: true});
}

function getROC(neg, pos){
    $.ajaxSetup({async: false});
    $.ajax({
        url: 'http://localhost:5000/imbalance/'+neg+'/'+pos+'/',
        type: 'GET',
        success: function(response) {
            var roc_mat = response.roc_mat;
            var k = 0;
            for (var i = 0; i < roc_mat.length; i++){
                for (var j = 0; j < roc_mat[i].length; j++){
                    rocArray[k] = roc_mat[i][j];
                    k += 1;
                }
            }
        },
        error: function(error) {
            alert("ERROR");
            console.log(error);
        }
    });
    $.ajaxSetup({async: true});
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function getSVG(){

    resetGraphs();

    var negative = document.getElementById("negInstances").value;
    var neg = parseFloat(negative).toFixed(2);
    getGraphs(neg);



    var svgACC = d3.select("#acc"),
        width = svgACC.attr("width"),
        height = svgACC.attr("height");

        svgACC.append('text')
            .attr('x', width/2)
            .attr('y', 20)
            .attr('text-anchor', 'middle')
            .style('font-family', 'Helvetica')
            .style('font-size', 20)
            .text('Accuracy');

    var svgBAC = d3.select("#bac"),
        width = svgBAC.attr("width"),
        height = svgBAC.attr("height");

        svgBAC.append('text')
            .attr('x', width/2)
            .attr('y', 20)
            .attr('text-anchor', 'middle')
            .style('font-family', 'Helvetica')
            .style('font-size', 20)
            .text('Balanced Accuracy');

    var svgGEM = d3.select("#gem"),
        width = svgGEM.attr("width"),
        height = svgGEM.attr("height");

        svgGEM.append('text')
            .attr('x', width/2)
            .attr('y', 20)
            .attr('text-anchor', 'middle')
            .style('font-family', 'Helvetica')
            .style('font-size', 20)
            .text('Geometric Mean');

    var svgPRE = d3.select("#pre"),
        width = svgPRE.attr("width"),
        height = svgPRE.attr("height");

        svgPRE.append('text')
            .attr('x', width/2)
            .attr('y', 20)
            .attr('text-anchor', 'middle')
            .style('font-family', 'Helvetica')
            .style('font-size', 20)
            .text('Precision');

    var svgREC = d3.select("#rec"),
        width = svgREC.attr("width"),
        height = svgREC.attr("height");

        svgREC.append('text')
            .attr('x', width/2)
            .attr('y', 20)
            .attr('text-anchor', 'middle')
            .style('font-family', 'Helvetica')
            .style('font-size', 20)
            .text('Recall');

    var svgF1S = d3.select("#f1s"),
        width = svgF1S.attr("width"),
        height = svgF1S.attr("height");

        svgF1S.append('text')
            .attr('x', width/2)
            .attr('y', 20)
            .attr('text-anchor', 'middle')
            .style('font-family', 'Helvetica')
            .style('font-size', 20)
            .text('f1-Score');

    var svgGSR = d3.select("#gsr"),
        width = svgGSR.attr("width"),
        height = svgGSR.attr("height");

        svgGSR.append('text')
            .attr('x', width/2)
            .attr('y', 20)
            .attr('text-anchor', 'middle')
            .style('font-family', 'Helvetica')
            .style('font-size', 20)
            .text("Gilbert's Skill Score");

    var svgDLI = d3.select("#dli"),
        width = svgDLI.attr("width"),
        height = svgDLI.attr("height");

        svgDLI.append('text')
            .attr('x', width/2)
            .attr('y', 20)
            .attr('text-anchor', 'middle')
            .style('font-family', 'Helvetica')
            .style('font-size', 20)
            .text("Dolittle's Skill Score");

        var svgTSS = d3.select("#tss"),
            width = svgTSS.attr("width"),
            height = svgTSS.attr("height");

            svgTSS.append('text')
                .attr('x', width/2)
                .attr('y', 20)
                .attr('text-anchor', 'middle')
                .style('font-family', 'Helvetica')
                .style('font-size', 20)
                .text('True Skill Statistic');

        var svgHSS = d3.select("#hss"),
            width = svgHSS.attr("width"),
            height = svgHSS.attr("height");

            svgHSS.append('text')
                .attr('x', width/2)
                .attr('y', 20)
                .attr('text-anchor', 'middle')
                .style('font-family', 'Helvetica')
                .style('font-size', 20)
                .text('Heidke Skill Score');

        var svgYDN = d3.select("#ydn"),
            width = svgYDN.attr("width"),
            height = svgYDN.attr("height");

            svgYDN.append('text')
                .attr('x', width/2)
                .attr('y', 20)
                .attr('text-anchor', 'middle')
                .style('font-family', 'Helvetica')
                .style('font-size', 20)
                .text('Youden Index');

        var svgROC = d3.select("#roc"),
            width = svgROC.attr("width"),
            height = svgROC.attr("height");

            svgROC.append('text')
                .attr('x', width/2)
                .attr('y', 20)
                .attr('text-anchor', 'middle')
                .style('font-family', 'Helvetica')
                .style('font-size', 20)
                .text('ROC Space');

    var svgAll = d3.selectAll("svg")

    var xScale = d3.scaleLinear().domain([0, 1]).range([0, width]),
        yScale = d3.scaleLinear().domain([0, 1]).range([height-30, 0]);

    var g = svgAll.append("g")
        .attr("transform", "translate(" + 0 + "," + 30 + ")");


     var thresholds = d3.range(-1, 1.1)
         .map(function(p) { return  p; });

     var contours = d3.contours()
         .size([64, 64]);

     var color = d3.scaleSequential()
     .interpolator( d3.interpolateRdBu)
     .domain([-1, 1.1])
     .domain(d3.extent(thresholds));


     svgACC.selectAll("path")
       .data(contours(accArray))
       .enter().append("path")
         .attr("d", d3.geoPath(d3.geoIdentity().scale(width / 64)))
         .attr("fill", function(d) { return color(d.value); })
         .attr("transform", "translate(" + 0 + "," + 30 + ")");

     svgBAC.selectAll("path")
       .data(contours(bacArray))
       .enter().append("path")
         .attr("d", d3.geoPath(d3.geoIdentity().scale(width / 64)))
         .attr("fill", function(d) { return color(d.value); })
         .attr("transform", "translate(" + 0 + "," + 30 + ")");

     svgGEM.selectAll("path")
       .data(contours(gemArray))
       .enter().append("path")
         .attr("d", d3.geoPath(d3.geoIdentity().scale(width / 64)))
         .attr("fill", function(d) { return color(d.value); })
         .attr("transform", "translate(" + 0 + "," + 30 + ")");

     svgPRE.selectAll("path")
       .data(contours(preArray))
       .enter().append("path")
         .attr("d", d3.geoPath(d3.geoIdentity().scale(width / 64)))
         .attr("fill", function(d) { return color(d.value); })
         .attr("transform", "translate(" + 0 + "," + 30 + ")");

     svgREC.selectAll("path")
       .data(contours(recArray))
       .enter().append("path")
         .attr("d", d3.geoPath(d3.geoIdentity().scale(width / 64)))
         .attr("fill", function(d) { return color(d.value); })
         .attr("transform", "translate(" + 0 + "," + 30 + ")");

     svgF1S.selectAll("path")
       .data(contours(f1sArray))
       .enter().append("path")
         .attr("d", d3.geoPath(d3.geoIdentity().scale(width / 64)))
         .attr("fill", function(d) { return color(d.value); })
         .attr("transform", "translate(" + 0 + "," + 30 + ")");

     svgGSR.selectAll("path")
       .data(contours(gsrArray))
       .enter().append("path")
         .attr("d", d3.geoPath(d3.geoIdentity().scale(width / 64)))
         .attr("fill", function(d) { return color(d.value); })
         .attr("transform", "translate(" + 0 + "," + 30 + ")");

     svgDLI.selectAll("path")
       .data(contours(dliArray))
       .enter().append("path")
         .attr("d", d3.geoPath(d3.geoIdentity().scale(width / 64)))
         .attr("fill", function(d) { return color(d.value); })
         .attr("transform", "translate(" + 0 + "," + 30 + ")");

     svgTSS.selectAll("path")
       .data(contours(tssArray))
       .enter().append("path")
         .attr("d", d3.geoPath(d3.geoIdentity().scale(width / 64)))
         .attr("fill", function(d) { return color(d.value); })
         .attr("transform", "translate(" + 0 + "," + 30 + ")");


    svgHSS.selectAll("path")
      .data(contours(hssArray))
      .enter().append("path")
        .attr("d", d3.geoPath(d3.geoIdentity().scale(width / 64)))
        .attr("fill", function(d) { return color(d.value); })
        .attr("transform", "translate(" + 0 + "," + 30 + ")");

    svgYDN.selectAll("path")
      .data(contours(ydnArray))
      .enter().append("path")
        .attr("d", d3.geoPath(d3.geoIdentity().scale(width / 64)))
        .attr("fill", function(d) { return color(d.value); })
        .attr("transform", "translate(" + 0 + "," + 30 + ")");

    svgROC.selectAll("path")
      .data(contours(rocArray))
      .enter().append("path")
        .attr("d", d3.geoPath(d3.geoIdentity().scale(width / 64)))
        .attr("fill", function(d) { return color(d.value); })
        .attr("transform", "translate(" + 0 + "," + 30 + ")");

}

function loadJson(){

    resetModel();

    let jsonFile =document.getElementById("upload");
    let selectBx = document.getElementById("selectDiv");
    let fr = new FileReader();
    fr.readAsText(jsonFile.files[0]);

    fr.onload = function(){
        var str = fr.result;
        var jsonObj = JSON.parse(str);
        var firstModel = jsonObj[0].elements;
        var epochMin = Math.min.apply(null, firstModel.map((v) => v.epoch));
        var epochMax = Math.max.apply(null, firstModel.map((v) => v.epoch));
        var numOfElements = jsonObj[0].elements.length;

        var selectDiv = "";

        if(jsonObj.length == 1){
            selectDiv += "<button>"+jsonObj[0].name+"</button>";
        }
        else{
            selectDiv +=  '<select id="selectButton" size='+jsonObj.length+'>';
            for (var i = 0; i < jsonObj.length; i++){
                if(i == 0){
                    selectDiv += "<option value='"+jsonObj[i].name+"' selected>"+jsonObj[i].name+"</option>"
                }
                else{
                    selectDiv += "<option value='"+jsonObj[i].name+"'>"+jsonObj[i].name+"</option>"
                }
            }
            selectDiv += "</select>";
        }
        //sideBarDiv.innerHTML = sideText;
        selectBx.innerHTML = selectDiv;


        var height = 230;
        var width = 200;

        var svgAll = d3.selectAll("svg")

        var xScale = d3.scaleLinear().domain([0, 1]).range([0, width]),
            yScale = d3.scaleLinear().domain([0, 1]).range([height-30, 0]);

        var g = svgAll.append("g")
            .attr("transform", "translate(" + 0 + "," + 30 + ")");


        var div = d3.select("body")
             .append("div")
             .attr("class", "tooltip")
             .style("opacity", 0);

            var line = svgAll.append("g")
                .append("path")
                .datum(firstModel)
                .attr("fill", "none")
                .attr("transform", "translate(" + 0 + "," + 30 + ")")
                .attr("stroke", "black")
                .attr("stroke-width", 1.5)
                .attr("d", d3.line()
                  .x(function(d) { return xScale(d.tn/(d.tn+d.fp)); } )
                  .y(function(d) { return yScale(d.tp/(d.tp+d.fn)); } )
              );

            var dot =  svgAll.append("g")
             .selectAll("circle")
             .data(firstModel)
             .enter()
             .append("circle")
             .attr("cx", function (d) { return xScale(d.tn/(d.tn+d.fp)); } )
             .attr("cy", function (d) { return yScale(d.tp/(d.tp+d.fn)); } )
             .attr("transform", "translate(" + 0 + "," + 30 + ")")
             .attr("stroke", function(d){
                 var returnColor;
                 if (d.epoch == epochMin || d.epoch == epochMax){
                     returnColor = "#f57842";
                 }
                 else{
                     returnColor = "#64CD64";
                 }
                 return returnColor;
             })
             .attr("stroke-width", 1.5)
             .style("fill", "#FFFFFF")
             .attr("r", function(d){

                 var returnSize;
                 if (d.epoch == epochMin || d.epoch == epochMax){
                     returnSize = 4;
                 }
                 else{
                     returnSize = 4;
                 }
                 return returnSize;
             })
             .on('mouseover', function (d, i) {
                 d3.select(this).transition()
                      .duration('100')
                      .attr("r", 5);
                div.transition()
                        .duration(100)
                        .style("opacity", 1);
                div.html("TP: " + (d.tp) +"<br>FP: " + (d.fp) + "<br>FN: " + (d.fn) + "<br>TN: " + (d.tn) + "<br>Epoch: " + (d.epoch))
                        .style("left", (d3.event.pageX + 10) + "px")
                        .style("top", (d3.event.pageY - 15) + "px");
              })
              .on('mouseout', function (d, i) {
                   d3.select(this).transition()
                        .duration('200')
                        .attr("r", 4);
                   div.transition()
                        .duration('200')
                        .style("opacity", 0);
              });



              //function that update the chart
                  function update(selectedModel) {

                      var index = jsonObj.findIndex(function(item, i){
                          return item.name === selectedModel
                        });

                    // Create new data with the selection?
                    var dataFilter = jsonObj[index].elements;

                    epochMin = Math.min.apply(null, dataFilter.map((v) => v.epoch));
                    epochMax = Math.max.apply(null, dataFilter.map((v) => v.epoch));

                    // Give these new data to update line
                    line
                        .datum(dataFilter)
                        .transition()
                        .duration(1000)
                        .attr("fill", "none")
                        .attr("transform", "translate(" + 0 + "," + 30 + ")")
                        .attr("stroke", "black")
                        .attr("stroke-width", 1.5)
                        .attr("d", d3.line()
                          .x(function(d) { return xScale(d.tn/(d.tn+d.fp)); } )
                          .y(function(d) { return yScale(d.tp/(d.tp+d.fn)); } )
                        )

                if(dataFilter.length == numOfElements){
                    dot
                      .data(dataFilter)
                      .transition()
                      .duration(1000)
                      .attr("cx", function(d) { return xScale(d.tn/(d.tn+d.fp)); } )
                      .attr("cy", function(d) { return yScale(d.tp/(d.tp+d.fn)); } )
                  }
                  else{
                      numOfElements = dataFilter.length;
                      svgAll.selectAll("g").remove();

                      line = svgAll.append("g")
                          .append("path")
                          .datum(dataFilter)
                          .attr("fill", "none")
                          .attr("transform", "translate(" + 0 + "," + 30 + ")")
                          .attr("stroke", "black")
                          .attr("stroke-width", 1.5)
                          .attr("d", d3.line()
                            .x(function(d) { return xScale(d.tn/(d.tn+d.fp)); } )
                            .y(function(d) { return yScale(d.tp/(d.tp+d.fn)); } )
                        );

                      dot =  svgAll.append("g")
                       .selectAll("circle")
                       .data(dataFilter)
                       .enter()
                       .append("circle")
                       .attr("cx", function (d) { return xScale(d.tn/(d.tn+d.fp)); } )
                       .attr("cy", function (d) { return yScale(d.tp/(d.tp+d.fn)); } )
                       .attr("transform", "translate(" + 0 + "," + 30 + ")")
                       .attr("stroke", function(d){
                           var returnColor;
                           if (d.epoch == epochMin || d.epoch == epochMax){
                               returnColor = "#f57842";
                           }
                           else{
                               returnColor = "#64CD64";
                           }
                           return returnColor;
                       })
                       .attr("stroke-width", 1.5)
                       .style("fill", "#FFFFFF")
                       .attr("r", function(d){

                           var returnSize;
                           if (d.epoch == epochMin || d.epoch == epochMax){
                               returnSize = 4;
                           }
                           else{
                               returnSize = 4;
                           }
                           return returnSize;
                       })
                       .on('mouseover', function (d, i) {
                           d3.select(this).transition()
                                .duration('100')
                                .attr("r", 5);
                          div.transition()
                                  .duration(100)
                                  .style("opacity", 1);
                          div.html("TP: " + (d.tp) +"<br>FP: " + (d.fp) + "<br>FN: " + (d.fn) + "<br>TN: " + (d.tn) + "<br>Epoch: " + (d.epoch))
                                  .style("left", (d3.event.pageX + 10) + "px")
                                  .style("top", (d3.event.pageY - 15) + "px");
                        })
                        .on('mouseout', function (d, i) {
                             d3.select(this).transition()
                                  .duration('200')
                                  .attr("r", 4);
                             div.transition()
                                  .duration('200')
                                  .style("opacity", 0);
                        });
                  }
                }

                  // When the button is changed, run the updateChart function
                  d3.select("#selectButton").on("change", function(d) {
                      // recover the option that has been chosen
                      var selectedOption = d3.select(this).property("value")
                      // run the updateChart function with this selected option
                      update(selectedOption)
                  })

    }
}

function resetGraphs(){

    var svgALL = d3.selectAll("svg")
    svgALL.selectAll("*").remove();
}

function resetModel(){
    var svgALL = d3.selectAll("svg")
    svgALL.selectAll("g").remove();
}

function addCM(){

    let TP = parseFloat(document.getElementById("TP").value);
    let FP = parseFloat(document.getElementById("FP").value);
    let FN = parseFloat(document.getElementById("FN").value);
    let TN = parseFloat(document.getElementById("TN").value);

    let TPR = (TP/( TP + FN)).toFixed(2);
    let TNR = (TN/(TN+FP)).toFixed(2);

    // Step 1
    var dataset = [
        [TNR, TPR]
    ];

     var height = 230;
     var width = 200;

     var svgAll = d3.selectAll("svg")

     var xScale = d3.scaleLinear().domain([0, 1]).range([0, width]),
         yScale = d3.scaleLinear().domain([0, 1]).range([height-30, 0]);

     var g = svgAll.append("g")
         .attr("transform", "translate(" + 0 + "," + 30 + ")");


     var div = d3.select("body")
          .append("div")
          .attr("class", "tooltip")
          .style("opacity", 0);

         var dot =  svgAll.append("g")
          .selectAll("circle")
          .data(dataset)
          .enter()
          .append("circle")
          .attr("cx", function (d) { return xScale(d[0]); } )
          .attr("cy", function (d) { return yScale(d[1]); } )
          .attr("transform", "translate(" + 0 + "," + 30 + ")")
          .attr("stroke","#64CD64")
          .attr("stroke-width", 1.5)
          .style("fill", "#FFFFFF")
          .attr("r", 4)
          .on('mouseover', function (d, i) {
              d3.select(this).transition()
                   .duration('100')
                   .attr("r", 5);
             div.transition()
                     .duration(100)
                     .style("opacity", 1);
             div.html("TP: " + TP +"<br>FP: " + FP + "<br>FN: " + FN + "<br>TN: " + TN)
                     .style("left", (d3.event.pageX + 10) + "px")
                     .style("top", (d3.event.pageY - 15) + "px");
           })
           .on('mouseout', function (d, i) {
                d3.select(this).transition()
                     .duration('200')
                     .attr("r", 4);
                div.transition()
                     .duration('200')
                     .style("opacity", 0);
           });
}
