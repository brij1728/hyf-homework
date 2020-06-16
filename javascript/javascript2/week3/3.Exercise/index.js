'use strict';

// Page onload
/* 
First create a callback function as a variable that logs this out: 
"DOM fully loaded and parsed" This callback function should be called 
when the DOM is fully loaded. To find what this function is called go 
to google! What should we search for???
 */

const callback = () => {
  console.log('DOM fully loaded and parsed');
};
callback();

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});
