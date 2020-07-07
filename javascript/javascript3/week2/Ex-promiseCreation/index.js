'use strict';

// Start as simple as possible, no reject, just resolve!
// const oneSecondTimeoutPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve();
//   }, 1000);
// });

// passing data in the resolve
const oneSecondTimeoutPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('1 second has passed');
  }, 1000);
});

// oneSecondTimeoutPromise.then((timeOutData) => {
//   console.log(timeOutData);
// });

// // pizza promise example
const orderPizzaPromise = new Promise((resolve, reject) => {
  const pizzaMakingTime = 10000;
  const didPizzaMakingSucceed = true;
  const pizza = 'Macaroni pizza';

  setTimeout(() => {
    if (didPizzaMakingSucceed) {
      resolve(pizza);
    } else {
      reject('The pizza was a mess');
    }
  }, pizzaMakingTime);
});

// console.log(orderPizzaPromise);

// orderPizzaPromise
//   .then((pizza) => {
//     console.log(`Let's eat the ${pizza}`);
//   })
//   .catch((error) => console.log(`Let's eat the nothing`));

// returning promise using function
function makePizza() {
  console.log(`Start making pizza`);

  return new Promise((resolve, reject) => {
    const pizzaMakingTime = 10000;
    const didPizzaMakingSucceed = true;
    const pizza = 'Macaroni pizza';

    setTimeout(() => {
      if (didPizzaMakingSucceed) {
        resolve(pizza);
      } else {
        reject('The pizza was a mess');
      }
    }, pizzaMakingTime);
  });
}

console.log(makePizza());

makePizza()
  .then((pizza) => {
    console.log(`let's eat the ${pizza}`);
  })
  .catch((error) => console.log(error));

// Create a promise that resolves after 4 seconds. Use this promise to log out the text 'hello' after 4 seconds.
// Now make the promise fail by rejecting it with an error message instead of resolving it, and log the error message to the console.

const textPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`hello`);
  }, 4000);
});

textPromise.then((text) => {
  console.log(text);
});

const textFailPromise = new Promise((reject) => {
  setTimeout(() => {
    reject(`This text can't resolve`);
  }, 4000);
});

textFailPromise.then((error) => console.log(error));
