    // grab value from localStorage using getItem(value)
    var getJobTitle = localStorage.getItem('job-title');
    var getlocation = localStorage.getItem('location');
    // var apikey = 'wUAz0D9kZAmshmNjeQOWo30frlqpp1vZV8cjsnN6krXxNgXocM';
    var buttonCount = 0;
    // var trailURL = 'https://trailapi-trailapi.p.mashape.com/';
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