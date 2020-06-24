'use strict';

// using  coronavirus COVID19 API

function fetchJsonData(url) {
  return fetch(url).then((response) => response.json());
}

function covid19Data() {
  const url = 'https://api.covid19api.com/summary';

  fetchJsonData(url).then((data) => {
    console.log('response', data);
    renderCovid19(data);
  });
}

function renderCovid19(data) {
  const outputDiv = document.querySelector('#output');
  console.log(data.Global.NewConfirmed);
  outputDiv.innerHTML = `<div class="global">
  <h3> Covid 19 global details -</h3>
  <p> 
  New confirmed case: ${data.Global.NewConfirmed}<br>
  Total confirmed case: ${data.Global.TotalConfirmed}<br>
  New deaths: ${data.Global.NewDeaths}<br>
  Total deaths are: ${data.Global.TotalDeaths}<br>
  New recovered: ${data.Global.NewRecovered}<br>
  Total recovered: ${data.Global.TotalRecovered}  
  </p>
  
  <h3> Country wise Covid 19 details</h3>
  <p>
  ${data.Countries.map((value) => `${value.Country}<br>`).join(' ')}
  </p>
  </div>`;
}

const button = document.querySelector('button');
button.addEventListener('click', covid19Data);
