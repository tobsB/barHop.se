$.getJSON( "https://api.foursquare.com/v2/lists/5257bc54498e08c238c10737?client_id=TBBQCOJODYFMHOV1HSRJSFH4AZI2MV2H1IGDWJTB30J1LYGZ&client_secret=SNOY0AJ312VC2TH5HHSRUEYYRSJXMCFEKU521FIP4K5UC5Y5&v=20120530", function( data ) {

    var items = data.response.list.listItems.items,
        numItems = data.response.list.listItems.count;

    for ( var i = 0; i < numItems; i++ ) {
        var item = items[i].venue.location;

        var lat = item.lat,
            lng = item.lng;

        var ourMarker = L.icon({
            iconUrl: 'img/marker.png',
            shadowUrl: 'img/blur.png',

            iconSize:     [24, 40], // size of the icon
            shadowSize:   [41, 32], // size of the shadow
            iconAnchor:   [12, 40], // point of the icon which will correspond to marker's location
            shadowAnchor: [13, 30],  // the same for the shadow
            popupAnchor:  [0, -45], // point from which the popup should open relative to the iconAnchor
            autoPanPadding: [40, 40]
        });
        L.marker([lat, lng], {icon: ourMarker})
            .addTo(map)
            .bindPopup('<strong>' + items[i].venue.name + '</strong><br/>' + items[i].venue.categories[0].name);

    }

});