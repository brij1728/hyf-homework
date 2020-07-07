'use strict';

// Movies exercise
// This exercise is repetition of array functions. you dont have to use chaining or anything fancy. Just fetch the movies and use the correct array function to get the following movies:

// Fetch movies from this api:

// Create an array of bad movies
// Creat an array of bad movies since year 2000

const moviesAPI =
  'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';

async function movies() {
  const moviesPromise = await fetch(moviesAPI);
  // console.log(moviesPromise);
  const moviesResponse = await moviesPromise.json();
  console.log(moviesResponse);

  const badMovies = moviesResponse.filter((m) => m.rating < 4).map((m) => m.title);
  console.log(badMovies);

  const badMovies2000s = moviesResponse
    .filter((m) => m.rating < 4 && m.year >= 2000 && m.year < 2010)
    .map((m) => m.title);
  console.log(`Bad movies from 2000s are:`, badMovies2000s);
}
movies();
