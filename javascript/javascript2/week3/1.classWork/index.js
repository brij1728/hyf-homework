// 'use strict';

// calling a function within a function
function functionRunner(functionToRun) {
  console.log(typeof functionToRun);
  // here calling the function that is provided as a argument in the function
  functionToRun();
}

functionRunner(function () {
  console.log('Hello');
});

// don't see anything why?
functionRunner(Math.random);

//  rewriting the functionRunner
function functionRunnerImproved(functionToRun) {
  console.log(typeof functionToRun);
  // calling the function that is provied as a argument in the function
  const capturedReturnedValue = functionToRun();
  console.log(capturedReturnedValue);
}

functionRunnerImproved(Math.random);

// Callback functions

// setTimeout implementation
setTimeout(() => {
  console.log('');
}, 2000);

// now make function as avaribale
const fourSecondLog = () => {
  console.log('Four second has elpased!');
};

setTimeout(fourSecondLog(), 4000);

// using dom
const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', () => {
  console.log('Button clicked!');
});

// button clicked function
const buttonClicked = () => {
  console.log('Button clicked as a variable');
};

// buttonElement.addEventListener('click', buttonClicked);

// callback input function
const callback = () => {
  console.log('Someone is writing!!');
};
document.querySelector('input').addEventListener('click', callback);

//  callback function
function myFunction(text) {
  return () => {
    console.log(text);
  };
}

const f = myFunction('Hello');
console.log(f);
f();
f();

const g = myFunction('Welcome');
g();
f();

console.log(f === f);
console.log(g === g);
console.log(f === g);

const factorial = (n) => {
  return n < 2 ? 1 : n * factorial(n - 1);
};

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(3));
console.log(factorial(1));

//  or
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

function addSquares(...number) {
  return number.reduce((sum, x) => {
    return sum + x * x;
  }, 0);
}
console.log(addSquares(2, 3, 4, 5));
console.log(addSquares(1, 2, 3, 4));
console.log(addSquares(5, 6, 7));
