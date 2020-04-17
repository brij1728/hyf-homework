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
  if (candyType === "sweet") {
    boughtCandyPrices.push(0.5 * weight);
  } else if (candyType === "chocolate") {
    boughtCandyPrices.push(0.7 * weight);
  } else if (candyType === "toffee") {
    boughtCandyPrices.push(1.1 * weight);
  } else if (candyType === "chewing-gum") {
    boughtCandyPrices.push(0.03 * weight);
  }
}

addCandy("sweet", 10);
console.log(boughtCandyPrices);

addCandy("toffee", 20);
addCandy("chocolate", 50);
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