// Light mode dark mode
/*
Clicking a button should toggle the background color of the body and the 
text color in the page. If the background is white and the text is black, 
then clicking the button will make the background dark and the text white 
and vice versa.
*/
const body = document.querySelector('body');
const myButton = document.querySelector('button');

myButton.addEventListener('click', () => {
  toggleBackgroundColor();
});

function toggleBackgroundColor() {
  let background = body.style.backgroundColor || 'white';

  let textColor;

  if (background === 'white') {
    background = 'black';
    textColor = 'white';
  } else {
    background = 'white';
    textColor = 'black';
  }
  body.style.backgroundColor = background;
  body.style.color = textColor;
}
