'use strict';
// Problem 1: Fibonacci Sequence
// Given a specific number in the fibonacci sequence return the fibonachi number.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function fib(n) {
  let array = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    array.push(array[i - 2] + array[i - 1]);
  }
  return array[n];
}

console.log(fib(9));

// Problem 2: Fizz buzz
/* 
This is a classic programming task.

Create a function that prints the numbers from 1 to 100. But for multiples 
of three print Fizz instead of the number and for the multiples of five print
Buzz. For numbers which are multiples of both three and five print FizzBuzz.

When that works. Make the two number for multiples into parameters. So it 
can be called like this:

fizzBuzz(4, 12); 
*/

function fizzBuzz(a, b) {
  const result = [];
  for (let number = 1; number <= 100; number++) {
    if (number % a === 0 && number % b === 0) {
      result.push('FizzBuzz');
    } else if (number % a === 0) {
      result.push('Fizz');
    } else if (number % b === 0) {
      result.push('Buzz');
    } else {
      result.push(number);
    }
  }
  return result;
}
console.log(fizzBuzz(3, 5));
console.log(fizzBuzz(13, 25));
console.log(fizzBuzz(3, 18));
console.log(fizzBuzz(30, 75));

// Problem 3: Build a sentiment analyzer
/* 
A sentiment analyzer is some functionality that figures out how positive/
negative a sentence is.

Fx the sentence `I am mega super awesome happy" Should have a high score 
The sentence "I hate doing boring stuff" should have a low score.

Create a function that takes a string as a parameter. calling the function 
will return an object with score, positiveWords and negativeWords. You decide
how the score should be implemented and what words are negative and positive. 
*/

// function sentimentArray(sentiment) {
//   const sentimentArray = sentiment.split(' ');
//   let sentimentWord = [];

//   for (let i = 0; i < sentimentArray.length; i++) {
//     sentimentWord.push(sentimentArray[i].toLowerCase());
//   }
//   return sentimentWord;
// }
// console.log(sentimentArray('Hello word is Playing Fotball in India and Pakastin'));

function sentimentAnalyzer(sentence) {
  const positiveWords = ['happy', 'awesome', 'super', 'good', 'wow', 'beautiful', 'genious', 'enjoying', 'party'];
  const negativeWords = ['bad', 'angry', 'cold', 'evil', 'fail', 'fear', 'hate'];

  const result = {
    sentence,
    score: 0,
    positiveWords: [],
    negativeWords: [],
  };

  const wordsInSentence = sentence.toLowerCase().match(/\w+/g) || [];

  for (const word of wordsInSentence) {
    if (positiveWords.includes(word)) {
      result.score += 1;
      result.positiveWords.push(word);
    } else if (negativeWords.includes(word)) {
      result.score -= 1;
      result.negativeWords.push(word);
    }
  }

  return result;

  // const words = sentimentArray(sentence);
  // let positiveWord = [];
  // let negativeWord = [];

  // return {
  //   score: scoreOfSentiment(),
  //   positiveWords: positive(),
  //   negativeWords: negative(),
  // };

  // function sentimentArray(sentiment) {
  //   const sentimentArray = sentiment.split(' ');
  //   let sentimentWord = [];

  //   for (let i = 0; i < sentimentArray.length; i++) {
  //     sentimentWord.push(sentimentArray[i].toLowerCase());
  //   }
  //   return sentimentWord;
  // }

  // function positive() {
  //   for (let i = 0; i < words.length; i++) {
  //     if (words[i] === positiveWords[i]) {
  //       return positiveWord.push(words[i]);
  //     } else {
  //       return null;
  //     }
  //   }
  // }

  // function negative() {
  //   for (let i = 0; i < words.length; i++) {
  //     if (words[i] === negativeWords[i]) {
  //       return negativeWord.push(words[i]);
  //     } else {
  //       return null;
  //     }
  //   }
  // }

  // function scoreOfSentiment() {
  //   const scoreIs = positiveWord.length - negativeWord.length;
  //   return scoreIs;
  // }
}

console.log(sentimentAnalyzer('He is very awesome and enjoying his birthday party'));

console.log(sentimentAnalyzer('I will be happy to         fail!'));
//console.log(sentimentAnalyzer[word]);

// Problem 4: Credit card number formatter
/*
This is a very real world example of a problem i got at my previous work. I 
was tasked to implement one of the smart credit card input fields, where the 
credit card numbers are seperated with a space. Fx inputting 123456789 would 
show 1234 5678 9.
Create a function that takes a number as parameter. 
*/

function formatCreditCardNumber(number) {
  return {
    original: number,
    formatted: format(number),
  };
}

function format(number) {
  const value = number.replace(/\s+/g, ''); //replace(/\D/gi, '');
  const regexpFourDigits = /\d{4}/g;
  const formattedNumber = value.match(regexpFourDigits);
  return formattedNumber;
}

console.log(formatCreditCardNumber('12345345'));

// Problem 5: Character frequencies
// Write a function that counts the frequency of characters in a string:

function getCharacterFrequencies(word) {
  const result = {
    length: word.length,
    characters: [],
  };

  const charCountDict = {};

  for (const char of word) {
    if (!charCountDict[char]) {
      console.log('creating new entry for', char);
      charCountDict[char] = 1;
    } else {
      console.log('updating existing entry for', char);
      charCountDict[char] += 1;
    }
    console.log(JSON.stringify(charCountDict));
  }

  for (const char of Array.from(Object.keys(charCountDict)).sort()) {
    result.characters.push({
      character: char,
      count: charCountDict[char],
    });
  }

  return result;
}

