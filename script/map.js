function initMap() {
    var location = {
        lat: 32.785783,
        lng: -79.952722
    };
    var map = new google.maps.Map(document.getElementById('map'),{ zoom: 15, center: location});
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}


