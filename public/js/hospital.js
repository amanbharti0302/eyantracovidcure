var map;
function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 21, lng: 79 },
      zoom: 5
   });

   var card = document.getElementById('pac-card');
   var input = document.getElementById('pac-input');
   var types = document.getElementById('type-selector');

   var autocomplete = new google.maps.places.Autocomplete(input);

   // Bind the map's bounds (viewport) property to the autocomplete object,
   // so that the autocomplete requests use the current map bounds for the
   // bounds option in the request.
   autocomplete.bindTo('bounds', map);

   // Set the data fields to return when the user selects a place.
   autocomplete.setFields(
      ['address_components', 'geometry', 'icon', 'name']);

   var infowindow = new google.maps.InfoWindow();
   var infowindowContent = document.getElementById('infowindow-content');
   infowindow.setContent(infowindowContent);
   var marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
   });

   autocomplete.addListener('place_changed', function () {
      document.getElementById('places').innerHTML = '';
      marker.setVisible(false);
      var place = autocomplete.getPlace();
      if (!place.geometry) {
         // User entered the name of a Place that was not suggested and
         // pressed the Enter key, or the Place Details request failed.
         window.alert("No details available for input: '" + place.name + "'");
         return;
      }

      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
         map.fitBounds(place.geometry.viewport);
      } else {
         map.setCenter(place.geometry.location);
         map.setZoom(17);  // Why 17? Because it looks good.
      }
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);

      var address = '';
      if (place.address_components) {
         address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
         ].join(' ');
      }

      infowindowContent.children['place-icon'].src = place.icon;
      infowindowContent.children['place-name'].textContent = place.name;
      infowindowContent.children['place-address'].textContent = address;

      nearbyHospital(map, place.geometry.location.lat(), place.geometry.location.lng());
      $('.hospital_item').removeClass("hide");
   });

   // setupClickListener('changetype-all', []);
   // lat:place.geometry.location.lat();
}

function nearbyHospital(map, latitute, longitute) {
   var location = { lat: latitute, lng: longitute };
   // Create the places service.
   var service = new google.maps.places.PlacesService(map);
   var getNextPage = null;
   var moreButton = document.getElementById('more');
   moreButton.onclick = function () {
      moreButton.disabled = true;
      if (getNextPage) getNextPage();
   };

   // Perform a nearby search.
   service.nearbySearch(
      { location: location, radius: 500, type: ['hospital'] },
      function (results, status, pagination) {
         if (status !== 'OK') return;

         createMarkers(results);
         moreButton.disabled = !pagination.hasNextPage;
         getNextPage = pagination.hasNextPage && function () {
            pagination.nextPage();
         };
      });
}

function createMarkers(places) {
   var bounds = new google.maps.LatLngBounds();
   var placesList = document.getElementById('places');

   for (var i = 0, place; place = places[i]; i++) {
      var image = {
         url: place.icon,
         size: new google.maps.Size(71, 71),
         origin: new google.maps.Point(0, 0),
         anchor: new google.maps.Point(17, 34),
         scaledSize: new google.maps.Size(25, 25)
      };

      var marker = new google.maps.Marker({
         map: map,
         icon: image,
         title: place.name,
         position: place.geometry.location
      });

      var li = document.createElement('li');
      li.textContent = place.name;
      placesList.appendChild(li);

      bounds.extend(place.geometry.location);
   }
   map.fitBounds(bounds);
}

initMap();