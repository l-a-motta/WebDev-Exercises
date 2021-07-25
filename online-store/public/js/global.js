// gunlist data array for filling in info box
var gunListData = [];

// DOM Ready =============================================================
$(document).ready(function () {

  // Populate the gun table on initial page load
  populateTable();

  // Add User button click
  $('#btnAddGun').on('click', addGun);

});

// Functions =============================================================

// Fill table with data
function populateTable() {

  // Empty content string
  var tableContent = '';

  // jQuery AJAX call for JSON
  $.getJSON('/guns/gunlist', function (data) {

    // Stick our user data array into a userlist variable in the global object
    gunListData = data;

    // For each item in our JSON, add a table row and cells to the content string
    $.each(data, function () {
      tableContent += '<tr>';
      tableContent += '<td><img src="/img/portfolio/portfolio-' + this.number + '.jpg" class="img-fluid" alt="' + this.name + '" width="150px"></td>';
      tableContent += '<td>' + this.name + '</td>';
      tableContent += '<td>' + this.number + '</td>';
      tableContent += '<td>' + this.price + '</td>';
      tableContent += '<td><button class="btn btn-primary" id="' + this.number + '" onclick="showModal(this.id)">Details</button></td>';
      tableContent += '<td><button class="btn btn-warning">Update</button><button class="btn btn-danger">Delete</button></td>';
      tableContent += '</tr>';
    });

    // Inject the whole content string into our existing HTML table
    $('#gunList table tbody').html(tableContent);
  });
};

// Add User
function addGun(event) {
  event.preventDefault();

  // Super basic validation - increase errorCount variable if any fields are blank
  var errorCount = 0;
  $('#addGun input').each(function (index, val) {
    if ($(this).val() === '') { errorCount++; }
  });

  // Check and make sure errorCount's still at zero
  if (errorCount === 0) {

    // If it is, compile all user info into one object
    var newGun = {
      'name': $('#addGun fieldset input#inputName').val(),
      'number': $('#addGun fieldset input#inputNumber').val(),
      'type': $('#addGun fieldset input#inputType').val(),
      'price': $('#addGun fieldset input#inputPrice').val(),
      'description': $('#addGun fieldset input#inputDescription').val()
    }

    console.log(newGun);

    // Use AJAX to post the object to our addGun service
    $.ajax({
      type: 'POST',
      data: newGun,
      url: '/guns/addgun',
      dataType: 'JSON'
    }).done(function (response) {

      // Check for successful (blank) response
      if (response.msg === '') {

        // Clear the form inputs
        $('#addGun fieldset input').val('');

        // Update the table
        populateTable();

      }
      else {

        // If something goes wrong, alert the error message that our service returned
        alert('Error: ' + response.msg);

      }
    });
  }
  else {
    // If errorCount is more than 0, error out
    alert('Please fill in all fields');
    return false;
  }
};