// from data.js
var tableData = data;

// YOUR CODE HERE!

var button = d3.select("#filter-btn");

var form = d3.select("form");

button.on("click", runEnter);

form.on("submit", runEnter);

var output = d3.select("#ufo-data");

function runEnter() {

    d3.event.preventDefault()

    var dateInput = d3.select("#datetime").property("value")

    var filterData = tableData.filter(function(d){
        return d.datetime === dateInput
    })
    console.log(filterData)

    var cityData = filterData.map(d => d.city);
    var stateData = filterData.map(d => d.state);
    var countryData = filterData.map(d => d.country);
    var shapeData = filterData.map(d => d.shape);
    var durationData = filterData.map(d => d.durationMinutes);
    var commentsData = filterData.map(d => d.comments);

    output.text("");

    var table = d3.select("#ufo-data");

    table.html();


    table.append("td").text(`${dateInput}`);
    table.append("td").text(`${cityData}`);
    table.append("td").text(`${stateData}`);
    table.append("td").text(`${countryData}`);
    table.append("td").text(`${shapeData}`);
    table.append("td").text(`${durationData}`);
    table.append("td").text(`${commentsData}`);

};