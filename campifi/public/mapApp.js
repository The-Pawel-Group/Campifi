// function setLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position){
//       var pos = {position.coords.latitude}
//
//     })
//   }
// }
// var startingLon;
// var startingLat;
// var map;
window.initMap = function() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.7392 , lng: -104.9903},
    zoom: 8
  });
  var infoWindow = new google.maps.InfoWindow({map: map});
  if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
           var pos = {
             lat: position.coords.latitude,
             lng: position.coords.longitude
           };
console.log(pos);

           infoWindow.setPosition(pos);
           infoWindow.setContent('Location found.');
           map.setCenter(pos);
         }, function() {
           handleLocationError(true, infoWindow, map.getCenter());
         });
       } else {
         // Browser doesn't support Geolocation
         handleLocationError(false, infoWindow, map.getCenter());
       }
     }

     function handleLocationError(browserHasGeolocation, infoWindow, pos) {
       infoWindow.setPosition(pos);
       infoWindow.setContent(browserHasGeolocation ?
                             'Error: The Geolocation service failed.' :
                             'Error: Your browser doesn\'t support geolocation.');
     }




$(document).ready(function(){
initMap();

})
