// Get the cart modal
var cart = document.getElementById("myCart");

// Get the <span> element that closes the cart modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the cart with the correct information by checking id of the photo clicked
function showCart() {
    populateCart();
    cart.style.display = "block";
    modal.style.display = "none";
}

// When the user clicks on <span> (x), close the cart modal
span.onclick = function () {
    cart.style.display = "none";
}

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
                '<td class="border-0 align-middle"><a href="#" class="text-danger btnDeleteGunCart" rel="' + this._id + '" ><i class="fa fa-trash"></i></a></td>' +
                '</tr>'
        });

        // Inject the whole content string into our existing HTML table
        $('#cartList table tbody').html(cartTableContent);

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
function deleteGunCart(event) {
    event.preventDefault();

    // Pop up a confirmation dialog
    var confirmation = confirm('Are you sure you want to remove this gun from the cart?');

    // Check and make sure the gun confirmed
    if (confirmation === true) {

        // If they did, do our delete
        $.ajax({
            type: 'DELETE',
            url: '/cart/deletecart/' + $(this).attr('rel')
        }).done(function (response) {

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

// Remove guns from cart and subtract from their qtd
function checkOutCart() {

    // jQuery AJAX call for JSON
    $.getJSON('/cart/cartlist', function (data) {

        // For each item in our JSON
        $.each(data, function () {
            if (this.qtd <= 0) {
                // Pop up a confirmation dialog
                confirm('We are sorry, but the gun you tried to checkout has no more stock.');
            }
            else {
                this.qtd -= 1;// Remove one from its quantity

                var newQtd = {
                    'ref_id': this.ref_id,
                    'qtd': this.qtd
                }

                // Use AJAX to change the gun's attribute of qtd to the new one. We need to call the /guns/ routes for this
                $.ajax({
                    type: 'PUT',
                    data: newQtd,
                    url: '/guns/changegun/' + newQtd.ref_id,
                    dataType: 'JSON',
                })

                // Once the quantity has been updated, remove it from the cart since it is 'bought'
                $.ajax({
                    type: 'DELETE',
                    url: '/cart/deletecart/' + this._id
                }).done(function (response) {

                    // Check for a successful (blank) response
                    if (response.msg === '') {
                    }
                    else {
                        alert('Error: ' + response.msg);
                    }

                    // Update the table
                    populateCart();

                });

                populateTable();
            }
        });
    });
};