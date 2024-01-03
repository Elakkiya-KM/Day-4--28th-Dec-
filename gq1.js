// g. Remove duplicates from an array
// Anonymous Function
let removeDuplicates = function (arr) {
  return arr.filter(function (item, index, array) {
    return array.indexOf(item) === index;
  });
};

// IIFE
let uniqueArray = (function (arr) {
  return arr.filter(function (item, index, array) {
    return array.indexOf(item) === index;
  });
})([1, 2, 3, 4, 2, 3, 5]);
console.log(uniqueArray);
