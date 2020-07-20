
function iniciarMap(){

    var map_bounds= {
        center_lat: 27.6648274,
        center_lng: -81.51575350000002,
        nor_lat: 32.3607674,
        est_lng: -77.80493380000001,
        sud_lat: 22.8285924,
        wes_lng:-89.80426820000002
    }

    var coord_center = {lat:map_bounds.center_lat ,lng: map_bounds.center_lng};

    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 6,
        center: coord_center
    });

    var marker = new google.maps.Marker({
        position: coord_center,
        map: map
    });

    var url=""

    var textTest="<h6 class='text-dark'>A Healthy Mind Counseling</h6>"+
        "<p>2 providers</p>"

    var infoWindow=new google.maps.InfoWindow({
        content: textTest
    })

    marker.addListener('mouseover',function () {
        infoWindow.open(map,marker)
    })

    marker.addListener('mouseout',function () {
        infoWindow.close()
    })

}