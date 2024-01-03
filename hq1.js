// h. Rotate an array by k times
// Anonymous Function
let rotateArray = function (arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
};

// IIFE
let rotatedArray = (function (arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
})([1, 2, 3, 4, 5], 2);
console.log(rotatedArray);
