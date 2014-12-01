function initialize() {
    var a = new google.maps.LatLng(34.040334, -118.269551),
        b = new google.maps.LatLng(47.611657, -122.331483),
        c = new google.maps.LatLng(42.345502, -71.046451),
        d = new google.maps.LatLng(29.422203, -98.485861),
        e = new google.maps.LatLng(-37.825335, 144.952338),
        f = new google.maps.LatLng(47.613735, -122.338125),
        g = {
            zoom: 2,
            center: c
        },
        h = new google.maps.Map(document.getElementById("map-canvas"), g);
    new google.maps.Marker({
        position: a,
        map: h,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: b,
        map: h,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: c,
        map: h,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: d,
        map: h,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: e,
        map: h,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: f,
        map: h,
        title: "Hello World!"
    });
}
google.maps.event.addDomListener(window, "load", initialize);