'use strict';

function getAstronautsOld() {
  fetch('http://api.open-notify.org/astros.json')
    .then((response) => response.json())
    .then((astronauts) => {
      console.log(astronauts.number);
    });
}

// getAstronautsOld();

// DONT EXPLAIN WHAT ASYNC OR AWAIT DOES YET! Explain on a higher level:
// You have to write async before a function for await to work. No details for now
// await waits until we have fetched the data from the api. Or said in another way await waits until fetch has resolved with the data from the api

// write async before a function for await to work. What does it mean that something is asynchronous?
async function getAstronauts() {
  // await waits until we have data from fetch before it runs the next line. No need for callbacks 🤯
  console.log('Before we fetch data');
  const astronautsResponse = await fetch('http://api.open-notify.org/astros.json');
  console.log('This is logged out after some time, even though the code looks synchronous! 🤯');
  const astronauts = await astronautsResponse.json();
  console.log('This is logged out after some time! 🤯');
  console.log(astronauts.number);
  return astronauts;
}

getAstronauts().then((data) => {
  console.log(data);
});

getAstronauts();
getAstronauts();
getAstronauts();

// async/await using arrow function
const myAsyncFunction = async () => {};

//
async function getPromise() {
  const data = await getPromiseOfRandomTimeout();
  console.log(data);
}
