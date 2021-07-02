// Temporary JSON
const json = '{ "guns": [ { "id": 0, "name": "TEST", "photo": "portfolio-0", "type": "none" }, { "id": 1, "name": "AK 47", "photo": "portfolio-1", "type": "auto" }, { "id": 2, "name": "M4", "photo": "portfolio-2", "type": "auto" }, { "id": 3, "name": "M 60", "photo": "portfolio-3", "type": "auto" }, { "id": 4, "name": "M1911", "photo": "portfolio-4", "type": "semi" }, { "id": 5, "name": "Magnum 44", "photo": "portfolio-5", "type": "semi" }, { "id": 6, "name": "M1 Garand", "photo": "portfolio-6", "type": "semi" }, { "id": 7, "name": "Breech Loader", "photo": "portfolio-7", "type": "manual" }, { "id": 8, "name": "Breech Loader 2", "photo": "portfolio-8", "type": "manual" }, { "id": 9, "name": "Kar 98k", "photo": "portfolio-9", "type": "manual" } ] }';

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal with the correct information by checking id of the photo clicked
function showModal(gun_id) {
  var data = JSON.parse(json);
  console.log(data);

  // Need to change each gunImage1 (just change src), gunImage2 (just change src), gunInfo (change whole HTML), soundInfo (just change src)...
  document.getElementById("gunImage1").src = 'assets/img/portfolio/'+data.guns[gun_id].photo+'.jpg';
  document.getElementById("gunImage2").src = 'assets/img/portfolio/'+data.guns[gun_id].photo+'.jpg';

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