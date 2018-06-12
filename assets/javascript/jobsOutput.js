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

        var mymap = L.map('mapid').setView([latitude, longitude], 12);
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
    
        getSearch(getlocation);

        function getSearch(searchText){
            var url = 'https://www.9flats.com/api/v4/places?client_id=Ijtd9llp0reJrc9lRdIPxPLRBayPCUqilHJjBBXP&search[query]='+searchText;
            axios.get(url, { crossdomain: true })
             .then((response) => {
         var total_index = response.data.places.length;
         for(i = 0;i < total_index; i++ ){
             var property_id = response.data.places[i].place.place_details.name;
             var property_city = response.data.places[i].place.place_details.city;
             var property_zipcode = response.data.places[i].place.place_details.zipcode;
             var property_name = response.data.places[i].place.place_details.name;
             var property_price = "$" + response.data.places[i].place.pricing.price;      
             var property_description = response.data.places[i].place.place_details.description;
             var property_number_of_bathrooms = response.data.places[i].place.place_details.number_of_bathrooms;
             var property_number_of_bedrooms = response.data.places[i].place.place_details.number_of_bedrooms;
             var property_photo_list = response.data.places[i].place.place_details.additional_photos;
             var output =`
            <div class="row" id="housingOutput">
               <div class="col-md-12">
                 <h2>${property_name}</h2>
                 <ul class="list-group">
                   <li class="list-group-item"><strong>Price:</strong> ${property_price} /night</li>
                   <li class="list-group-item"><strong>Room Details:</strong> ${property_number_of_bedrooms} bedrooms, ${property_number_of_bathrooms} bathrooms</li>
                   <li class="list-group-item"><strong>City - Zipcode:</strong> ${property_city} - ${property_zipcode}</li>
                   <div class="card">
                   <div class="card-header" id="houseDescription">
                       <h5 class="mb-0">
                           <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#hello${i}" aria-expanded="false" aria-controls="collapseFive">
                               <p class="faqQ">Click to view description.</p>
                           </button>
                       </h5>
                   </div>
                   <div id="hello${i}" class="collapse" aria-labelledby="houseDescription" data-parent="#accordion">
                       <div class="card-body">
                           <p class="faqA">${property_description}</p>
                       </div>
                   </div>
               </div>
                 </ul> 
               </div>
            </div>
           `;
     
             addElement("housingSection", "p", property_id, output);
             var img_html = getImg(property_photo_list);
             var img_output = `
             <div class="col-md-12" style="margin-bottom: 70px">
             <div class="row">
               ${img_html}
             </div>
             </div>
             `;
             addElement("housingSection", "div", property_id + "img", img_output);
           }   
         })
     
     }
     
     function getImg(property_photo_list){
         var img_div = [];
         var n =0;
         for(n = 0; n < 3; n++ ){
             var img_url = property_photo_list[n].place_photo.url;
             var img_output = ` 
             <div class="owl-carousel" >
                 <img src=${img_url} alt="Tuner Image">
             </div>   
             `;
             img_div.push(img_output)
         };
       return img_div;
     }
     
     function addElement(parentId, elementTag, elementId, html) {
         // Adds an element to the document
         var p = document.getElementById(parentId);
         var newElement = document.createElement(elementTag);
         newElement.setAttribute('id', elementId);
         newElement.innerHTML = html;
         p.appendChild(newElement);
     }