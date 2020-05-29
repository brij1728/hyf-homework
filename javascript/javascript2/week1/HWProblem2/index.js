'use strict';

console.log('Javascript was loaded successfully');
// Spirit animal name generator
/*
Let's create a page where a user writes his name in an input element. The user then clicks a button. The user will now receive a spirit animal name, fx Benjamin - The fullmoon wolf.

Markup time!
Create an input element, a button and a tag to display the spirit animal into.

Setting up the events
When the user clicks the button, get the name the user wrote in the input field.

Spirit animal part
Now we can get the users name, next step is to add the spirit animal string and display that the users name, a dash and then the spirit animal. Fx Name: Peter: Peter - The crying butterfly For creating the spirit animal create an array with 10 string representing spirit animals. Now get a random item in the array that will represent the spirit animal.

New spirit animal
Now a user tells us that he wants a new spirit animal. No problem we say. Let's create functionality where a user can press a button and then get a new spirit animal.

No input
What if the user clicks the generate new spirit animal and there is no text in the input?

Event types - Optional and a little tricky
*/

const nameForm = document.querySelector('form#myForm');
const outputDiv = document.querySelector('div#output');

nameForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(nameForm);
  const userName = formData.get('userName').trim();
  const spiritAnimalName = getSpiritAnimalName(userName);
  console.log(spiritAnimalName);

  outputDiv.innerHTML = `<h3> ${spiritAnimalName}.</h3>`;
});

const spiritAnimals = [
  'Aggression of alligator',
  'The ant determination',
  'Celebration of bees',
  'The loyal dog',
  'Magic of crow',
  'Wisdom of owl',
  'Connection from hummingbird',
  'A message from grosshopper',
  'Eagle reconnects to spiritual path',
  'Courage of the hawk',
];

function getSpiritAnimalName(userName) {
  const spiritAnimal = `${spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)]}`;
  if (userName) {
    if (userName === 'new spirit animal') {
      return `${spiritAnimal}`;
    } else {
      return `${userName} - ${spiritAnimal}`;
    }
  } else if ((userName = ' ')) {
    return `Please enter your name`;
  }

  // return `${userName} - ${spiritAnimal}`;
}
