'use strict';

// Create a button with the text called "Log location". When this button is
// clicked the location (latitude, longitude) of the user should be logged out
// using browser api
function geoFindMe() {
  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `This is the Latitude: ${latitude} °, \n This is the Longitude: ${longitude} °`;
    showMap(latitude, longitude);
  }

  function showMap(latitude, longitude) {
    const outputMap = document.querySelector('.map');
    outputMap.innerHTML = '';
    const map = new ol.Map({
      target: outputMap,
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM(),
        }),
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([longitude, latitude]),
        zoom: 14,
      }),
    });
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector('#find-me').addEventListener('click', geoFindMe);
