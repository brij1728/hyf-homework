'use strict';

let friends = [
  {
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21,
  },
  {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26,
  },
  {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18,
  },
];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
let allbooks = friends.reduce(
  (accumulator, currentValue) => {
    return [...accumulator, ...currentValue.books];
  },
  ['Alphabet']
);

console.log(allbooks);

// =======================

let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    let key = obj[property];
    console.log(key);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

const groupedPeople = groupBy(people, 'age');
console.log(groupedPeople);

// ===================

const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
const myOrderedArray = myArray.reduce((accumulator, currentValue) => {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(myOrderedArray);

// ============ prime number=======

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

const prime = array.filter((num) => {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
});

console.log(prime);
console.log(array.filter(isPrime));

// ============Filter array items based on search criteria (query)========
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

function filterItems(arr, query) {
  return arr.filter((item) => {
    return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    // return item.toLowerCase().includes(query.toLowerCase());
  });
}

console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'));

// ========= square roots=========
const numbers = [1, 4, 9];
const roots = numbers.map((num) => {
  return Math.sqrt(num);
});

console.log(roots);

// ========= reformate object into array=======
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map((obj) => {
  const rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});
console.log(reformattedArray);
