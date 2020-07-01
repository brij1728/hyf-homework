'use strict';

const API_KEY = 'WF5lhwI1ABsg3JGBCjmVSjxJ8kWnSWbX';
/* 
Create a site where a user can search for any word. When searching a word 
the application will find a gif using the searched word using the giphy 
api: https://developers.giphy.com/docs/ Here is how it is going to work: The 
user can write some text indicating the gif he is looking for, click a button 
and then a gif will be found (using the searched word) and the gif will be 
displayed to the user.

Add an input element, where the user can specify how many gif results the user wants.
*/

// fetching JSON data
function fetchJsonData(url) {
  return fetch(url).then((response) => response.json());
}

// gif search data
function getFormDataAsObject(formElement) {
  const formData = new FormData(formElement);

  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  return data;
}
function renderGifsArray(gifsArray) {
  const outputDiv = document.querySelector('#output');

  if (!gifsArray.length) {
    outputDiv.innerHTML = '<h1 class="danger-text">No GIFs founds</h1>';
    return;
  }

  outputDiv.innerHTML = '';

  for (const gif of gifsArray) {
    // console.log(gif);
    const imgElement = document.createElement('img');
    imgElement.src = gif.images.fixed_height.url;
    // console.log(gif.images.fixed_height.url);

    outputDiv.appendChild(imgElement);
  }
}
// renderGifsArray(trendingGifsData.data);

function fetchAndShowTrendingGifs(offset = 0, limit = 5) {
  const url = `https://api.giphy.com/v1/videos/trending?api_key=${API_KEY}&offset=${offset}&limit=${limit}`;

  fetchJsonData(url).then((jsonData) => {
    console.log('Data loaded', jsonData);
    renderGifsArray(jsonData.data);
  });
}
// fetchAndShowTrendingGifs();

function searchAndShowGifs(query, count) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&offset=0&limit=${count}&q=${query}`;

  fetchJsonData(url).then((jsonData) => {
    console.log('Data loaded', jsonData);
    renderGifsArray(jsonData.data);
  });
}

// showing gifs using search form
const searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = getFormDataAsObject(searchForm);
  console.log(formData);

  const searchText = formData.searchText.trim();
  const count = parseInt(formData.count);

  if (!searchText) {
    alert('Please enter valid search text, e.g. "smile"');
    return;
  }

  if (isNaN(count) || count < 1) {
    alert(`Count of gifs should be a positive integer, e.g. "10"`);
    return;
  }

  searchAndShowGifs(searchText, count);
});
