/// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// YOUR CODE HERE!
// reference the tbody
var tbody = d3.select("tbody");

// update the table with data
function updateTable(data){
    // clears the data of the current table   
    tbody.html("");
    // stop the page from refresh
   // d3.event.preventDefault();
    // Create table structure in the html file and insert each "data" object
    data.forEach((row) => {
    // for each "element" in the object create a row
    var tablerow = tbody.append("tr");
    // below "object" becomes the targetet array (element)
    Object.values(row).forEach((value)=> {
    // console.log(`The key is: ${row} and the value is: ${value}`);
    var tablecell= tablerow.append("td");
    // adds the "value" to each row in the table
    tablecell.text(value);
    }    
    );   
    });
}

// filter the table 
function filterTable(){
    var filterData = tableData;
    var date = d3.select("#datetime").property("value");
    if (date){
        filterData = filterData.filter(result => result.datetime === date);
        //updateTable(filterData);
   } 
   var city = d3.select("#city").property("value");
    if (city){
        filterData = filterData.filter(result => result.city === city);
        
   } 
   var state = d3.select("#state").property("value");
    if (state){
        filterData = filterData.filter(result => result.state === state);
        
   } 
   var country = d3.select("#country").property("value");
    if (country){
        filterData = filterData.filter(result => result.country === country);
        
   } 
   var shape = d3.select("#shape").property("value");
    if (shape){
        filterData = filterData.filter(result => result.shape === shape);
        
   } 

   updateTable(filterData);
}
// runs when button is clicked 
d3.select("#filter-btn").on("click",filterTable);
updateTable(tableData);

