// b. Convert all the strings to title caps in a string array
/// Anonymous Function
let convertToTitleCaps = function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};

// Usage
console.log(convertToTitleCaps(["hello", "world", "javascript"]));

// IIFE
let titleCapsArray = (function (arr) {
  return arr.map(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
})(["hello", "world", "javascript"]);
console.log(titleCapsArray);
