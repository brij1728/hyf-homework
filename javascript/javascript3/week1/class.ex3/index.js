'use strict';

function fetchJsonData(url) {
  return fetch(url).then((response) => response.json());
}

// fetching spaceX launches
function fetchAndShowAllLaunches() {
  const url = 'https://api.spacexdata.com/v3/launches';

  fetchJsonData(url).then((allLaunches) => {
    console.log('response', allLaunches);

    const filteredLaunches = filterLaunches(allLaunches, {
      // launch_success: true,
    });

    renderOutput(filteredLaunches);
  });
  // .catch((error) => {
  //   console.log('Error occured', error);
  //   showError();
  // });
}

// rendering output
function renderOutput(launches) {
  const outputDiv = document.querySelector('#output');

  outputDiv.innerHTML = ``;

  for (const launch of launches) {
    const launchDiv = document.createElement('div');
    outputDiv.appendChild(launchDiv);
    launchDiv.innerHTML = `
        <h1>Mission name: <a href="${launch.links.wikipedia}" target="_blank">${launch.mission_name}</a></h1>
        <ul>
        <li>Launch date/time: ${new Date(launch.launch_date_utc)}</li>
        <li>Was successful launch: ${launch.launch_success}</li>
        <li>Rocket Name: ${launch.rocket.rocket_name}</li>
        <li>Rocket Type: ${launch.rocket.rocket_type}</li>
        </ul>
    `;

    if (launch.links.mission_patch_small) {
      launchDiv.innerHTML += `<div><img src="${launch.links.mission_patch_small}"/></div>`;
    }
  }
}

// filtering launches
function filterLaunches(launches, filterObject) {
  return launches.filter((launch) => {
    if (filterObject.launch_success !== undefined) {
      return launch.launch_success === filterObject.launch_success;
    }

    return true;
  });
}

function showError() {
  const outputDiv = document.querySelector('#output');
  outputDiv.innerHTML = `<h2>Some error occured while fetching data</h2>`;
}

// DOM code
const button = document.querySelector('button');
button.addEventListener('click', fetchAndShowAllLaunches);
