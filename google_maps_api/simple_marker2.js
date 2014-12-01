function initialize() {
    var mark1 = new google.maps.LatLng(37.4192, -122.0574),
        mark2 = new google.maps.LatLng(37.4957, -121.2546),
        mark3 = new google.maps.LatLng(37.6783, -120.9501),
        mark4 = new google.maps.LatLng(34.1808, -118.3090),
        mark5 = new google.maps.LatLng(37.6391, -120.9969),
        mark6 = new google.maps.LatLng(38.5816, -121.4944),
        mark7 = new google.maps.LatLng(40.4832, -74.2881),
        mark8 = new google.maps.LatLng(32.8073, -117.1324),
        mark9 = new google.maps.LatLng(39.9548, -82.7693),
        mark10 = new google.maps.LatLng(37.5155, -121.8962),
        mark11 = new google.maps.LatLng(38.0000, -97.0000),
        mark12 = new google.maps.LatLng(30.5670, -96.2837),
        mark13 = new google.maps.LatLng(37.7342, -120.9502),
        mark14 = new google.maps.LatLng(37.6783, -120.9501),
        mark15 = new google.maps.LatLng(52.5000, 5.7500),
        mark16 = new google.maps.LatLng(47.0000, 8.0000),
        mark17 = new google.maps.LatLng(65.0000, -18.0000),
        mark18 = new google.maps.LatLng(52.5000, 5.7500),
        mark19 = new google.maps.LatLng(47.3333, 13.3333),
        mark20 = new google.maps.LatLng(52.5000, 5.7500),
        mark21 = new google.maps.LatLng(39.0000, 35.0000),
        mark22 = new google.maps.LatLng(45.5608, -94.1625),
        mark23 = new google.maps.LatLng(37.5372, -120.8487),
        mark24 = new google.maps.LatLng(37.6391, -120.9969),
        mark25 = new google.maps.LatLng(37.6783, -120.9501),
        mark26 = new google.maps.LatLng(37.4192, -122.0574),
        mark27 = new google.maps.LatLng(37.4957, -121.2546),
        mark28 = new google.maps.LatLng(37.6783, -120.9501),
        mark29 = new google.maps.LatLng(34.1808, -118.3090),
        mark30 = new google.maps.LatLng(37.6391, -120.9969),
        mark31 = new google.maps.LatLng(38.5816, -121.4944),
        mark32 = new google.maps.LatLng(40.4832, -74.2881),
        mark33 = new google.maps.LatLng(32.8073, -117.1324),
        mark34 = new google.maps.LatLng(39.9548, -82.7693),
        mark35 = new google.maps.LatLng(37.5155, -121.8962),
        mark36 = new google.maps.LatLng(38.0000, -97.0000),
        mark37 = new google.maps.LatLng(30.5670, -96.2837),
        mark38 = new google.maps.LatLng(37.7342, -120.9502),
        mark39 = new google.maps.LatLng(37.6783, -120.9501),
        mark40 = new google.maps.LatLng(52.5000, 5.7500),
        mark41 = new google.maps.LatLng(47.0000, 8.0000),
        mark42 = new google.maps.LatLng(65.0000, -18.0000),
        mark43 = new google.maps.LatLng(52.5000, 5.7500),
        mark44 = new google.maps.LatLng(47.3333, 13.3333),
        mark45 = new google.maps.LatLng(52.5000, 5.7500),
        mark46 = new google.maps.LatLng(39.0000, 35.0000),
        mark47 = new google.maps.LatLng(45.5608, -94.1625),
        mark48 = new google.maps.LatLng(37.5372, -120.8487),
        mark49 = new google.maps.LatLng(37.6391, -120.9969),
        mark50 = new google.maps.LatLng(37.6783, -120.9501),
        mark51 = new google.maps.LatLng(37.4192, -122.0574),
        mark52 = new google.maps.LatLng(37.4957, -121.2546),
        mark53 = new google.maps.LatLng(37.6783, -120.9501),
        mark54 = new google.maps.LatLng(34.1808, -118.3090),
        mark55 = new google.maps.LatLng(37.6391, -120.9969),
        mark56 = new google.maps.LatLng(38.5816, -121.4944),
        mark57 = new google.maps.LatLng(40.4832, -74.2881),
        mark58 = new google.maps.LatLng(32.8073, -117.1324),
        mark59 = new google.maps.LatLng(39.9548, -82.7693),
        mark60 = new google.maps.LatLng(37.5155, -121.8962),
        mark61 = new google.maps.LatLng(38.0000, -97.0000),
        mark62 = new google.maps.LatLng(30.5670, -96.2837),
        mark63 = new google.maps.LatLng(37.7342, -120.9502),
        mark64 = new google.maps.LatLng(37.6783, -120.9501),
        mark65 = new google.maps.LatLng(52.5000, 5.7500),
        mark66 = new google.maps.LatLng(47.0000, 8.0000),
        mark67 = new google.maps.LatLng(65.0000, -18.0000),
        mark68 = new google.maps.LatLng(52.5000, 5.7500),
        mark69 = new google.maps.LatLng(47.3333, 13.3333),
        mark70 = new google.maps.LatLng(52.5000, 5.7500),
        mark71 = new google.maps.LatLng(39.0000, 35.0000),
        mark72 = new google.maps.LatLng(45.5608, -94.1625),
        mark73 = new google.maps.LatLng(37.5372, -120.8487),
        mark74 = new google.maps.LatLng(37.6391, -120.9969),
        mark75 = new google.maps.LatLng(37.6783, -120.9501),
        mark76 = {
            zoom: 2,
            center: mark1
        },
        map = new google.maps.Map(document.getElementById("map-canvas"), mark76);
    new google.maps.Marker({
        position: mark1,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark2,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark3,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark4,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark5,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark6,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark7,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark8,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark9,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark10,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark11,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark12,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark13,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark14,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark15,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark16,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark17,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark18,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark19,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark20,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark21,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark22,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark23,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark24,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark25,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark26,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark27,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark28,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark29,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark30,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark31,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark32,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark33,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark34,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark35,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark36,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark37,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark38,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark39,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark40,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark41,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark42,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark43,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark44,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark45,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark46,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark47,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark48,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark49,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark50,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark51,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark52,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark53,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark54,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark55,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark56,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark57,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark58,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark59,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark60,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark61,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark62,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark63,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark64,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark65,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark66,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark67,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark68,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark69,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark70,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark71,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark72,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark73,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark74,
        map: map,
        title: "Hello World!"
    }), new google.maps.Marker({
        position: mark75,
        map: map,
        title: "Hello World!"
    });
}
google.maps.event.addDomListener(window, "load", initialize);