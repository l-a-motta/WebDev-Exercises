// gunlist data array for filling in info box
var gunListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

  // Populate the gun table on initial page load
  populateTable();

});

// Functions =============================================================

// Fill table with data
function populateTable() {

  // Empty content string
  var tableContent = '';

  // jQuery AJAX call for JSON
  $.getJSON( '/guns/gunlist', function( data ) {

    // Stick our user data array into a userlist variable in the global object
    gunListData = data;

    // For each item in our JSON, add a table row and cells to the content string
    $.each(data, function(){
      tableContent += '<tr>';
      tableContent += '<td><img src="/img/portfolio/portfolio-'+ this.number +'.jpg" class="img-fluid" alt="'+this.name+'" width="150px"></td>';
      tableContent += '<td>' + this.name + '</td>';
      tableContent += '<td>' + this.number + '</td>';
      tableContent += '<td>' + this.price + '</td>';
      tableContent += '<td><button class="btn btn-primary" id="'+this.number+'" onclick="showModal(this.id)">Details</button><button class="btn btn-success" onclick="addCart()">Add to cart</button></td>';
      tableContent += '<td><button class="btn btn-warning">Update</button><button class="btn btn-danger">Delete</button></td>';
      tableContent += '</tr>';
    });

    // Inject the whole content string into our existing HTML table
    $('#gunList table tbody').html(tableContent);
  });
};