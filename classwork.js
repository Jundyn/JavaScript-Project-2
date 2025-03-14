// Part 1 - function with parameters

function multiply(a, b) {
  return a * b;
}
console.log(multiply(6, 4));
// const result = multiply(6, 4);
// console.log(result);

// Function with  condition statement

function isPositive(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
console.log(isPositive(7));
console.log(isPositive(-3));
console.log(isPositive(0));

// String Manipulation
function reverseString(str) {
  new_str = str.split("");
  new_str = new_str.reverse();
  new_str = new_str.join("");
  return new_str;
}
console.log(reverseString("JavaScript"));

// Function with Greet parameter
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet("paul"));
console.log(greet());

// function average of number
function average(a, b, c) {
  return (a + b + c) / 3;
}
console.log(average(10, 20, 30));

// string concantenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);

// Type conversion
let x = "10";
let y = 2;
let result = x + y;
let result2 = Number(x) + y;
console.log(result);
console.log(result2);

// voting funtion

function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log(canVote(20));
console.log(canVote(16));
console.log(canVote(18));
