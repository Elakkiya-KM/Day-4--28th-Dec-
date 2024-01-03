// c. Sum of all numbers in an array
// Anonymous Function
let sumOfNumbers = function (arr) {
  return arr.reduce(function (sum, num) {
    return sum + num;
  }, 0);
};

// IIFE
let totalSum = (function (arr) {
  return arr.reduce(function (sum, num) {
    return sum + num;
  }, 0);
})([1, 2, 3, 4, 5]);
console.log(totalSum);
