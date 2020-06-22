// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function updateTable(data){
    tbody.html("");
    data.forEach((row) => {
    var tablerow = tbody.append("tr");
    Object.values(row).forEach((value)=>{
    var tablecell= tablerow.append("td");
    tablecell.text(value);
    }    
    );   
    });
}
function filterTable(){
    var filterData = tableData;
    var date = d3.select("#datetime").property("value");
    if (date){
        filterData = filterData.filter(result => result.datetime === date);
        updateTable(filterData);
   } 

}
d3.select("#filter-btn").on("click",filterTable);
updateTable(tableData);

