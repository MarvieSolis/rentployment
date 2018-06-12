// var mymap = L.map('mapid').setView([33.6846, 118.0648], 13);

// var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// var mymap = L.map('mapid').setView([51.505, -10], 13);

var mymap = L.map('mapid').setView([ 33.68149680197185, -117.82630920410155 ], 10);

var marker = L.marker([ 33.68149680197185, -117.82630920410155 ]).addTo(mymap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZWRkaWVib3IiLCJhIjoiY2ppN3I2Z2NyMGVjMjN2bmJrMjZjaThzciJ9.ThOAmumSFKBt2zgAkJdWhA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZWRkaWVib3IiLCJhIjoiY2ppN3I2Z2NyMGVjMjN2bmJrMjZjaThzciJ9.ThOAmumSFKBt2zgAkJdWhA'
}).addTo(mymap);