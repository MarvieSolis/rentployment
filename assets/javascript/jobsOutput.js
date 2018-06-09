    // grab value from localStorage using getItem(value)
    var getJobTitle = localStorage.getItem('job-title');
    var getlocation = localStorage.getItem('location');
    var apikey = 'wUAz0D9kZAmshmNjeQOWo30frlqpp1vZV8cjsnN6krXxNgXocM';

    var trailURL = 'https://trailapi-trailapi.p.mashape.com/';
    var queryURL = 'https://jobs.github.com/positions.json?description=' + getJobTitle + '&location=' + getlocation;

    $.ajax({
        url: queryURL,
        method: 'GET',
        dataType: 'jsonp'
    }).then(function(response) {

        for (var i = 0; i < response.length; i++) {

            var newP = $("<div class='listing'>");

            newP.append('<img class="companyLogo" src=' + response[i].company_logo + '>')
                .append('<br>' + '<b>Position: </b>' + response[i].title)
                .append('<br>' + '<b>Company: </b>' + response[i].company)
                .append('<br>' + '<b>Location: </b>' + response[i].location)
                .append('<br><button id="modalButton">' + response[i].company + ' Info</button>');

            $("#jobSection").append(newP);
        }
    });

    // $.ajax({
    //     url: trailURL,
    //     method: 'GET',
    //     dataType: 'json',
    //     headers: { 
    //         'X-Mashape-Key': apikey 
    //     }
    // }).then(function(response) {
    //     console.log(response.places);
    //     $("#housingSection").text(JSON.stringify(response.places));
    // });