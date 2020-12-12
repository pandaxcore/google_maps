function initMap(){
    var options = {
      zoom:13,
      center:{lat:43.213133, lng:76.951457}
    }

    var map = new google.maps.Map(document.getElementById('map'), options);

    var markers = [
        {
            coords:{lat: 43.209600, lng: 76.953500}, /*laverde*/
            iconImage: './img/map/pin_laverde.png',
            content:'<h3>Laverde</h3>'
        }, {
            coords:{lat: 43.215582, lng: 76.881238}, /*navoi3.0*/
            iconImage: './img/map/pin_navoi.svg',
            content:'<h3>Naoi 3.0</h3>'
        }, {
            coords:{lat: 43.201870, lng: 76.906873}, /*rams_lux*/
            iconImage: './img/map/pin_ramslux.png',
            content:'<h3>Rams Luxury</h3>'
        }, {
            coords:{lat: 43.238303, lng: 76.896261}, /* dom_na */
            iconImage: './img/map/pin_dna.png',
            content:'<h3>Lynn MA</h3>'
        }, {
            coords: {lat: 43.251791, lng: 76.893836}, /*no_mad */
            iconImage: './img/map/pin_nomad.png'
        }, {
            coords: {lat: 43.244503, lng: 76.923067}, /*lamia*/
            iconImage: './img/map/pin_lamia.png'
        }, {
            coords: {lat: 43.226124, lng: 76.929765} /*form_plus*/,
            iconImage: './img/map/pin_forump.png'
        }, {
            coords: {lat: 43.218870, lng: 76.955750}, /*ile_de_f*/
            iconImage: './img/map/pin_ille.png'
        }, {
            coords: {lat: 43.233502, lng: 76.951390}, /*latifa_res*/
            iconImage: './img/map/pin_latifa.png'
        }, {
            coords: {lat: 43.256955, lng: 76.962512}, /*vost_park*/
            iconImage: './img/map/pin_eastp.png'
        }, {
            coords: {lat: 43.194498, lng: 76.931328}, /*sakura*/
            iconImage: './img/map/pin_sakura.png'
        },{
            coords: {lat: 43.236495, lng: 76.937473}, /*ortau*/
            iconImage: './img/map/pin_ortau.png'
        }
    ];


    for(var i = 0;i < markers.length;i++){
      addMarker(markers[i]);
    }


    function addMarker(props){
      var marker = new google.maps.Marker({
        position:props.coords,
        map:map,
      });

      if(props.iconImage){
        marker.setIcon(props.iconImage);
      }

      if(props.content){
        var infoWindow = new google.maps.InfoWindow({
          content:props.content
        });
        marker.addListener('click', function(){
            infoWindow.open(map, marker);
        });
      }
    }
  }