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
            var marker = new google.maps.Marker({
              position: pos,
              map: map,
              title: 'Your location'
            })
            marker.setMap(map);

           infoWindow.setPosition(pos);
           infoWindow.setContent('You are here!');
           map.setCenter(pos);
         }, function() {
           handleLocationError(true, infoWindow, map.getCenter(), map.setMap());
         });
       } else {
         // Browser doesn't support Geolocation
         handleLocationError(false, infoWindow, map.getCenter(), map.setMap());
       }
     }

     function handleLocationError(browserHasGeolocation, infoWindow, pos) {
       infoWindow.setPosition(pos);
       infoWindow.setContent(browserHasGeolocation ?
                             'Error: The Geolocation service failed.' :
                             'Error: Your browser doesn\'t support geolocation.');
     }

$(document).ready(function(){
$.get('http://localhost:3000/marker_json', function(data) {
  console.log(data);
});
initMap();
});
