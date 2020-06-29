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

// function dogImage() {
//   const url = 'https://dog.ceo/api/breeds/image/random';

//   fetchJsonData(url).then((data) => {
//     console.log('response', data);
//     renderOutput(data);
//   });
// }

// dog breed dropdown
function renderDogBreed() {
  const url = 'https://dog.ceo/api/breeds/list/all';

  fetchJsonData(url).then((data) => {
    console.log('response', data);

    const breeds = Object.keys(data.message);
    for (const name of breeds) {
      const select = document.querySelector('.dog-breed');
      select.add(new Option(name));
      // let element = document.createElement('option');
      // select.appendChild(element);
      // element.innerHTML = name;
      // element.value = name;
    }

    // const breed = breeds[Math.floor(Math.random() * breeds.length)];

    console.log(breeds);
  });
}

renderDogBreed();

// showing dog image
function dogImage() {
  const breedName = document.querySelector('.dog-breed').value;
  console.log(breedName);
  // const breedName = select.options[select.selectedIndex].text;
  const url = 'https://dog.ceo/api/breed/' + breedName + '/images/random';

  fetchJsonData(url).then((data) => {
    console.log('response', data);

    const output = document.querySelector('#output');
    output.innerHTML = `<div>
    <img src="${data.message}" alt="random dog image is here"/>
    <p>${breedName.toUpperCase()}</p>
    </div>`;
  });
}

// DOM
// const checkBox = document.querySelector('#interval-image');
// if (checkBox.checked) {
//   changeImage();
// } else {
//   dogImage();
// }
const button = document.querySelector('button');
button.addEventListener('click', () => {
  // const checkBox1 = document.querySelector('#random-dog-image');
  // console.log(checkBox1.checked);
  const checkBox = document.querySelector('#interval-image');
  // console.log(checkBox2.checked);

  if (checkBox.checked) {
    window.setInterval(dogImage, 2000);
  } else {
    dogImage();
    setTimeout(clearImage(), 2000);
  }
});
// button.addEventListener('click', clearImage);
let intervalId;
function changeImage() {
  intervalId = window.setInterval(dogImage, 2000);
}
function clearImage() {
  clearInterval(intervalId);
}
