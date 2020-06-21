const greet = (name) => `Hello there, How are you ${name} `;
const add = (a, b) => a + b;

console.log(greet('Brijesh'));
console.log(add(7, 9));

// functions can be pass as argument
const numbers = [2, 34, 45, 67];
console.log(numbers.reduce(add, 0));

// functions can be stored in an object
const functionsDict = {
  greetFn: greet,
  addFn: add,
};

console.log(functionsDict['greetFn']('Murphy'));
console.log(functionsDict.addFn(12, 34));

// functions can be stored in an array
const functionsArray = [greet, add, (a, b) => a ** b];
const argumentsArray = [['Charlie'], [23, 14], [3, 4]];

functionsArray.forEach((fn, index) => {
  const fnArgs = argumentsArray[index];
  console.log(fnArgs);

  console.log(fn(...fnArgs));
  console.log(`fn=${fn}\n\t>> fnArgs= ${fnArgs}\n\t>> return value = ${fn(...fnArgs)}`);
});

const functionRunner = (fn, fnArgs) => {
  if (fnArgs !== undefined) {
    return fn(...fnArgs);
  } else {
    return fn();
  }
};
console.log(functionRunner(() => 'Hello'));
console.log(functionRunner(Math.random));
