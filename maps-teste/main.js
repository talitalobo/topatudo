
var map;
var panorama;
var geocoder;
var marker;
var initMap = function () {
    geocoder = new google.maps.Geocoder();
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
    });

    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -7.2329289, lng: -35.9053004 },
        zoom: 15
    });
    panorama = new google.maps.StreetViewPanorama(
        document.getElementById('panorama'),
        {
            position: { lat: -7.237680, lng: -35.897932 },
            pov: { heading: 165, pitch: 0 },
            zoom: 1
        });

    carregarNoMapa("Aderaldo vasconcelos diniz");
}

var carregarNoMapa = function (endereco) {
    console.log("ue");

    geocoder.geocode({ 'address': endereco + ', Brasil', 'region': 'BR' }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();

                var location = new google.maps.LatLng(latitude, longitude);
                marker.setPosition(location);
                map.setCenter(location);
                map.setZoom(16);

                panorama.setPosition(location);
            }
        }
    });
}

var createMarker = function(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}