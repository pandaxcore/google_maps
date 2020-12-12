var map;

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), 
    {
        center: {lat: 43.227009, lng: 76.928120},
        zoom: 9
    });
}