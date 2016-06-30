window.initMap = function() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 39.7392,
            lng: -104.9903
        },
        zoom: 8,
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
            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                animation: google.maps.Animation.DROP,
                draggable: true,
                title: 'Your location'
            });
            marker.setMap(map);
            map.setCenter(pos);
            $('.longitude').val(pos.lng);
            $('.latitude').val(pos.lat);
            google.maps.event.addListener(map, 'click', function(event) {
                marker.setPosition(event.latLng);
                latPos = position.coords.latitude;
                lngPos = position.coords.longitude;
                latPos = marker.getPosition().lat();
                lngPos = marker.getPosition().lng();
                var longitude = lngPos;
                var latitude = latPos;
                $('.longitude').val(longitude);
                $('.latitude').val(latitude);
                map.setCenter(event.latLng);
            });



            google.maps.event.addListener(marker, 'dragend', function(event) {
                latPos = position.coords.latitude;
                lngPos = position.coords.longitude;
                latPos = marker.getPosition().lat();
                lngPos = marker.getPosition().lng();
                var longitude = lngPos;
                var latitude = latPos;
                $('.longitude').val(longitude);
                $('.latitude').val(latitude);
            });
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter(), map.setMap());
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

$(document).ready(function() {
    initMap();
});
