// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// OBSOLETE WAY OF DOING MODAL
// Get the button that opens the modal
// var btn = document.getElementById("myBtn");
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on the button, open the modal with the correct information by checking id of the photo clicked
function showModal(gun_id) {
  console.log(gun_id);
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