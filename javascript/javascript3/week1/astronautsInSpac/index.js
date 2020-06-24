'use strict';

// Use given api to fetch how many astronauts are currently in spaces.

// Add the following text to the DOM, using the data about astronauts:

function fetchJsonData(url) {
  return fetch(url).then((response) => response.json());
}

function astronautNames() {
  const url = 'http://api.open-notify.org/astros.json';

  fetchJsonData(url).then((data) => {
    console.log('response', data);
    renderOutput(data);
  });
}

function renderOutput(data) {
  const outputDiv = document.querySelector('#output');
  console.log(`${data.people}`);
  outputDiv.innerHTML = `
        <h2>There are ${data.number} astronauts in space, they are:</h2>
        
        <h4>${data.people.map((ast) => `${ast.name}<br>`).join(' ')}</h4>`;
}

const button = document.querySelector('button');
button.addEventListener('click', astronautNames);
