'use strict';

/*
Imagine your are running a meal ordering website. Orders come in from the web and 
we need to store them in a json file. Create a json file with two orders that 
contain at least these things:

Order name
Order id
Price
List of drinks
Order extras (fx cheese, lettuce etc.)
Think about what what type the data should be saved as!
*/

const orderMeals = [
  {
    id: 1,
    name: 'Pizza',
    price: {
      value: 153,
      currency: 'rupees',
    },
    'list of drinks': ['Lassi', 'Milk Sakes', 'Lemon ice Tea'],
    'order extras': ['Cheese', 'IceCream'],
  },
  {
    id: 2,
    name: 'Thai',
    price: {
      value: 157,
      currency: 'rupees',
    },
    'list of drinks': ['Mango shake', 'Coke', 'Cold Coffee'],
    'order extras': ['Frech Fry', 'Cheese'],
  },
];

// logging out JSON string
console.log(JSON.stringify(orderMeals, null, 2));

// replacer function
function replacer(key, value) {
  if (typeof value === 'number') {
    return undefined;
  }
  return value;
}

// logging out JSON string using replacer argument
console.log(JSON.stringify(orderMeals, replacer, 2));

// JSON sting and Javascript Object
const jsonString = JSON.stringify(orderMeals, replacer, 2);
const objectFromJson = JSON.parse(jsonString);

console.log(orderMeals, jsonString, objectFromJson);
