// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal with the correct information by checking id of the photo clicked
function showModal(gun_id) {
  var data = JSON.parse(json);

  // Need to change each gunImage1 (just change src), gunImage2 (just change src), gunInfo (change whole HTML), soundInfo (just change src)...
  document.getElementById("gunImage1").src = '/img/portfolio/'+data.guns[gun_id].photo+'.jpg';
  document.getElementById("gunImage2").src = '/img/portfolio/'+data.guns[gun_id].photo+'.jpg';
  document.getElementById("gunNumber").innerHTML = data.guns[gun_id].id;
  document.getElementById("gunName").innerHTML = data.guns[gun_id].name;
  document.getElementById("gunType").innerHTML = data.guns[gun_id].id;
  document.getElementById("gunPrice").innerHTML = data.guns[gun_id].id;
  document.getElementById("gunDescription").innerHTML = data.guns[gun_id].id;

  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 