function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false&key=AIzaSyDSlin1ShtQPNOlM4QyKktR8e_RyQlp1rI&callback=initMap&libraries=places,geometry&channel=GMPSB_locatorplus_v4_cABD";

    document.getElementById("mapholder").innerHTML = "<img src='" + img_url + "'>";
}