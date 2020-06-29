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
function weatherData() {
  const cityName = selectCity();

  const key = '044ebd39bd5fc8fd6027982d8916eb7f';

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key;

  toggleLoader(true);
  toggleOutputDisplay(false);

  fetchJsonData(url).then((data) => {
    toggleLoader(false);
    console.log('response', data);
    displayWeatherData(data);
  });
}

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

  toggleOutputDisplay(true);
}

const button = document.querySelector('button');
button.addEventListener('click', weatherData);
