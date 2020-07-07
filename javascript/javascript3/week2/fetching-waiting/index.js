'use strict';

// Do the 3 steps below using promises and .then.
// Do the 3 steps below using async/await
// The 3 steps:

// Wait 3 seconds
// After 3 seconds fetch some data from any api you like
// Log out the data from the api
// Which way do you prefer, the promise way or the async/await way?

function covidDetails() {
  console.log(`Wait for 3 seconds`);
  setTimeout(() => {
    const promise = fetch('https://api.covid19api.com/summary');
    console.log(promise);
    const response = promise.then((response) => response.json());
    console.log(response);
  }, 3000);
}
covidDetails();

// timeout function
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getCovidData() {
  console.log(`Wait for 3 seconds`);

  await timeout(3000);
  const promise = await fetch('https://api.covid19api.com/summary');
  console.log(promise);
  const data = await promise.json();
  console.log(data);
  console.log(data.Global);
}

getCovidData();
