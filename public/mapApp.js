
$.get('https://campifi.herokuapp.com/marker_json', function(data) {

   console.log(data);
}).then(function(data) {
   var campsitesCoordsArray = [];
   campsites = data;
   for (var i = 0; i < campsites.length; i++) {
       var campsiteCoords = [campsites[i].name, campsites[i].latitude, campsites[i].longitude, campsites[i].id];
       campsitesCoordsArray.push(campsiteCoords);
   }
   console.log(campsitesCoordsArray);
   return campsitesCoordsArray;
   }).then(function(array) {
console.log(array);
   window.onload = function() {
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
               var marker;
               var number;
               for (i = 0; i < array.length; i++) {
                 var siteInfo = '<h5>'+ array[i][0] +'</h5>' + '<h6>' + '<a href="https://campifi.herokuapp.com//campsite/'+ array[i][3] +'" class="detail">'+ 'Campsite Details' + '</a></h6>';

                   marker = new google.maps.Marker({
                       position: new google.maps.LatLng(array[i][1], array[i][2]),
                       map: map,
                       title: siteInfo
                   });
                   console.log(marker);
                   google.maps.event.addListener(marker, 'click', function(){
                     infoWindow.setContent(this.title);
                     infoWindow.open(map, this);
                   });
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
   };

   function handleLocationError(browserHasGeolocation, infoWindow, pos) {
       infoWindow.setPosition(pos);
       infoWindow.setContent(browserHasGeolocation ?
           'Error: The Geolocation service failed.' :
           'Error: Your browser doesn\'t support geolocation.');
     }
  });
