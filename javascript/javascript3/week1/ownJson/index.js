'use strict';

// Create your own json file with something that interests you. Maybe that
// could be computers, pets, music etc.

const person = {
  name: 'Brijesh Singh',
  age: 26,
  location: 'Indra Vihar, New Delhi',
  hobbies: ['Classical Music', 'Cricket', 'Dance'],
  heightInCM: 183,
  qualification: {
    degree: 'B.Tech',
    course: 'Electronics & Communication Engineering',
  },
  pets: null,
  paidTaxes: null,
};

console.log(JSON.stringify(person, null, 2));
