//Problem 1: Smart-ease - Goes Global!

/* 
Following the massive success of Smart-ease's first couple of products 
things have been quite hectic at Smart-ease's shared office space. The
phone is constantly ringing from journalists wanting to interview the
genius behind the success and the greatest developers want to work for you. 
Wired wrote an article with the headline "Smart-ease as good as Smarties"

BUT people are asking: What will be the next product that truly defines 
Smart-ease as the startup of the century?
*/

/* function getFullname(firstname, surname) {
  const fullName = firstname + " " + surname;
  return fullName;
}

const fullname1 = getFullname("Brijesh", "Singh");
const fullname2 = getFullname("Abhishek", "Kumar");

console.log(fullname1);
console.log(fullname2);
 */
//Formal fullname
/* 
On the flight website the user has the possibility to check a checkbox that 
indicates if the user wants to be adressed formally. Lets also change 
getFullname to include support for formal name.

Create an extra parameter useFormalName that is a boolean. If it is true
the function should add a Lord in front of the name.
*/

function getFullname(firstname, surname, useFormalName) {
  let fullName = firstname + ' ' + surname;
  if (useFormalName === true) {
    return 'Lord ' + fullName;
  } else if (useFormalName === false) {
    return fullName;
  }
}

const fullname3 = getFullname('Robert', 'Clive', true);
const fullname4 = getFullname('Abhishek', 'Kumar', false);

console.log(fullname3);
console.log(fullname4);

//===========================================================================
//===========================================================================

//Problem 2:Event Application
/* 
Another customer has contacted us. He works for a secret company that rimes 
with foogle. The customer works on their calendar application. They need 
some functionality to help with writing what weekday an event is held.

You specify how many days from today an event is being held. The function 
then figures out what weekday the event is being held. Here is an example:

Today is Sunday and the event is in 5 days. Therefore the event will be held 
on a friday.
*/

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const today = new Date();

function getEventWeekday(days) {
  const eventDay = weekDays[(days + today.getDay()) % weekDays.length];
  return eventDay;
}

console.log(getEventWeekday(19));
console.log(getEventWeekday(40));

//========================================================================
//========================================================================

//Problem 3: Weather wear
/* 
Create a function (that you have to name) that has temperature as parameter. 
Based on the temperature it should return a string with what the user should
wear. You decide what the user should wear based on the temperature. 
*/

function clothesToWear(temperature) {
  if (temperature >= 30) {
    return `\"shorts and a t-shirt\"`;
  } else if (temperature < 30 && temperature >= 18) {
    return `\"Pajama and full-sleeve shirt\"`;
  } else if (temperature < 18 && temperature >= 5) {
    return `\"winter pajama and sweater\"`;
  } else {
    return `\"winter jacket\"`;
  }
}

console.log(clothesToWear(34));
console.log(clothesToWear(17));
console.log(clothesToWear(23));
console.log(clothesToWear(45));
console.log(clothesToWear(13));
console.log(clothesToWear(3));

//====================================================================================
//====================================================================================

// Problem 4:Student manager
/* 
A coding school have contacted us to make some functionality for managing
their classes. We will create functionality for adding students to a class.

For this exercise you need to figure out how Array.push works. Learn about 
the concept by researching about it. 

addStudentToClass function
The addStudentToClass should add the studentName to the class07Students array.

But there are some other requirements:

There can be only 6 students in a class. If more students are tried to be added, log out the following: "Cannot add more students to class 07".
The same person cannot be added to the class. If the same person is added to the class, log out the following: 'Student Benjamin is already in the class' where Benjamin is substituted for the studentName.
We are very fond of our Queen in Denmark, so if the Queen is added to the class she should always get a space. Even if the class has been filled out.
You cannot add an empty string to a class
getNumberOfStudents function
getNumberOfStudents should simply return the number of students in the class.
*/

const class07Students = [];

function addStudentToClass(studentName) {
  if (class07Students.length > 6) {
    console.log(`\"Cannot add more students to class 07\"`);
  } else if (class07Students.includes(studentName)) {
    console.log(`\'Student ${studentName} is already in the class\'`);
  } else if (studentName === '') {
    alert(`Please add a student name`);
  } else if (studentName === 'Queen') {
    class07Students.pop();
    class07Students.push('Queen');
  } else {
    console.log('Going to add', studentName);
    class07Students.push(studentName);
  }
}

function getNumbersOfStudent() {
  return (n = class07Students.length);
}

addStudentToClass('Benjamin');

addStudentToClass('Hello');
addStudentToClass('Leo');
addStudentToClass('Robert');
addStudentToClass('Rodrigues');
addStudentToClass('Taylor');

console.log(class07Students);

addStudentToClass('Queen');
console.log(class07Students);

console.log(getNumbersOfStudent());

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Problem 5:Candy helper optional
/*
We are at the candystore. We have taken some shovels of the caramel
-strawberry-cola-lemon-gravy winegums, a few of the banana chocolate 
diesel-motors and a handful of the salmon-potato covered toffee 
encrusted pizzas. But what is all this worth? And can you even afford it?

addCandy function
Create a function called addCandy. It has two parameters:

candyType - specifies the candy type. Could be 'sweet, chocolate, toffee
or chewing-gum'
weight - specifies the weigth of the candy in grams
The function should add the price of the candy to an array called 
boughtCandyPrices using push
*/

const amountToSpend = Math.random() * 100;

const boughtCandyPrices = [];

function addCandy(candyType, weight) {
  if (candyType === 'sweet') {
    boughtCandyPrices.push(0.5 * weight);
  } else if (candyType === 'chocolate') {
    boughtCandyPrices.push(0.7 * weight);
  } else if (candyType === 'toffee') {
    boughtCandyPrices.push(1.1 * weight);
  } else if (candyType === 'chewing-gum') {
    boughtCandyPrices.push(0.03 * weight);
  }
}

addCandy('sweet', 10);
console.log(boughtCandyPrices);

addCandy('toffee', 20);
addCandy('chocolate', 50);
console.log(boughtCandyPrices);

//Can i buy more?
/*
Now create a variable called amountToSpend and assign it to Math.random() * 100. 

Create a new function called canBuyMoreCandy. This function returns a boolean 
indicating if the user can buy more candy using the boughtCandy array.

Try use the function by adding some pieces of candy and checking if you can buy 
more. If the user can buy more candy the console.log the following: "You can buy 
more, so please do!". If the user cant buy more console.log the following: "
Enough candy for you!"
*/

function canBuyMoreCandy(budget) {
  let totalPrice = 0;

  for (let i = 0; i < boughtCandyPrices.length; i = i + 1) {
    totalPrice = totalPrice + boughtCandyPrices[i];
  }

  if (totalPrice < budget) {
    console.log(`\"You can buy more, so please do!\"`);
  } else {
    console.log(`\"Enough candy for you!\"`);
  }
}

console.log(`Spending amount is: ${amountToSpend}`);

canBuyMoreCandy(amountToSpend);

/* const amountToSpend = Math.random() * 100;
console.log(amountToSpend);
addCandy("sweet", 40);
console.log(boughtCandyPrices);
addCandy("toffee", 100);
addCandy("chocolate", 50);
console.log(boughtCandyPrices);
canBuyMoreCandy(amountToSpend); */
