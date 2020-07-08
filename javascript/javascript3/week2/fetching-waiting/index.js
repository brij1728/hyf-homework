'use strict';

// Do the 3 steps below using promises and .then.
// Do the 3 steps below using async/await
// The 3 steps:

// Wait 3 seconds
// After 3 seconds fetch some data from any api you like
// Log out the data from the api
// Which way do you prefer, the promise way or the async/await way?

function covidDetails() {
  return new Promise((resolve, reject) => {
    console.log(`Wait for 3 seconds`);
    setTimeout(async () => {
      const response = await fetch('https://api.covid19api.com/summary');
      resolve(await response.json());
      // console.log(promise);
      // const response = promise.then((response) => response.json());
      // console.log(response);
    }, 3000);
  });
}
covidDetails().then((data) => console.log(data));

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
  // console.log(data);
  // console.log(data.Global);
  return data;
}

getCovidData().then((data) => console.log(data.Global));
