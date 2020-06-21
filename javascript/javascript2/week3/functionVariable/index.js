// Create funtions that are used in these different ways:
// ======== Part I ===========
//Create an array with 3 items. All items should be functions. Iterate through
//the array and call all the functions.

const functionsArray = [add, multiply, division];
const argumentsArray = [
  [2, 3, 4, 5, 23],
  [12, 3, 24, 3, 5],
  [2, 4, 5, 6, 3, 12, 23],
];

functionsArray.forEach((fn, index) => {
  const fnArgs = argumentsArray[index];
  // console.log(fnArgs);
  // console.log(fn(...fnArgs));
  console.log(`fn = ${fn}\n\t>> fnArgs = ${fnArgs}\n\t>> result is`, fn(...fnArgs));
});

// function of adding numbers
function add(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

// multiplication function
function multiply(multiplier, ...numbers) {
  return numbers.map((number) => {
    return multiplier * number;
  });
}

console.log(multiply(2, 3, 4, 5, 6));
console.log(add(1, 2, 3, 4, 5, 6));

function division(divider, ...numbers) {
  return numbers.map((number) => {
    return (number / divider).toFixed(3);
  });
}

console.log(division(3, 6, 9, 14, 15));

// ========== Part II =========
// Create a function as a const and try creating a function normally. Call both functions.

const hello = (name) => {
  console.log(`Hey, ${name.toLocaleUpperCase()} where have you been for last couple of weeks.`);
};

function neighbour(name) {
  console.log(`This ${name.toLocaleUpperCase()} is my neighbour`);
}
neighbour('priyank');
hello('brijesh');
hello('stevie');

// ========== Part II =========
// Create an object that has a key whose value is a function. Try calling this function.

const fnObject = {
  sum: add,
  multiplication: multiply,
  division: division,
};

console.log(fnObject.sum(2, 23, 12, 14, 23, 22, 4));
console.log(fnObject.multiplication(3, 5, 12, 8, 11, 22, 4));
console.log(fnObject.division(2, 23, 12, 24, 17, 45, 34));
