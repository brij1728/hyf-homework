'use strict';

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
function gifSearch() {
  const searchedWord = document.querySelector('#search-word').value;
  const numberOfGif = document.querySelector('#number').value;

  const url = `http://api.giphy.com/v1/gifs/search?q=${searchedWord}&api_key=WF5lhwI1ABsg3JGBCjmVSjxJ8kWnSWbX&limit=${numberOfGif}`;

  fetchJsonData(url).then((giphyData) => {
    console.log(giphyData.data);
    renderGif(giphyData.data);
  });
}

// rendering gif
function renderGif(items) {
  const searchResult = document.querySelector('#searchResult');
  searchResult.innerHTML = '';
  items.forEach((element) => {
    // const searchResult = document.querySelector('#searchResult');
    // searchResult.innerHTML = '';
    const searchItem = document.createElement('section');
    searchResult.appendChild(searchItem);
    searchItem.innerHTML = `<img src="${element.images.original.url}">`;

    // searchResult.appendChild(searchItem);
  });
}

// limiting gif view using number as a limit
function enterNumber(event) {
  const number = document.querySelector('#number');

  if (number.value === '' || number.value === undefined || number.value === null) {
    document.body.innerText = 'Add number of Gifs to display';
  } else if (event.key === 'Enter') {
    gifSearch();
  }
}

// DOM code
const button = document.querySelector('#search-button');
button.addEventListener('click', gifSearch);

const number = document.querySelector('#number');
number.addEventListener('keyup', enterNumber);
