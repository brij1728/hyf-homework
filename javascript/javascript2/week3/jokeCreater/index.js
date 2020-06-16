'use strict';
//=========== Part 9 ============
/*
Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke 
- boolean, logFunnyJoke - function and logBadJoke - function. If you set tellFunnyJoke 
to true it should call the logFunnyJoke function that should log out a funny joke. 
And vice versa.
*/

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke === true) {
    logFunnyJoke();
  } else if ((shouldTellFunnyJoke = false)) {
    logBadJoke();
  }
}

function logFunnyJoke() {
  console.log(`funny joke`);
}

function logBadJoke() {
  console.log(`bad joke`);
}

// jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);
jokeCreator(false, logBadJoke);
