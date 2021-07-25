// Get the cart modal
var cart = document.getElementById("myCart");

// Get the <span> element that closes the cart modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the cart with the correct information by checking id of the photo clicked
function showCart() {
    populateCart();
    cart.style.display = "block";
}

// When the user clicks on <span> (x), close the cart modal
span.onclick = function () {
    cart.style.display = "none";
}

// Get JSON
// var data = JSON.parse(json);

// Fill table with data
function populateCart() {

    // Empty content string
    var cartTableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON('/cart/cartlist', function (data) {

        // Stick our gun data array into a gunlist variable in the global object
        cartTableContent = data;

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function () {
            cartTableContent += '<tr>' +
                    '<th scope = "row" class= "border-0" >' +
                    '<div class="p-2">' +
                        '<img src="/img/portfolio/portfolio-' + this.number + '.jpg" alt="" class="img-fluid" width="100px" style="padding-right:15px;">' +
                        '<div class="ml-3 d-inline-block align-middle">' +
                            '<h5 class="mb-0"> <a class="text-dark d-inline-block align-middle">' + this.name + '</a> </h5>' +
                            '<span class="text-muted font-weight-normal font-italic d-block">' + this.type + '</span>' +
                        '</div>' +
                    '</div>' +
                    '</th>' +
                    '<td class="border-0 align-middle"><strong>' + this.description + '</strong></td>' +
                    '<td class="border-0 align-middle"><strong>$' + this.price + '.00</strong></td>' +
                    '<td class="border-0 align-middle"><strong>1</strong></td>' +
                    '<td class="border-0 align-middle"><a href="#" class="text-dark btnDeleteGunCart" rel="'+ this._id +'" ><i class="fa fa-trash"></i></a></td>' +
                '</tr>'
        });

        // Inject the whole content string into our existing HTML table
        $('#cartList table tbody').html(cartTableContent);

        // Add the function of removing to all the buttons
        $('#cartList table tbody').on('click', 'td a.btnDeleteGunCart', deleteGunCart);
    });
};

// Add gun
function addCart() {

    var gunModalId = document.getElementById("gunModalId").innerHTML;
    var gunNumber = document.getElementById("gunNumber").innerHTML;
    var gunName = document.getElementById("gunName").innerHTML;
    var gunType = document.getElementById("gunType").innerHTML;
    var gunQtd = document.getElementById("gunQtd").innerHTML;
    var gunPrice = document.getElementById("gunPrice").innerHTML;
    var gunDescription = document.getElementById("gunDescription").innerHTML;

    // Check and make sure still valid
    if (gunModalId != '-0xa') {

        // If it is, compile all gun info into one object
        var cartGun = {
            'name': gunName,
            'number': gunNumber,
            'type': gunType,
            'qtd': gunQtd,
            'price': gunPrice,
            'description': gunDescription,
            'ref_id': gunModalId
        }

        // Use AJAX to post the object to our addGun service
        $.ajax({
            type: 'POST',
            data: cartGun,
            url: '/cart/addcart',
            dataType: 'JSON'
        }).done(function (response) {

            // Check for successful (blank) response
            if (response.msg === '') {

                // Update the table
                showCart();

            }
            else {

                // If something goes wrong, alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
    }
    else {
        // If errorCount is more than 0, error out
        alert('An error occurred with the _id of the gun you clicked on. Did you add somethign without opening the details page of it first?');
        return false;
    }
};

// Delete gun
function deleteGunCart() {
  
    // Pop up a confirmation dialog
    var confirmation = confirm('Are you sure you want to remove this gun from the cart?');
  
    // Check and make sure the gun confirmed
    if (confirmation === true) {
  
      // If they did, do our delete
      $.ajax({
        type: 'DELETE',
        url: '/cart/deletecart/' + $(this).attr('rel')
      }).done(function( response ) {
  
        // Check for a successful (blank) response
        if (response.msg === '') {
        }
        else {
          alert('Error: ' + response.msg);
        }
  
        // Update the table
        populateCart();
  
      });
  
    }
    else {
  
      // If they said no to the confirm, do nothing
      return false;
  
    }
  
  };