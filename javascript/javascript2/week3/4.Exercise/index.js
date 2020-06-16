'use strict';

// Mouse position
// Create a handler, that prints the x,y coordinate of the mouse event.

// Mouse position online tool
/* 
Say we want to create an online tool where businesses can see where
their users' mouse is most of the time. Businesses can now figure 
out if they have designed their website correctly.

Lets create some js that will get the average x and y position of 
a user after 30 seconds.
 */
// const coordinate = document.querySelector('#test');
// document.addEventListener('click', printMousePosition);
const box = document.querySelector('.box');
const coordinatesX = document.querySelector('x');
const coordinatesY = document.querySelector('y');

function pageCoordinates(event) {
  const coordinatesX = document.querySelector('x');
  const coordinatesY = document.querySelector('y');
  coordinatesX.innerText = event.pageX;
  coordinatesY.innerText = event.pageY;
}

box.addEventListener('mousemove', pageCoordinates, false);
box.addEventListener('mouseenter', pageCoordinates, false);
box.addEventListener('mouseleave', pageCoordinates, false);
