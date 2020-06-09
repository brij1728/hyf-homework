// const eventElement = document.querySelector('h1');
// eventElement.innerHTML = 'Soccer training Wednesday';
// eventElement.style.backgroundColor = 'blue';
// console.log(eventElement);

const div = document.createElement('div');
div.innerHTML = 'new div';

const body = document.querySelector('body');
// body.appendChild(div);

const secondaryHeading = document.querySelector('h1#secondaryHeading');
const myButton = document.querySelector('button');
myButton.addEventListener('click', () => {
  secondaryHeading.innerText = `Current time is ${new Date()}`;
  showImageVideo();
  myFavoriteDishIs();
});

const myGif = document.createElement('img');
myGif.src = 'https://media.giphy.com/media/2QW9PVbQ1gCS4/giphy.gif';
myGif.style.width = '200px';
myGif.style.height = '200px';
myGif.style.display = 'block';

function showImageVideo() {
  debugger;
  div.appendChild(myGif);
}

// function changeLogo() {
//   let logo = document.getElementById('logo');
//   logo.src =
//     'https://assets.fontsinuse.com/static/use-media-items/15/14246/full-2048x768/56fc6e1d/Yahoo_Logo.png?resolution=0';

//   let newTitle = document.createElement('h1');
//   newTitle.innerHTML = 'My new title'; // <h1>My new title</h1>

//   document.body.appendChild(newTitle);
// }

// changeLogo();

// Problem 1: Favorite dishes
/* 
Create an array of strings with your favorite dishes.

With js select a ul in the DOM. You add the ul to the html file.

Now loop through each element of the favorite dishes array, you create an 
li element and set the text to the favorite dish.

Then append the li element to the ul element. */

const favoriteDishes = ['Paneer Paratha', 'Dal Fry', 'Gajar Halwa', 'Mattar Paneer', 'Plain Paratha'];
const ul = document.createElement('list');

function myFavoriteDishIs() {
  for (const dishes of favoriteDishes) {
    const listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(dishes));
    ul.appendChild(listItem);
    div.appendChild(ul);
  }

  // debugger;
}

// const greet = (message, ...subjects) => console.log(message + ',\n' + subjects.join(',\n'));
// document.write(greet);

// console.log(greet('hello', 'what he is doing', 'come home please', 'I am waiting for you', 'I am enjoying this tour'));

// const power = (number, exp = 2) => Math.pow(number, exp);

// console.log(power(4, 3));
// console.log(power(4));
