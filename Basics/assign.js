// Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// Count Characters
function countCharacters(str) {
  return str.length;
}
console.log(countCharacters("hello"));

// Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("hello world"));

// Find Maximum and Minimum
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([1, 2, 3, 4, 5]));

function findMin(arr) {
  return Math.min(...arr);
}
console.log(findMin([1, 2, 3, 4, 5]));

// Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));

// Filter Array (Example: filter out numbers greater than a threshold)
function filterArray(arr, threshold) {
  return arr.filter((num) => num <= threshold);
}
console.log(filterArray([10, 20, 30, 40, 50], 25));

// Factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

// Prime Number Check
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7));

// Fibonacci Sequence
function fibonacci(n) {
  let fibSeries = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
  }
  return fibSeries.slice(0, n);
}
console.log(fibonacci(7));
