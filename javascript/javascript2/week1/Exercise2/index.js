// Problem 2: Podcast

const podcasts = [
  {
    name: 'The mystery om of Johan Klausen Varbourg',
    imageUrl: 'https://picsum.photos/536/354',
  },
  {
    name: 'Tips about dogs with small legs',
    imageUrl: 'https://picsum.photos/536/354',
  },
  {
    name: 'You, me, we and us',
    imageUrl: 'https://picsum.photos/536/354',
  },
  {
    name: 'Breakfast news - Dinner edition',
  },
];

/* 
Create a ul
Loop through the podcasts
For every podast:
  Creat an li
  Create an h1 element
  Change the innerHTML of hte h1 to equal the name of the current podcast
  Append the h1 to the li
  Now add an image to the li with the src set to the imageUrl. But only if the
  imageUrl key exists on the object!
Append the li to the ul
*/
const div = document.querySelector('div');

const myButton = document.querySelector('button');
myButton.addEventListener('click', () => {
  podcast();
});

function podcast() {
  const ul = document.createElement('ul');

  for (const podcast of podcasts) {
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode(podcast.name));
    console.log(h1);
    debugger;
    li.appendChild(h1);

    if (podcast.imageUrl) {
      const image = document.createElement('img');
      image.src = podcast.imageUrl;
      console.log(image);

      li.appendChild(image);
    }
    ul.appendChild(li);
    div.appendChild(ul);
  }
}
