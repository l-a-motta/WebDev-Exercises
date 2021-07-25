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
    var gun_id = document.getElementById("gunNumber").innerHTML;
    jQuery.each(data.guns, function (key, val) {

        // console.log('val.id: '+val.id);
        // console.log('gun_id: '+gun_id);
        if (val.id == gun_id) {
            $("#cartList").append(
            '<tr id="gun-'+val.number+'">' +
                '<th scope = "row" class= "border-0" >' +
                '<div class="p-2">' +
                    '<img src="/img/portfolio/portfolio-'+val.number+'.jpg" alt="" class="img-fluid" width="100px" style="padding-right:15px;">' +
                    '<div class="ml-3 d-inline-block align-middle">' +
                    '<h5 class="mb-0"> <a class="text-dark d-inline-block align-middle">'+val.name+'</a> </h5>' +
                    '<span class="text-muted font-weight-normal font-italic d-block">'+val.type+'</span>' +
                    '</div>' +
                '</div>' +
                '</th>' +
                '<td class="border-0 align-middle"><strong>$'+val.price+'.00</strong></td>' +
                '<td class="border-0 align-middle"><strong>1</strong></td>' +
                '<td class="border-0 align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a></td>' +
            '</tr>');
            return false;
        }

    });
    showCart();
}