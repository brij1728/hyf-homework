'use strict';

const moviesJsonUrl =
  'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';
// Using chaining

// Fetch the astronauts
// After the astronauts has been fetched, fetch movies using this api
// Log out the movies

fetch('http://api.open-notify.org/astros.json')
  .then((astronautsResponse) => {
    return astronautsResponse.json();
  })
  .then((data) => {
    console.log(data.number);
    return fetch(moviesJsonUrl, {
      mode: 'cors',
    });
  })

  .then((moviesResponse) => {
    console.log(moviesResponse);
    return moviesResponse.json();
  })
  .then((movies) => {
    const x = movies.filter((m) => m.year < 2014);
    console.log(x);
    console.log(movies);
  })
  .catch((error) => console.log(error));

async function chaining() {
  const astronautsResponse = await fetch('http://api.open-notify.org/astros.json');
  const astronauts = await astronautsResponse.json();
  console.log(astronauts);

  const moviesResponse = await fetch(moviesJsonUrl, {
    mode: 'cors',
  });
  const movies = await moviesResponse.json();
  console.log(movies.map((m) => m.title));
  return movies.map((m) => m.title);
}

chaining();
