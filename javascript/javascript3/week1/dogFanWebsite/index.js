'use strict';
// Lets create a site for dog lovers using this API: https://dog.ceo/api/breeds/image/random

// Get the list of all breeds from https://dog.ceo/api/breeds/list/all
// Display a random image of a breed from the list https://dog.ceo/api/breed/[BREEDNAME]/images/random
// Display the name of the breed under the image

// Part 1: Get a random dog image and display it in the browser

// fetching JSON data
function fetchJsonData(url) {
  return fetch(url).then((response) => response.json());
}

function dogImage() {
  const url = 'https://dog.ceo/api/breeds/image/random';

  fetchJsonData(url).then((data) => {
    console.log('response', data);
    renderOutput(data);
  });
}

function renderOutput(data) {
  const outputDiv = document.querySelector('#output');

  outputDiv.innerHTML = `<h2>Dog image is </h2>
  <div> 
  <img src="${data.message}" alt="random dog image is here"/>
  </div>
  `;
}

// const button = document.querySelector('button');
// button.addEventListener('click', dogImage);

// Part 2: Get a new image every 2 sec.
window.setInterval(dogImage, 2000);

// Part 3: Get the list of all breeds from https://dog.ceo/api/breeds/list/all

function dogBreedsOutput() {
  const url = 'https://dog.ceo/api/breeds/list/all';

  fetchJsonData(url).then((data) => {
    console.log('response', data);
    renderDogBreedsName(data);
  });
}

function renderDogBreedsName(data) {
  const outputDiv = document.querySelector('#dogName');
  // console.log((data.message === null) ? Object.keys(data.message): df );
  console.log(Object.keys(data.message).join('\n'));

  outputDiv.innerHTML = `<h2>Dog name is </h2>
  <h3> ${Object.keys(data.message).join('<br> ')} `;
}
// const button = document.querySelector('button');
// button.addEventListener('click', dogBreedsOutPut);

// dog breed name
// function dogBreedsName(data) {
//   if (data.message === null) {
//     return `${Object.keys(data.message).join(' \n')} dog`;
//   } else {
//     return `${Object.values(data.message).map((dog) => dog)} ${Object.keys(data.message)}`;
//   }
// }
// dogBreedsOutPut();
