$.get('https://campifi.herokuapp.com/marker_json', function(data) {
<<<<<<< HEAD
console.log(data);
}).then( function(data){
var campsitesCoordsArray = [];
campsites = data;
for (var i = 0; i < campsites.length; i++) {
var campsiteCoords = [campsites[i].name, campsites[i].latitude, campsites[i].longitude];
campsitesCoordsArray.push(campsiteCoords);
}
console.log(campsitesCoordsArray);
return campsitesCoordsArray;
}).then( function(array){

window.initMap = function() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.7392 , lng: -104.9903},
    zoom: 2
  });
  var infoWindow = new google.maps.InfoWindow({map: map});
  if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
           var pos = {
             lat: position.coords.latitude,
             lng: position.coords.longitude
           };
console.log(pos);
var markerArray = [
  ['aus', 25.2744, 133.7751],
  ['aus', 26.3333, 132.3333],
  ['aus', 24.9999, 135.7777]
];
var marker;
for (i = 0; i < markerArray.length; i++){
  marker = new google.maps.Marker({
  position: new google.maps.LatLng( array[i][1], array[i][2]),
  map: map,
  title: 'Your location'
});
}
marker.setMap(map);

           infoWindow.setPosition(pos);
           infoWindow.setContent('You are here!');
           map.setCenter(pos);
         }, function() {
           handleLocationError(true, infoWindow, map.getCenter());
         });
=======
<<<<<<< HEAD
   console.log(data);
}).then(function(data) {
   var campsitesCoordsArray = [];
   campsites = data;
   for (var i = 0; i < campsites.length; i++) {
       var campsiteCoords = [campsites[i].name, campsites[i].latitude, campsites[i].longitude]
       campsitesCoordsArray.push(campsiteCoords);
   }
   console.log(campsitesCoordsArray);
   return campsitesCoordsArray;
}).then(function(array) {

   window.initMap = function() {
       var map = new google.maps.Map(document.getElementById('map'), {
           center: {
               lat: 39.7392,
               lng: -104.9903
           },
           zoom: 6,
           mapTypeId: google.maps.MapTypeId.TERRAIN
       });
       var infoWindow = new google.maps.InfoWindow({
           map: map
       });
       if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(function(position) {
               var pos = {
                   lat: position.coords.latitude,
                   lng: position.coords.longitude
               };
               console.log(pos);
               var markerArray = [
                   ['aus', 25.2744, 133.7751],
                   ['aus', 26.3333, 132.3333],
                   ['aus', 24.9999, 135.7777]
               ];
               var marker;
               for (i = 0; i < markerArray.length; i++) {
                   marker = new google.maps.Marker({
                       position: new google.maps.LatLng(array[i][1], array[i][2]),
                       map: map,
                       title: array[i][0]
                   })
               }
               marker.setMap(map);

               infoWindow.setPosition(pos);
               infoWindow.setContent('You are here!');
               map.setCenter(pos);
           }, function() {
               handleLocationError(true, infoWindow, map.getCenter());
           });
>>>>>>> cacec9d39ea1ffe0799c45447014849e39019cd7
       } else {
           // Browser doesn't support Geolocation
           handleLocationError(false, infoWindow, map.getCenter(), map.setMap());
       }
<<<<<<< HEAD
     };
=======
   }
>>>>>>> cacec9d39ea1ffe0799c45447014849e39019cd7

   function handleLocationError(browserHasGeolocation, infoWindow, pos) {
       infoWindow.setPosition(pos);
       infoWindow.setContent(browserHasGeolocation ?
           'Error: The Geolocation service failed.' :
           'Error: Your browser doesn\'t support geolocation.');
   }
=======
    console.log(data);
}).then(function(data) {
    var campsitesCoordsArray = [];
    campsites = data;
    for (var i = 0; i < campsites.length; i++) {
        var campsiteCoords = [campsites[i].name, campsites[i].latitude, campsites[i].longitude]
        campsitesCoordsArray.push(campsiteCoords);
    }
    console.log(campsitesCoordsArray);
    return campsitesCoordsArray;
}).then(function(array) {

    window.initMap = function() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 39.7392,
                lng: -104.9903
            },
            zoom: 6
        });
        var infoWindow = new google.maps.InfoWindow({
            map: map
        });
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                console.log(pos);
                var markerArray = [
                    ['aus', 25.2744, 133.7751],
                    ['aus', 26.3333, 132.3333],
                    ['aus', 24.9999, 135.7777]
                ];
                var marker;
                for (i = 0; i < markerArray.length; i++) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(array[i][1], array[i][2]),
                        map: map,
                        title: array[i][0]
                    })
                }
                marker.setMap(map);

                infoWindow.setPosition(pos);
                infoWindow.setContent('You are here!');
                map.setCenter(pos);
            }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
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
>>>>>>> 754ee8eaca4b0c6c2a98e1aea2379edb1bc35c7a


});
