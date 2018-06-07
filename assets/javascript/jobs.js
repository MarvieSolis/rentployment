$("#searchButton").on("click", function() {

    var jobTitle = $("#jobTitle").val().trim();
    var location = $("#location").val().trim();
    var stateOptions = $("#stateOptions").val();
    var queryURL = 'https://jobs.github.com/positions.json?description=' + jobTitle + '&location=' + location;

    $.ajax({
        url: queryURL,
        method: 'GET',
        dataType: 'jsonp'
    }).then(function(response) {

        for (var i = 0; i < response.length; i++) {

            var newP = $("<div class='listing'>");

            newP.append('<img class="companyLogo" src=' + response[i].company_logo + '>');
            newP.append('<br>' + '<strong>' + response[i].title + '</strong>');
            newP.append('<br>' + response[i].location);
            newP.append('<br>' +response[i].company);

            $("#temporary").append(newP);
            
        }
    });

});