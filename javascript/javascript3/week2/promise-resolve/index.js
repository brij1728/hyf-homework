'use strict';

// Promise that resolves after set time
// Create a function that has one parameter: resolveAfter. Calling this function
// will return a promise that resolves after the resolveAfter seconds has passed.

// generating unique id
function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const id = makeid(7);

//
function resolvesSetTime(resolveAfter) {
  return new Promise((resolve, reject) => {
    console.log(`ID ${id}: Promise will be resolved after ${resolveAfter} seconds`);
    setTimeout(() => {
      resolve(resolveAfter);
    }, resolveAfter * 1000);
  });

  // textPromise.then((text) => {
  //   console.log(`ID ${id}: logged out after ${text} seconds`);
  // });
}

resolvesSetTime(9).then((time) => {
  console.log(`ID ${id}: logged out after ${time} seconds`);
});
// resolvesSetTime(5);
// resolvesSetTime(15);
// resolvesSetTime(3);
// resolvesSetTime(7);

// When you have written the promise, use it with async/await
async function resolvePromise() {
  try {
    const responseTime = await resolvesSetTime(3);
    console.log(`ID ${id}: logged out after ${responseTime} seconds`);
  } catch (error) {
    throw error;
  }
}

resolvePromise();
