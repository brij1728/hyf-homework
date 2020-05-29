'use strict';
// Find the shortest word
// Write a function that finds the shortest word of an array of words
const myButton = document.querySelector('button');
myButton.addEventListener('click', () => {
  shortestWord();
});

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
function shortestWord(array) {
  let shortestWord = '';
  let shortestWordLength = Infinity;
  for (const word of array) {
    console.log(word);
    // debugger;
    if (word.length < shortestWordLength) {
      shortestWord = word;
      shortestWordLength = word.length;
    }
  }
  return shortestWord;
}

console.log(shortestWord(danishWords));

// Find the shortest word
// Find the individual number and the total number of danish letters in a string.

// const danishLetters = ['æ', 'ø', 'å'];

// function numberOfDanishLetters(stringName) {
//   const stringArray = stringName.split(' ');
//   debugger;
//   let count = 0;
//   let countDanishLetters1 = 0;
//   let countDanishLetters2 = 0;
//   let countDanishLetters3 = 0;

//   for (const word of stringArray) {
//     for (const vowel in word) {
//     }
//   }

//
//   return {
//     total: count,
//     æ: countDanishLetters1,
//     ø: countDanishLetters2,
//     å: countDanishLetters3,
//   };
// }

function danishlettersAre(sentence) {
  const danishletters = ['æ', 'ø', 'å'];
  const result = { total: 0 };

  for (let character of sentence) {
    character = character.toLocaleLowerCase();

    if (danishletters.includes(character)) {
      result.total += 1;

      if (!result[character]) {
        result[character] = 1;
      } else {
        result[character] += 1;
      }
    }
  }

  return result;
}

const danishString = 'Jeg har en blå bil og en Æg. ør Æe ØÆøøø Æøøø ÆÅÅÅÅ';
console.log(danishlettersAre(danishString)); // returns {total: 1, å: 1}

const danishString2 = 'Blå grød med rød bær';
console.log(danishlettersAre(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}
