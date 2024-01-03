// f. Return median of two sorted arrays of the same size
// Anonymous Function
let medianOfArrays = function (arr1, arr2) {
  let combinedArray = arr1.concat(arr2).sort(function (a, b) {
    return a - b;
  });
  let middle = Math.floor(combinedArray.length / 2);
  if (combinedArray.length % 2 === 0) {
    return (combinedArray[middle - 1] + combinedArray[middle]) / 2;
  } else {
    return combinedArray[middle];
  }
};

// IIFE
let median = (function (arr1, arr2) {
  let combinedArray = arr1.concat(arr2).sort(function (a, b) {
    return a - b;
  });
  let middle = Math.floor(combinedArray.length / 2);
  if (combinedArray.length % 2 === 0) {
    return (combinedArray[middle - 1] + combinedArray[middle]) / 2;
  } else {
    return combinedArray[middle];
  }
})([1, 2, 3], [4, 5, 6]);
console.log(median);
