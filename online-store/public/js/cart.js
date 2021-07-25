// Get the cart modal
var cart = document.getElementById("myCart");

// Get the <span> element that closes the cart modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the cart with the correct information by checking id of the photo clicked
function showCart() {
    cart.style.display = "block";
}

// When the user clicks on <span> (x), close the cart modal
span.onclick = function () {
    cart.style.display = "none";
}

// Get JSON
var data = JSON.parse(json);

function addCart() {
    document.getElementById("myModal").style.display = "none";

    var gun_id = document.getElementById("gunModalId").innerHTML;

    // Get Index of object based on id value
    var arrayPosition = gunListData.map(function (arrayItem) { return arrayItem._id; }).indexOf(gun_id);

    // Get our gun Object
    var thisGunObject = gunListData[arrayPosition];

    console.log(thisGunObject);// Will do cart things later with this

    cartContent = '<tr id="gun-' + thisGunObject._id + '">' +
    '<th scope = "row" class= "border-0" >' +
    '<div class="p-2">' +
    '<img src="/img/portfolio/portfolio-' + thisGunObject.number + '.jpg" alt="" class="img-fluid" width="100px" style="padding-right:15px;">' +
    '<div class="ml-3 d-inline-block align-middle">' +
    '<h5 class="mb-0"> <a class="text-dark d-inline-block align-middle">' + thisGunObject.name + '</a> </h5>' +
    '<span class="text-muted font-weight-normal font-italic d-block">' + thisGunObject.type + '</span>' +
    '</div>' +
    '</div>' +
    '</th>' +
    '<td class="border-0 align-middle"><strong>$' + thisGunObject.price + '.00</strong></td>' +
    '<td class="border-0 align-middle"><strong>1</strong></td>' +
    '<td class="border-0 align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a></td>' +
    '</tr>'

    // Inject the whole content string into our existing HTML table
    $('#cartList table tbody').append(cartContent);

    showCart();
}