var mymap = L.map('mapid').setView([33.6846, 117.8265], 13);

// var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZWRkaWVib3IiLCJhIjoiY2ppN3I2Z2NyMGVjMjN2bmJrMjZjaThzciJ9.ThOAmumSFKBt2zgAkJdWhA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZWRkaWVib3IiLCJhIjoiY2ppN3I2Z2NyMGVjMjN2bmJrMjZjaThzciJ9.ThOAmumSFKBt2zgAkJdWhA'
}).addTo(mymap);