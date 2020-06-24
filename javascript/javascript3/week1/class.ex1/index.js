'use strict';

console.log(JSON.parse(`{}`));

const numbers = [1, 2, 3, 4];

console.log(`numbers Array`, numbers);

console.log(JSON.parse('123.45'));
console.log(JSON.parse('123.4'));

const person = {
  name: 'Murphy Alex',
  age: 28,
  location: 'Brooklyn, New York',
  hobbies: ['Music', 'Tennis', 'Dance'],
  heightInFeet: 5.39,
  isEmployed: false,
  paidTaxes: null,
};

console.log(JSON.stringify(person, null, 2));

function replacer(key, value) {
  if (typeof value === 'string') {
    return undefined;
  }
  return value;
}

console.log(JSON.stringify(person, replacer, 2));
console.log(JSON.stringify(person, ['hobbies', 'location'], 2));
