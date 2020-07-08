'use strict';

// Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises.
// The getCurrentPosition function is probably going to throw an error, but that
// is fine. As long as you can use it as a promise.

function setTimeoutPromise(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms * 1000));
}

const ms = 3;

setTimeoutPromise(ms).then(() => {
  console.log(`Callled after ${ms} seconds`);
});

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      resolve([position.coords.latitude, position.coords.longitude]);
    });
  });
}

getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  });
