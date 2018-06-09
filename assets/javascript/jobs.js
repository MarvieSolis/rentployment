$("#searchButton").on("click", function() { 
    var jobTitle = $("#jobTitle").val().trim();
    var location = $("#location").val().trim();
    // save value to localStorage using setItem(key, value)
    localStorage.setItem('job-title', jobTitle);
    localStorage.setItem('location', location);
});