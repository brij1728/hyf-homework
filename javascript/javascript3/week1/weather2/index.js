'use strict';

// ==================23===================

function fetchJsonData(url) {
  return fetch(url).then((response) => response.json());
}

// selecting city through user input
function selectCity() {
  let cityName = document.querySelector('#city');
  if (cityName !== undefined) {
    return cityName.value.toLocaleLowerCase();
  }
}

// city weather data function
function showWeatherData() {
  const cityName = selectCity();

  const key = '044ebd39bd5fc8fd6027982d8916eb7f';

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key;

  fetchJsonData(url).then((data) => {
    console.log('response', data);
    displayWeatherData(data);
  });
}

// displaying weather data weather data
function displayWeatherData(data) {
  const iconUrl = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';
  document.querySelector('.weather-icon').innerHTML = `<img src= ${iconUrl}>`;

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
}

const button = document.querySelector('button');
button.addEventListener('click', showWeatherData);

// // check if browser support geolocation
// if (!navigator.geolocation) {
//   notificationElement.style.display = 'block';
//   notificationElement.innerHTML = `<p>Browser doesn't support Geolocation</p>`;
// } else {
//   navigator.geolocation.getCurrentPosition(setPosition, showError);
// }

// // show error when there is any issue with geolocation
// function showError(error) {
//   const notificationElement = document.querySelector('.notification');
//   notificationElement.style.display = 'block';
//   notificationElement.innerHTML = `<p>${error.message}</p>`;
// }

// function showMap() {
//   const latitude = data.coords.latitude;
//   const longitude = data.coords.longitude;
//   const outputMap = document.querySelector('.map');
//   outputMap.innerHTML = '';
//   const map = new ol.Map({
//     target: outputMap,
//     layers: [
//       new ol.layer.Tile({
//         source: new ol.source.OSM(),
//       }),
//     ],
//     view: new ol.View({
//       center: ol.proj.fromLonLat([longitude, latitude]),
//       zoom: 14,
//     }),
//   });
// }
