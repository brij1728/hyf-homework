'use strict';

// use the current weather api: https://openweathermap.org/current
// Fetch weather data from a city
// Create a javascript file and an html file and import the javascript file in the html file.

// Fetch weather json data from the api using a city a user has specified: Add an input element and a button to the html. When the button is clicked, get the text from the input (which should be a city name) and fetch the relevant weather data from that city.

// Remember to show some loading text. What if a user writes nothing in the input?

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
function cityWeatherData() {
  const cityName = selectCity();

  const key = '044ebd39bd5fc8fd6027982d8916eb7f';

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key;

  fetchJsonData(url).then((data) => {
    console.log('response', data);
    displayWeatherData(data);
  });
}

// rendering weather data
function displayWeatherData(data) {
  document.querySelector('#cityName').innerHTML = `City: ${data.name}, ${data.sys.country}`;

  const celcius = Math.round(parseFloat(data.main.temp - 273));
  document.querySelector('#temperature').innerHTML = `Temperature: ${celcius} ℃`;

  const windSpeed = Math.round(parseFloat(data.wind.speed * 3.6));
  document.querySelector('#windSpeed').innerHTML = `Wind speed : ${windSpeed} km/h`;

  const unixRise = data.sys.sunrise;
  const sunriseTime = new Date(unixRise * 1000);
  document.querySelector('#sunrise').innerHTML = `Sunrise time: ${sunriseTime}`;

  const unixSet = data.sys.sunset;
  const sunsetTime = new Date(unixSet * 1000);
  document.querySelector('#sunset').innerHTML = `Sunset time: ${sunsetTime}`;

  const iconCode = data.weather[0].icon;
  const iconUrl = 'http://openweathermap.org/img/wn/' + iconCode + '.png';
  document.querySelector('#icon').innerHTML = `<img src= ${iconUrl}>`;
  console.log(sunriseTime);
}

const button = document.querySelector('button');
button.addEventListener('click', cityWeatherData);
