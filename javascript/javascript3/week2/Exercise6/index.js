'use strict';

// Get the astronauts and the movies at the same time. Log out the movies and the battery status when both promises has been resolved.

const moviesJsonUrl =
  'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';

const astronautsUrl = 'http://api.open-notify.org/astros.json';

const response1 = fetch(astronautsUrl).then((value) => value.json());
const response2 = fetch(moviesJsonUrl).then((value) => value.json());
const responses = [response1, response2];

Promise.all(responses).then((value) => {
  console.log(value);
});

Promise.all(responses).then((value) => {
  console.log(`Astronauts names are: ${value[0].people.map((m) => m.name)}`);
  console.log(value[1].map((m) => m.title));
});
// console.log(value[0].map((people) => people.name));

// logging out the movies and the battery status when both promises has been resolved
Promise.all([response2, navigator.getBattery()]).then((value) => {
  console.log(value[0].map((m) => m.title));
  console.log(`Battery status for charging: ${value[1].charging}`);
});
