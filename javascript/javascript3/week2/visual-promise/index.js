'use strict';

// In move-element.js folder, there is a function available to you called moveElement. calling that function moves
// an element to a new position and returns a promise. moveElement takes a DOM element
// and an object specifying the x and y of the new position. It then returns a promise
// that resolves after the DOM element has been moved.

// Your task is to create two functions.

// translateOneByOne - Should translate the circles one at a time from their random
// start position to their target see the target positions below. Log something out
// after each element has been moved
// translateAllAtOnce - Should translate all the circles at the same time from their
// random start position to their target. Log out something after all elements have
// been moved
// Test that the functions works as intended before submitting homework. You decide
// if you want to do it the promise way or the async/await way

// This code will move the li to the position 100, 100. Calling moveElement will return a promise that resolves after the li element has been moved.
// moveElement(document.querySelector('li'), { x: 100, y: 100 }).then(() => {
//   console.log('Element has been moved');
// });

const redBox = document.querySelector('.marks').children[0];
const blueBox = document.querySelector('.marks').children[1];
const greenBox = document.querySelector('.marks').children[2];

// =======using .then=====
function translateOneByOne() {
  moveElement(redBox, { x: 20, y: 300 })
    .then(() => {
      console.log('Element has been moved to redBox');
      return moveElement(blueBox, { x: 400, y: 300 });
    })
    .then(() => {
      console.log('Element has been moved to blueBox');
      return moveElement(greenBox, { x: 400, y: 20 });
    })
    .then(() => {
      console.log('Element has been moved to greenBox');
    });
}
translateOneByOne();

// =======using async/await=============

async function translateOneByOne() {
  await moveElement(redBox, { x: 20, y: 300 }).then(() => {
    console.log('Element has been moved to redBox');
  });

  await moveElement(blueBox, { x: 400, y: 300 }).then(() => {
    console.log('Element has been moved to blueBox');
  });

  await moveElement(greenBox, { x: 400, y: 20 }).then(() => {
    console.log('Element has been moved to greenBox');
  });
}

// translateOneByOne();

// ===============translateAllAtOnce=========

function translateAllAtOnce() {
  Promise.all([
    moveElement(redBox, { x: 20, y: 300 }),
    moveElement(blueBox, { x: 400, y: 300 }),
    moveElement(greenBox, { x: 400, y: 20 }),
  ]).then(() => {
    console.log('All elements have been moved');
  });
}

// translateAllAtOnce();
