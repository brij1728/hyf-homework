// Delay clicker
// Create a button in html with the text "Log in 3 seconds"

// When the button is clicked it should wait 3 seconds and then log the text
//  "This text was delayed by 3 seconds".
const button = document.querySelector('button');
button.addEventListener('click', () => {
  setTimeout(() => {
    console.log(`\"This text was delayed by 3 seconds\"`);
  }, 3000);
});

let count = 0;

button.addEventListener('click', () => {
  count++;
  let localCount = count;
  console.log(`Count was ${count}`);
  setTimeout(() => {
    console.log('Button click was delayed for 3 seconds', { localCount, count });
  }, 3000);
});
