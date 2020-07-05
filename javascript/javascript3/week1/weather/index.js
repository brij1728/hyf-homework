'use strict';

// ==================23===================
const API_KEY = '044ebd39bd5fc8fd6027982d8916eb7f';

function fetchJsonData(url) {
  return fetch(url).then((response) => response.json());
}

// selecting city through user input

function getFormDataAsObject(formElement) {
  const formData = new FormData(formElement);

  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  return data;
}
const searchCity = document.querySelector('#city');
console.log(searchCity);

searchCity.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = getFormDataAsObject(searchCity);
  console.log(formData);

  const cityName = formData.searchCity.toLocaleLowerCase().trim();
  console.log(cityName);

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + API_KEY;

  toggleLoader(true);
  toggleOutputDisplay(false);

  fetchJsonData(url)
    .then((data) => {
      toggleLoader(false);
      console.log('response', data);

      displayWeatherData(data);
      // showCityMap(data);
      const latitude = data.coord.lat;
      console.log(latitude);
      const longitude = data.coord.lon;
      console.log(longitude);
      showMap(latitude, longitude);
    })

    .catch((data) => {
      // console.error('Error:', error);
      if (cityName !== data.name.toLocaleLowerCase().trim()) {
        alert(`Please enter valid city name`);
      }
    });
});

function toggleLoader(isVisible) {
  const containerDiv = document.querySelector('div.loader');
  containerDiv.style.display = isVisible ? 'block' : 'none';
}

function toggleOutputDisplay(isVisible) {
  const containerDiv = document.querySelector('div.container');
  containerDiv.style.display = isVisible ? 'block' : 'none';
}

// displaying weather data weather data
function displayWeatherData(data) {
  const iconUrl = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';
  document.querySelector('.weather-icon').innerHTML = `<img src= "${iconUrl}">`;

  const celcius = Math.round(parseFloat(data.main.temp - 273));
  document.querySelector('.temperature-value p').innerHTML = `${celcius}°<span>C</span>`;

  document.querySelector('.temperature-description p').innerHTML = data.weather[0].description;

  const windSpeed = Math.round(parseFloat(data.wind.speed * 3.6));
  document.querySelector('.wind-speed p').innerHTML = `Wind: ${windSpeed} km/h`;

  const sunriseTime = new Date(data.sys.sunrise * 1000);
  document.querySelector('.sunrise p').innerHTML = `Sunrise: ${sunriseTime}`;

  const sunsetTime = new Date(data.sys.sunset * 1000);
  document.querySelector('.sunset p').innerHTML = `Sunset: ${sunsetTime}`;

  document.querySelector('.location p').innerHTML = `City: ${data.name}, ${data.sys.country}`;
  console.log(sunriseTime);

  toggleOutputDisplay(true);
}

function showError(data) {
  if (cityName !== data.name.toLocaleLowerCase()) {
    alert(`Please enter valid city name`);
  }
}

// position location
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
    // mapLink.textContent = mapLink.textContent = `This is the Latitude: ${latitude} °, \n This is the Longitude: ${longitude} °`;

    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    fetchJsonData(url).then((data) => {
      console.log('response', data);
      displayWeatherData(data);
    });
    showMap(latitude, longitude);
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
      zoom: 10,
    }),
  });
}

document.querySelector('#find-me').addEventListener('click', geoFindMe);
