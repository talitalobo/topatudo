var map;
var panorama;
var initMap = function () {
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
    buscaEndereco("Aderaldo vasconcelos diniz");
}

var buscaEndereco = function (endereco) {
    var request = {
        query: endereco
    };
    var service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
}

var callback = function (results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        var place = results[0];
        var marker = new google.maps.Marker({
            map: map,
            place: {
                placeId: place.place_id,
                location: place.geometry.location
            }
        });

        panorama.setPosition(place.geometry.location);

        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        }
    }
}