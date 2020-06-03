// Simple EventListener
// When clicking a button, change the text on the button to say "Button clicked"

const myButton = document.createElement('button');
myButton.innerText = 'Hello';
const body = document.querySelector('body');
body.appendChild(myButton);

// const myButton = document.querySelector('button');

myButton.addEventListener('click', () => {
  myButton.innerText = 'Button clicked';
  myButton.style.color = 'pink';
});
