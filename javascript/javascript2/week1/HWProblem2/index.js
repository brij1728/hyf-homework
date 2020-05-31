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
  userName = userName.trim();
  if (!userName) {
    return `Please type your name`;
  }

  const spiritAnimal = `${spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)]}`;

  return `Your spirit animal name is: "${userName} - ${spiritAnimal}"`;
}

const nameForm = document.querySelector('form#myForm');
const outputDiv = document.querySelector('div#output');
const nameInput = document.querySelector('input[name="userName"]');

function refreshOutput() {
  const formData = new FormData(nameForm);
  const userName = formData.get('userName');
  const spiritAnimalName = getSpiritAnimalName(userName);
  // console.log(spiritAnimalName);

  outputDiv.innerHTML = `<h3> ${spiritAnimalName}.</h3>`;
}

// ======= Form submit handler
const onFormSubmit = (e) => {
  e.preventDefault();
  refreshOutput();
};

const onHover = () => refreshOutput();

const onTextChange = () => refreshOutput();

// ========= Event type change handler
const onEventTypeChange = () => {
  const selectedEvent = eventSelector.value;

  if (selectedEvent === 'onSubmit') {
    nameForm.addEventListener('submit', onFormSubmit);
    nameInput.removeEventListener('mouseover', onHover);
    nameInput.removeEventListener('change', onTextChange);
  } else if (selectedEvent === 'onHover') {
    nameInput.addEventListener('mouseover', onHover);
    nameForm.removeEventListener('submit', onFormSubmit);
    nameInput.removeEventListener('change', onTextChange);
  } else if (selectedEvent === 'onTextChange') {
    nameInput.addEventListener('change', onTextChange);
    nameForm.removeEventListener('submit', onFormSubmit);
    nameInput.removeEventListener('mouseover', onHover);
  } else {
    nameForm.removeEventListener('submit', onFormSubmit);
    nameInput.removeEventListener('mouseover', onHover);
    nameInput.removeEventListener('change', onTextChange);
  }
};

const eventSelector = document.querySelector('select#eventSelector');
eventSelector.addEventListener('change', onEventTypeChange);

// ====== for registering events listeners on page load
onEventTypeChange();
