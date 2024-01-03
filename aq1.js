//a. Print odd numbers in an array
// Anonymous Function
let printOddNumbers = function (arr) {
  arr.forEach(function (num) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

// Usage
printOddNumbers([1, 2, 3, 4, 5]);

// IIFE
(function (arr) {
  arr.forEach(function (num) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})([1, 2, 3, 4, 5]);
