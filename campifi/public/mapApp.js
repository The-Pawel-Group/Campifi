function setLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      startingLat = position.coords.latitude;
      startingLon = position.coords.longitude;
    })
  }
}
function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,

            });
            map.setOptions({styles: styles});
            map.data.setStyle(function(feature) {
                    return {
                        // title: feature.getProperty('name'),
                        optimized: false
                    };
          })
        }
