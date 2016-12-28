function initMap() {
    var colombo = {lat: 6.9337834, lng: 79.8499047};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 19,
        center: colombo
    });
    var marker = new google.maps.Marker({
        position: colombo,
        map: map
    });
}
