// Get the cart modal
var cart = document.getElementById("myCart");

// Get the <span> element that closes the cart modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the cart with the correct information by checking id of the photo clicked
function showCart(gun_id) {
  document.getElementById("cart").innerHTML = 'HELLO id:' +gun_id;
  cart.style.display = "block";
}

// When the user clicks on <span> (x), close the cart modal
span.onclick = function() {
    cart.style.display = "none";
}

// Get JSON
var data = JSON.parse(json);