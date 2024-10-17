"use strict";
function isEven(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(isEven(8));
console.log(isEven(3));

// Exercise 2: Function Returning a Sum
function addNumbers(num1, num2) {
  console.log(num1 + num2);
}
addNumbers(10,5);
