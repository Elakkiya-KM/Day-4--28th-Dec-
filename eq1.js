// e. Return all the palindromes in an array
// Anonymous Function
let getPalindromes = function (arr) {
  return arr.filter(function (str) {
    return str === str.split("").reverse().join("");
  });
};

// IIFE
let palindromeArray = (function (arr) {
  return arr.filter(function (str) {
    return str === str.split("").reverse().join("");
  });
})(["level", "hello", "noon"]);
console.log(palindromeArray);
