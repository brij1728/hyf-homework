'use strict';
// Working with movies
// Create an array of movies containing the movies with a short title
const moviesWithShortTitle = movies.filter((m) => m.title.length <= 15).map((m) => m.title);
console.log(moviesWithShortTitle);
// Create an array of movie titles with long movie titles

console.log(movies);

const moviesWithLongTitle = movies.filter((m) => m.title.length >= 40).map((m) => m.title);

console.log(moviesWithLongTitle);

const moviesFrom2000s = movies.filter((m) => m.year >= 2000 && m.year <= 2009).map((m) => m.title);
console.log(moviesFrom2000s);

const averageRuntimeForMoviesFrom2000s = movies
  .filter((m) => m.year >= 2000 && m.year <= 2009)
  .reduce((sum, m, index, filteredArray) => sum + m.running_times / filteredArray.length, 0);

console.log(`Average runtime for movies from 2000s: ${(averageRuntimeForMoviesFrom2000s / 60).toFixed(2)} minutes`);

// Calculate the average rating of all the movies using reduce.
const averageRating = movies.reduce((sum, m, index, array) => sum + m.rating / array.length, 0);
console.log(`Average rating of all movies are: ${averageRating.toFixed(2)}`);

// Create a new array that has an extra key called tag. The tag is based on the
// rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const newObject = movies.map((m) => {
  const newObject = Object.assign({}, m);

  if (m.rating >= 7) {
    newObject.tag = 'Good';
  } else if (m.rating >= 4 && m.rating < 7) {
    newObject.tag = 'Average';
  } else if (m.rating < 4) {
    newObject.tag = 'Bad';
  }

  return newObject;
});

console.log(newObject);

// Using chaining, first filter the movies array to only contain the movies rated
// higher than 6. Now map the movies array to only the rating of the movies.
const moviesRatedHigherThanSix = movies.filter((m) => m.rating > 6).map((m) => m.title);
console.log(moviesRatedHigherThanSix);

/* 
Count the total number of movies containing any of following keywords: Surfer, 
Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien 
and 2 with Benjamin, you would return 6. Can you make sure the search is case 
insensitive?
 */

const moviesName = movies.filter((m) => m.title).map((m) => m.title);
console.log(moviesName);

const keywords = ['Surfer', 'Alien', 'Benjamin'];

const movieWithKeywords = movies.filter((m) => movieContainKeywords(m.title));

function movieContainKeywords(title) {
  // console.log(title);
  title = title.toLocaleLowerCase().trim();
  return keywords.some((keyword) => {
    keyword = keyword.toLocaleLowerCase().trim();
    // console.log(keyword);
    // console.log(title.toLocaleLowerCase().trim());
    return title.includes(keyword);
  });
}

console.log(movieWithKeywords);

/* 
Create an array of movies where a word in the title is duplicated. Fx "Star Wars: 
The Clone Wars" the word Wars is duplicated. Here are some madeup examples of 
movies with duplicated words in the title: "The three men and the pistol", 
"Chase three - The final chase" */

function splitIntoWords(text, ignoreCase = false) {
  if (ignoreCase) {
    text = text.toLocaleLowerCase();
  }
  return text.split(/[^a-z0-9]+/gi).filter((x) => x.length > 1);
}
// console.log(splitIntoWords('The is not the man is man'));
// console.log(splitIntoWords('The is not the man is man', true));
// const text = 'He is coming home';
// text.toLocaleLowerCase();
// console.log(text.split());
// const df = text.split(/[^a-z0-9]+/gi);
// console.log(df);
// console.log(text);

const splitMoviesName = movies.map((m) => splitIntoWords(m.title, true));
const movieWithDuplicateWord = splitMoviesName.filter((m) => {
  return m.some((item, index) => {
    if (m.indexOf(item) !== index) {
      return true;
    }
  });
});
console.log(splitMoviesName);
console.log(movieWithDuplicateWord);

// filtering duplicate word from splitArray
// function duplicatesWordMovies(array) {
//   array.filter((m) => {
//     return m.some((item, index) => {
//       if (m.indexOf(item) !== index) {
//         return true;
//       }
//     });
//   });
// }

// // movieName contains duplicate word
// const duplicatesMovies = movies
//   .filter((m) => {
//     const splitMoviesName = splitIntoWords(m.title, true);
//     duplicatesWordMovies(splitMoviesName);
//   })
//   .map((m) => m.title);

// console.log(duplicatesMovies);

// Count the total number of Good, Average and Bad movies using reduce. A return
// could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123} Optional

const filterObject = {
  badMovies: movies.filter((m) => m.rating < 4).length,
  averageMovies: movies.filter((m) => m.rating >= 4 && m.rating < 7).length,
  goodMovies: movies.filter((m) => m.rating >= 7).length,
};

console.log(filterObject);
