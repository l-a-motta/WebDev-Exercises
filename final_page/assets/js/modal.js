// Temporary JSON
//const json = '{ "guns": [ { "id": 0, "name": "TEST", "photo": "portfolio-0", "type": "none" }, { "id": 1, "name": "M60", "photo": "portfolio-1", "type": "auto" }, { "id": 2, "name": "Old Musket", "photo": "portfolio-2", "type": "manual" }, { "id": 3, "name": "SP2022", "photo": "portfolio-3", "type": "semi" }, { "id": 4, "name": "M4", "photo": "portfolio-4", "type": "auto" }, { "id": 5, "name": "Magnum 44", "photo": "portfolio-5", "type": "semi" }, { "id": 6, "name": "M4A1", "photo": "portfolio-6", "type": "auto" }, { "id": 7, "name": "MP5", "photo": "portfolio-7", "type": "auto" }, { "id": 8, "name": "STNGR", "photo": "portfolio-8", "type": "auto" }, { "id": 9, "name": "AK 47", "photo": "portfolio-9", "type": "auto" } ] }';

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
  document.getElementById("gunName").innerHTML = data.guns[gun_id].id +' - '+data.guns[gun_id].name;

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