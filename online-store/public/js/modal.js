// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal with the correct information by checking id of the photo clicked
function showModal(gun_id) {
  // Get Index of object based on id value
  var arrayPosition = gunListData.map(function(arrayItem) { return arrayItem._id; }).indexOf(gun_id);

  // Get our User Object
  var thisGunObject = gunListData[arrayPosition];

  // Need to change each gunImage1 (just change src), gunImage2 (just change src), gunInfo (change whole HTML), soundInfo (just change src)...
  document.getElementById("gunModalId").innerHTML = thisGunObject._id;
  document.getElementById("gunImage1").src = '/img/portfolio/portfolio-'+thisGunObject.number+'.jpg';
  document.getElementById("gunImage2").src = '/img/portfolio/portfolio-'+thisGunObject.number+'.jpg';
  document.getElementById("gunNumber").innerHTML = thisGunObject.number;
  document.getElementById("gunName").innerHTML = thisGunObject.name;
  document.getElementById("gunType").innerHTML = thisGunObject.type;
  document.getElementById("gunQtd").innerHTML = thisGunObject.qtd;
  document.getElementById("gunPrice").innerHTML = thisGunObject.price;
  document.getElementById("gunDescription").innerHTML = thisGunObject.description;
  document.getElementById("gunBuyDirect").href = 'https://www.google.com/search?q=buy+'+thisGunObject.name;
  // document.getElementById("gunSound").src = '/audio/'+thisGunObject.number+'.mp3';
  document.getElementById("gunSound").innerHTML = '<audio controls>' +
                                                    '<source src="/audio/'+ thisGunObject.number +'.mp3" type="audio/mpeg" id="gunSound">'+
                                                  '</audio>';

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