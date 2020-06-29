'use strict';

// use the current weather api: https://openweathermap.org/current
// Fetch weather data from a city
// Create a javascript file and an html file and import the javascript file in the html file.

// Fetch weather json data from the api using a city a user has specified: Add an input element and a button to the html. When the button is clicked, get the text from the input (which should be a city name) and fetch the relevant weather data from that city.

// Remember to show some loading text. What if a user writes nothing in the input?

function fetchJsonData(url) {
  return fetch(url).then((response) => response.json());
}

// SELECT ELEMENTS
const iconElement = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temperature-value p');
const descElement = document.querySelector('.temperature-description p');
const locationElement = document.querySelector('.location p');
const notificationElement = document.querySelector('.notification');

// App data
const weather = {};

weather.temperature = {
  unit: 'celsius',
};

// app constant and key
const KELVIN = 273;
const key = '044ebd39bd5fc8fd6027982d8916eb7f';

// // check if browser support geolocation
if (!navigator.geolocation) {
  notificationElement.style.display = 'block';
  notificationElement.innerHTML = `<p>Browser doesn't support Geolocation</p>`;
} else {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
}

// set user position
function setPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  getWeather(latitude, longitude);
}

// show error when there is any issue with geolocation
function showError(error) {
  const notificationElement = document.querySelector('.notification');
  notificationElement.style.display = 'block';
  notificationElement.innerHTML = `<p>${error.message}</p>`;
}

function showMap() {
  const latitude = data.coords.latitude;
  const longitude = data.coords.longitude;
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

function getWeather(latitude, longitude) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}$lon=${longitude}&appid=${key}`;

  fetchJsonData(url).then((data) => {
    weather.temperature.value = Math.floor(data.main.tmp - KELVIN);
    weather.description = data.weather[0].description;
    weather.iconId = data.weather[0].icon;
    weather.city = data.name;
    weather.country = data.sys.country;
  });
}

// selecting city through user input
// function selectCity() {
//   let cityName = document.querySelector('#city');
//   if (cityName !== undefined) {
//     return cityName.value.toLocaleLowerCase();
//   }
// }

// city weather data function
// function cityWeatherData() {
//   const cityName = selectCity();

//   const key = '044ebd39bd5fc8fd6027982d8916eb7f';

//   const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key;

//   fetchJsonData(url).then((data) => {
//     console.log('response', data);
//     displayWeatherData(data);
//   });
// }
