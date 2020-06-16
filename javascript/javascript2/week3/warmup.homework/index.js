'use strict';

console.log('Java script is loaded');

// =========Part 1=============
// Log out the text "Called after 2.5 seconds" 2.5 seconds after the script is loaded.

window.setTimeout(() => {
  console.log('Called after 2.5 second');
}, 2500);

// =========Part 2============
// Create a function that takes 2 parameters: delay and stringToLog. Calling this
// function should log out the stringToLog after delay seconds. Call the function
// you have created with some different arguments.
function delayLogOut(delay, stringToLog) {
  const x = logOutDelay(delay);
  setTimeout(() => {
    console.log(stringToLog);
  }, x);
}
// logOutDelay Function

function logOutDelay(time) {
  if (!isNaN(time)) {
    return time * 1000;
  }
}

console.log(logOutDelay(5));
console.log(logOutDelay(7));

delayLogOut(5, 'This logged out after 5 seconds');
delayLogOut(7, 'This logged out after 7 seconds');
delayLogOut(9, 'This logged out after 9 seconds');
delayLogOut(12, 'This logged out after 12 seconds');

// ===========Part 3=============
// Create a button in html. When clicking this button, use the function you
// created in the previous task to log out the text: Called after 5 seconds
// 5 seconds after the button is clicked.
const button = document.querySelector('button');
button.addEventListener('click', () => {
  delayLogOut(5, 'Called after 5 seconds');
});

// ===========Part 4=============
/* 
Create two functions and assign them to two different variables. One function
logs out Earth, the other function logs out Saturn. Now create a new third 
function that has one parameter: planetLogFunction. The only thing the third 
function should do is call the provided parameter function. Try call the third 
function once with the Earth function and once with the Saturn function. 
 */

//  Earth function
const earthLogger = () => {
  console.log('Earth');
};

// Saturn function
const saturnLogger = () => {
  console.log('Saturn');
};

// planetLog function

function planetLogFunction(planet) {
  planet();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

// ===========Part 7==============
/* 
Create a function called runAfterDelay. It has two parameters: delay and callback. 
When called the function should wait delay seconds and then call the provided 
callback function. Try and call this function with different delays and different 
callback functions
*/
function runAfterDelay(delay, callback) {
  const x = delay * 1000;
  setTimeout(() => {
    callback();
    console.log(`Should be logged after ${delay} seconds`);
  }, x);
}

function callback() {
  console.log(`should be logged after 12 seconds`);
}
runAfterDelay(4, callback);
runAfterDelay(12, callback);
runAfterDelay(7, callback);