console.log(getCharacterFrequencies('hello'));

// Problem 6: Palindromic substring
// Write a function that finds the longest palindromic substring of a given string.

function findLongestPalindromicString(text) {
  let longestString = '';

  for (let i = 1; i <= text.length - 2; ++i) {
    let palendromicString = '';

    for (let j = 1; j <= text.length / 2; ++j) {
      const startIndex = i - j;
      const endIndex = i + j;

      console.log(`i=${i}, startIndex=${startIndex}, endIndex=${endIndex}`);

      if (
        startIndex < 0 ||
        endIndex > text.length - 1 ||
        text[startIndex].toLowerCase() !== text[endIndex].toLowerCase()
      ) {
        break;
      }

      palendromicString = text.substring(startIndex, endIndex + 1);

      console.log(`found a palendromic string: ${palendromicString}`);
    }

    if (palendromicString.length > longestString.length) {
      longestString = palendromicString;
      console.log(`Longest palendromic string is: ${longestString}`);
    }
  }

  return longestString;
}

console.log(findLongestPalindromicString('hhhelemojkjomcdc'));

// Problem 7: Credit card info
// Similar to the format credit card number, now we need to identify the credit card type.

function detectCreditCardType(number) {
  const regexp = {
    visa: /^4[0-9]{15}$/g,
    masterCard: /^5[1-5][0-9]{14}$/g,
    americanExpress: /^3[47][0-9]{14}$/g,
  };

  for (const key in regexp) {
    if (regexp[key].test(number)) {
      return key;
    }
  }

  return `Please enter a valid number`;
}

console.log(detectCreditCardType('3723423323341335'));

// Problem 8: Tic Tac Toe
// Draw a tic tac toe game.

// Write a function called getRenderedGame(position) that takes position as parameter.
// position is a two dimensional array that shows the position of a game.

function getRenderedGame(positionArray) {
  let output = `/*\n*******\n`;

  for (const row of positionArray) {
    output += `*${row.join('*')}*\n`;
  }
  output += `*******\n*/`;

  return output;
}

const DEFAULT_GAME_INFO = {
  winner: undefined,
  loser: undefined,
  hasEnded: false,
};

function checkForWinner(valuesList) {
  const result = { ...DEFAULT_GAME_INFO };
  const valuesSet = new Set(valuesList);

  if (valuesSet.size === 1) {
    let winner = valuesSet.values().next().value;
    winner = winner.trim().toLowerCase();

    const hasWinner = winner.length > 0;

    if (hasWinner) {
      const loser = winner === 'x' ? 'o' : 'x';

      result.winner = winner;
      result.loser = loser;
      result.hasEnded = true;
    }
  }

  return result;
}

function getGameInfo(positionArray) {
  let hasAtLeastOneEmptySpot = false;

  for (const rowValues of positionArray) {
    if (!hasAtLeastOneEmptySpot) {
      for (const value of rowValues) {
        if (value.trim().length === 0) {
          hasAtLeastOneEmptySpot = true;
        }
      }
    }

    const result = checkForWinner(rowValues);
    if (result.hasEnded) {
      return result;
    }
  }

  const columnCount = positionArray[0].length;

  for (let colIndex; colIndex < columnCount; columnCount++) {
    const columnValues = [];

    for (let rowIndex; rowIndex < positionArray.length; rowIndex++) {
      columnValues.push(positionArray[rowIndex][colIndex]);
    }

    const result = checkForWinner(columnValues);
    if (result.hasEnded) {
      return result;
    }
  }

  const diagonalValues1 = [];
  const diagonalValues2 = [];

  for (let rowIndex = 0; rowIndex < positionArray.length; rowIndex++) {
    diagonalValues1.push(positionArray[rowIndex][rowIndex]);
    diagonalValues2.push([positionArray.length - 1 - rowIndex][rowIndex]);
  }

  for (const values of [diagonalValues1, diagonalValues2]) {
    const result = checkForWinner(values);
    if (result.hasEnded) {
      return result;
    }
  }

  return { ...DEFAULT_GAME_INFO, hasEnded: !hasAtLeastOneEmptySpot };
}

const position = [
  ['x', 'o', ''],
  ['', 'o', ''],
  ['', 'o', 'x'],
];

const renderedGame = getRenderedGame(position);
console.log(renderedGame);

console.log(
  getGameInfo([
    ['x', 'o', ' '],
    [' ', ' ', ' '],
    [' ', 'o', 'x'],
  ])
);

console.log(
  getGameInfo([
    ['x', 'o', ' '],
    [' ', 'x', ' '],
    [' ', 'o', 'x'],
  ])
);

console.log(
  getGameInfo([
    ['x', 'o', 'o'],
    ['o', 'x', 'x'],
    ['x', 'o', 'o'],
  ])
);

console.log(
  getGameInfo([
    ['x', 'o', 'o', 'x'],
    ['o', ' ', 'x', 'o'],
    ['x', 'o', 'o', 'x'],
    ['x', 'o', 'o', 'x'],
  ])
);
