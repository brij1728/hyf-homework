// Write the function sumInput() that:
/* 
Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, 
or presses “Cancel”.
Calculates and returns the sum of array items.

P.S. A zero 0 is a valid number, please don’t stop the input on zero.
 
*/

function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt("A number please", 0);
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum = sum + number;
  }
  return sum;
}

alert(sumInput());


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* 
The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum. 
*/

function getMaxSubSum() {

}