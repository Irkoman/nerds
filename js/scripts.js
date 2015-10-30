var link = document.querySelector(".open-form");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var cancel = document.querySelector(".cancel");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=mail]");
var storage = localStorage.getItem("letter");

link.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.add("modal-content-show");
if (storage) {
	name.value = storage;
	mail.focus();
} else {
	name.focus();
}
});

close.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.remove("modal-content-show");
});

cancel.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.remove("modal-content-show");
});

form.addEventListener("submit", function(event) {
if (!(name.value && mail.value)) {
	event.preventDefault();
	popup.classList.remove("modal-error");
	popup.classList.add("modal-error");
} else {
	localStorage.setItem("letter", letter.value);
}
});

window.addEventListener("keydown", function(event) {
if (event.keyCode == 27) {
	if (popup.classList.contains("modal-content-show")) {
		popup.classList.remove("modal-content-show");
	}
}
});


function initialize() {
    var mapCanvas = document.getElementById("map-canvas");

    var mapOptions = {
        scrollwheel: false,    
        zoom: 17,
        center: new google.maps.LatLng(59.9391274,30.3192746)        
        }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    
    var image = "images/marker.png";
    var myLatLng = new google.maps.LatLng(59.9387942,30.3230833);
    var nerdsMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
  }   
google.maps.event.addDomListener(window, "load", initialize);