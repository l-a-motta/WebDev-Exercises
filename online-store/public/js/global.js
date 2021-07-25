// gunlist data array for filling in info box
var gunListData = [];

// DOM Ready =============================================================
$(document).ready(function () {

  // Populate the gun table on initial page load
  populateTable();

  // Add gun button click
  $('#btnAddGun').on('click', addGun);

  // Get gun button click
  $('#gunList table tbody').on('click', 'td button.btnGetGun', getGun);

  // Update gun button click
  $('#btnUpdateGun').on('click', updateGun);

  // Delete gun button click
  $('#gunList table tbody').on('click', 'td button.btnDeleteGun', deleteGun);

});

// Functions =============================================================

// Fill table with data
function populateTable() {

  // Empty content string
  var tableContent = '';

  // jQuery AJAX call for JSON
  $.getJSON('/guns/gunlist', function (data) {

    // Stick our gun data array into a gunlist variable in the global object
    gunListData = data;

    // For each item in our JSON, add a table row and cells to the content string
    $.each(data, function () {
      tableContent += '<tr>';
      tableContent += '<td><img src="/img/portfolio/portfolio-' + this.number + '.jpg" class="img-fluid" alt="' + this.name + '" width="150px"></td>';
      tableContent += '<td>' + this.name + '</td>';
      tableContent += '<td>' + this.number + '</td>';
      tableContent += '<td>' + this.price + '</td>';
      tableContent += '<td><button class="btn btn-primary" id="' + this._id + '" onclick="showModal(this.id)">Details</button></td>';
      tableContent += '<td><a href="#form"><button class="btn btn-warning btnGetGun" rel="' + this._id + '">Update</button></a><button class="btn btn-danger btnDeleteGun" rel="' + this._id + '">Delete</button></td>';
      tableContent += '</tr>';
    });

    // Inject the whole content string into our existing HTML table
    $('#gunList table tbody').html(tableContent);
  });
};

// Add gun
function addGun(event) {
  event.preventDefault();

  // Super basic validation - increase errorCount variable if any fields are blank
  var errorCount = 0;
  $('#addGun input').each(function (index, val) {
    if ($(this).val() === '') { errorCount++; }
  });

  // Check and make sure errorCount's still at zero
  if (errorCount === 0) {

    // If it is, compile all gun info into one object
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

// Delete gun
function deleteGun(event) {

  event.preventDefault();

  // Pop up a confirmation dialog
  var confirmation = confirm('Are you sure you want to delete this gun?');

  // Check and make sure the gun confirmed
  if (confirmation === true) {

    // If they did, do our delete
    $.ajax({
      type: 'DELETE',
      url: '/guns/deletegun/' + $(this).attr('rel')
    }).done(function( response ) {

      // Check for a successful (blank) response
      if (response.msg === '') {
      }
      else {
        alert('Error: ' + response.msg);
      }

      // Update the table
      populateTable();

    });

  }
  else {

    // If they said no to the confirm, do nothing
    return false;

  }

};

// Get gun and put it in the form
function getGun(event) {
  // Retrieve username from link rel attribute
  var thisGunId = $(this).attr('rel');

  // Get Index of object based on id value
  var arrayPosition = gunListData.map(function(arrayItem) { return arrayItem._id; }).indexOf(thisGunId);

  // Get our User Object
  var thisGunObject = gunListData[arrayPosition];

  // Need to change each gunImage1 (just change src), gunImage2 (just change src), gunInfo (change whole HTML), soundInfo (just change src)...
  document.getElementById("inputNumber").value = thisGunObject.number;
  document.getElementById("inputName").value = thisGunObject.name;
  document.getElementById("inputType").value = thisGunObject.type;
  document.getElementById("inputPrice").value = thisGunObject.price;
  document.getElementById("inputDescription").value = thisGunObject.description;
  document.getElementById("_id").value = $(this).attr('rel');
}

// Update gun
function updateGun(event) {

  // Super basic validation - increase errorCount variable if any fields are blank
  var errorCount = 0;
  $('#addGun input').each(function (index, val) {
    if ($(this).val() === '') { errorCount++; }
  });

  // Check and make sure errorCount's still at zero
  if (errorCount === 0) {

    // If it is, compile all gun info into one object
    var updatedGun = {
      '_id': $('#addGun fieldset input#_id').val(),
      'name': $('#addGun fieldset input#inputName').val(),
      'number': $('#addGun fieldset input#inputNumber').val(),
      'type': $('#addGun fieldset input#inputType').val(),
      'price': $('#addGun fieldset input#inputPrice').val(),
      'description': $('#addGun fieldset input#inputDescription').val()
    }
    
    console.log(updatedGun);

    // Use AJAX to post the object to our addGun service
    $.ajax({
      type: 'PUT',
      data: updatedGun,
      url: '/guns/changegun/' + updatedGun._id,
      dataType: 'JSON',
      // Todo FOR SOME REASON, THE .DONE IS NOT WORKING
    })//.done(function (response) {
    //   console.log("AJAX done function response starts here...")
    //   // Check for successful (blank) response
    //   if (response.msg === '') {
    //     console.log("It should be clearing now...")
        
    //     // ESPECIALLY clear the hidden ID
    //     document.getElementById("_id").value = '';
    //     // Clear the form inputs
    //     $('#addGun fieldset input').val('');
        

    //     // Update the table
    //     populateTable();

    //   }
    //   else {

    //     // If something goes wrong, alert the error message that our service returned
    //     alert('Error: ' + response.msg);

    //   }
    // });
    // ESPECIALLY clear the hidden ID
    document.getElementById("_id").value = '';
    // Clear the form inputs
    $('#addGun fieldset input').val('');

    // Update the table
    populateTable();
  }
  else {
    // If errorCount is more than 0, error out
    alert('Please fill in all fields');
    return false;
  }
};