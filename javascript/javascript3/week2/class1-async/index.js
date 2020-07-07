'use strict';

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
// console.log(makeid(15));

// generating random function
function getRandomInteger(start, end) {
  return start + Math.floor(Math.random() * (end + 1 - start));
}

// for (let i = 0; i <= 10; ++i) {
//   console.log(getRandomInteger(15, 30));
// }

// function runFunctionAfterRandomInterval() {
//   const id = makeid(10);
//   const timeoutInSeconds = getRandomInteger(1, 5);
//   console.log(`ID ${id}: Scheduled to run after ${timeoutInSeconds} seconds`);
//   setTimeout(() => {
//     console.log(`ID ${id}: Hello World! ${timeoutInSeconds} seconds have passed since you ivoked me!`);
//   }, timeoutInSeconds * 1000);
//   console.log(`ID ${id}: See you after ${timeoutInSeconds} seconds`);
// }

// console.log(`Let's get started!`);
// runFunctionAfterRandomInterval();
// runFunctionAfterRandomInterval();
// runFunctionAfterRandomInterval();

// passing callback function in setTimeout
function runFunctionAfterRandomInterval(callBack) {
  const id = makeid(10);

  const timeoutInSeconds = getRandomInteger(1, 5);

  console.log(`ID ${id}: Scheduled to run after ${timeoutInSeconds} seconds`);

  setTimeout(() => callBack(`ID: ${id}`, ` ${timeoutInSeconds} seconds`), timeoutInSeconds * 1000);

  console.log(`ID ${id}: See you after ${timeoutInSeconds} seconds`);
}

const echoCallback = (...args) => {
  console.log(`Called with ${args}`);
};

console.log(`Let's get started!`);

runFunctionAfterRandomInterval(echoCallback);
runFunctionAfterRandomInterval(echoCallback);
runFunctionAfterRandomInterval(echoCallback);
runFunctionAfterRandomInterval(echoCallback);
runFunctionAfterRandomInterval(echoCallback);
runFunctionAfterRandomInterval(echoCallback);

// using for loop
for (let i = 0; i <= 100; ++i) {
  runFunctionAfterRandomInterval(echoCallback);
}
