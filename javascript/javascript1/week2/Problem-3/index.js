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
