'use strict';
/*  
Check if we have double clicked on the page. A double click is defined by two 
clicks within 0.5 seconds. If a double click has been detected, log out the 
text: "double click!"
*/
let count = 0;
window.addEventListener('click', handleSingleDoubleClick, false);

function handleSingleDoubleClick() {
  if (!count) {
    setTimeout(timerFunction, 500);
  } // 500 ms click delay
  count += 1;
}
function timerFunction() {
  if (count > 1) {
    console.log('you double clicked!');
  } else {
    console.log('you single clicked');
  }
  count = 0;
}
