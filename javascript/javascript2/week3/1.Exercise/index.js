'use strict';

// Click Counter
// Create an index.html file with two buttons:

// When the button first is clicked it should first log out 0. The next time it
//  is clicked it should log out 1, etc.
// Clicking the second button should also count up and logout the same variable.

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');

let count = 0;

function countUp() {
  console.log(count);
  count++;
}

button1.addEventListener('click', countUp);

button2.addEventListener('click', countUp);
