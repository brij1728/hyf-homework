'use strict';

function fetchJsonData(url) {
  return fetch(url).then((response) => response.json());
}

function refreshOutput() {
  const url = 'https://yesno.wtf/api/';

  fetchJsonData(url)
    .then((data) => {
      console.log('response', data);
      renderOutput(data);
    })
    .catch((error) => {
      console.log('Error occured', error);
      showError();
    });
}

function renderOutput(data) {
  const outputDiv = document.querySelector('#output');

  outputDiv.innerHTML = `
        <h1>${data.answer.toLocaleUpperCase()}</h1>
        <div><img src="${data.image}"/></div>
    `;
}

function showError() {
  const outputDiv = document.querySelector('#output');
  outputDiv.innerHTML = `<h2>Some error occured while fetching data</h2>`;
}

const button = document.querySelector('button');
button.addEventListener('click', refreshOutput);
