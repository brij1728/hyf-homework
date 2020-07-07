'use strict';

// ================ lesson plan example==============

// // This example could definitely be more real world! Any ideas, make a pull request!
// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     const tea = {
//       color: 'green',
//       taste: 'Bitter',
//     };

//     resolve(tea);
//   }, 3000);
// });

// const isThereMoreTea = false;

// // This example could definitely be more real world! Any ideas, make a pull request!
// function makeTea() {
//   console.log('Start making tea');

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const tea = {
//         color: 'green',
//         taste: 'Bitter',
//       };

//       if (isThereMoreTea) {
//         resolve(tea);
//       } else {
//         reject('We dont have more TEA!!');
//       }
//     }, 3000);
//   });
// }

// console.log(makeTea());

// makeTea()
//   .then((returnedTeaObject) => {
//     console.log(returnedTeaObject);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// =============== Exercise problem ==============

// Create a function that returns a promise, that i can use like this:

// getLoggedInUsers should wait 5 seconds before it resolves with the users!
// Sometimes it should resolve and sometimes it should reject.
// Look into Math.random

// generating random name

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const userNames = ['benna', 'megdy', 'carolina', 'james', 'stevie', 'philip'];

function getLoggedInUsers() {
  console.log(`Logged in users! 😇😠`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getRandomNumber(100) > 50) {
        resolve(userNames);
      } else {
        reject(`No has logged in`);
      }
    }, 5000);
  });
}

// console.log(getLoggedInUsers);

getLoggedInUsers()
  .then((users) => {
    console.log(users); // ['benna', 'magdy', 'carolina']
  })
  .catch((error) => {
    console.log(error);
  });

// promise consumption of getLoggedInUsers using async/await
async function getUsers() {
  try {
    const userNamesResponse = await getLoggedInUsers();
    console.log(userNamesResponse);
    return userNamesResponse;
  } catch (error) {
    throw 'No users are found';
  }
}

// console.log(getUsers);
