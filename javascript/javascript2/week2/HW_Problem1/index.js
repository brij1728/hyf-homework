const numbers = [1, 2, 3, 4];
let newNumbers = [];

for (const number of numbers) {
  if (number % 2 !== 0) {
    newNumbers.push(number * 2);
  }
}
console.log(newNumbers);
console.log(`The double numbers are: `, newNumbers);

// ====== rewrite the above program using map ======
const newNumbers2 = numbers.map((number) => {
  if (number % 2 !== 0) {
    return number * 2;
  }
});
console.log(newNumbers2);

// ====== rewrite the above program using map ======
const newNumbers3 = numbers.filter((number) => {
  if (number % 2 !== 0) {
    return (number = number * 2);
  }
});
console.log(newNumbers3);
