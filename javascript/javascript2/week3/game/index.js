'use strict';

// Lets create a fun simple game :)
/*
Here is the setup of the game: Two users compete about who can press a key the 
most times within a set time!

A user specifies how long time the game should be, and presses "start game!". 
When the button is pressed it is about pressing either l or s on the keyboard. 
The user that has the highest number of keypresses after the time is up, wins 🎉

Here is a gif of how the site should work:
1. Create an input and a button in html. When the button is clicked, get the value 
of the input. This value will be the amount of time the game should run.
2. Set a timeout for the time specified by the user. After that time has run out 
just log out a simple string.
3. Create an event listener so you can call a function when any key is pressed. Now
grap the actual key that was pressed. Fx was it a j or an i. We are interested 
in s and l. Here google is your friend!
4. Keep a counter for how many times l and s was pressed.
5. Now put it all together! After the timeout is done figure out which of the counters 
is largest. Give some kind of feedback to the users indicating who won.
*/
// game information
let gameInfo = {
  inProgress: false,
  result: {
    sCount: 0,
    lCount: 0,
  },
};

//
const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('Start button is clicked');
  if (gameInfo.inProgress) {
    return;
  }

  const duration = parseFloat(document.querySelector('input').value);

  if (isNaN(duration) || duration < 2) {
    alert('Duration should be >= 2 seconds');
    return;
  }

  gameInfo.inProgress = true;
  button.disabled = true;

  gameInfo.result.sCount = 0;
  gameInfo.result.lCount = 0;

  const gameResult = document.querySelector('.result');
  gameResult.innerHTML = '';
  document.addEventListener('keyup', handleKeyPress);

  showTimer(duration);

  setTimeout(() => {
    document.removeEventListener('keyup', handleKeyPress);

    gameResult.innerHTML = showResult();
    // showResult();

    gameInfo.inProgress = false;
    button.disabled = false;
  }, duration * 1000);
});

// key pressing function
function handleKeyPress(event) {
  if (event.key === 's') {
    gameInfo.result.sCount += 1;
  } else if (event.key === 'l') {
    gameInfo.result.lCount += 1;
  }
  // sconst gameResult = document.querySelector('.result');
  // console.log(showResult());
  // gameResult.innerHTML = showResult();
  // // showResult();
}

function showTimer(duration) {
  const output = document.querySelector('.timer');
  output.innerHTML = 0;

  const startTime = new Date();

  const intervalId = setInterval(() => {
    const timeElapsedInSeoncds = (new Date().getTime() - startTime.getTime()) / 1000;
    if (timeElapsedInSeoncds >= duration) {
      clearInterval(intervalId);
      output.innerHTML = `Game Finished`;
    } else {
      const timeLeftInSeconds = (duration - timeElapsedInSeoncds).toFixed(2);
      output.innerHTML = `${timeLeftInSeconds} seconds are left in the game`;
    }
  }, 500);
}

// result
function showResult() {
  if (gameInfo.result.sCount > gameInfo.result.lCount) {
    return `Winner is S`;
  } else if (gameInfo.result.sCount < gameInfo.result.lCount) {
    return `Winner is L`;
  } else if (gameInfo.result.sCount === 0 && gameInfo.result.lCount === 0) {
    return `No result, please press the key`;
  } else if (gameInfo.result.sCount === gameInfo.result.lCount) {
    return `Game is draw`;
  }
}

// confetti code
// const confettiElement = document.querySelector('my-canvas');
// const confettiSettings = { target: confettiElement };
// const confetti = new ConfettiGenerator(confettiSettings);
// confetti.render();
