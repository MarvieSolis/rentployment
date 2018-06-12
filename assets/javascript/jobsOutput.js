    // grab value from localStorage using getItem(value)
    var getJobTitle = localStorage.getItem('job-title');
    var getlocation = localStorage.getItem('location');

    var mapsURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + getlocation;
    
    $.ajax({
        url: mapsURL,
        method: 'GET',
        dataType: 'json'
    }).then(function(response) {
        var latitude = response.results[0].geometry.location.lat;
        var longitude = response.results[0].geometry.location.lng;

        console.log(latitude);
        console.log(longitude);

        var mymap = L.map('mapid').setView([latitude, longitude], 10);
        var marker = L.marker([latitude, longitude]).addTo(mymap);
        
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZWRkaWVib3IiLCJhIjoiY2ppN3I2Z2NyMGVjMjN2bmJrMjZjaThzciJ9.ThOAmumSFKBt2zgAkJdWhA', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiZWRkaWVib3IiLCJhIjoiY2ppN3I2Z2NyMGVjMjN2bmJrMjZjaThzciJ9.ThOAmumSFKBt2zgAkJdWhA'
        }).addTo(mymap);
    })

    var buttonCount = 0;
    var queryURL = 'https://jobs.github.com/positions.json?description=' + getJobTitle + '&location=' + getlocation;

    $.ajax({
        url: queryURL,
        method: 'GET',
        dataType: 'jsonp'
    }).then(function(response) {

        for (var i = 0; i < response.length; i++) {
            var newDiv = $("<div class='listing'>");
            var jobLogo = response[i].company_logo;
            var jobPosition = response[i].title;
            var jobCompany = response[i].company;
            var jobLocation = response[i].location;
            var jobDescription = response[i].description;
            var jobURL = response[i].company_url;

            if (jobURL === null) {
                jobURL = "Website not available!";
            }

            newDiv.append('<img class="companyLogo" src=' + jobLogo + '>')
                .append('<br>' + '<b>Position: </b>' + jobPosition)
                .append('<br>' + '<b>Company: </b>' + jobCompany)
                .append('<br>' + '<b>Location: </b>' + jobLocation)
                .append('<br>' + '<b>Website: </b>' + '<a target="_blank" href=' + jobURL + '>' + jobURL + '</a>');
                
            $("#jobSection").append(newDiv);
        }
    });