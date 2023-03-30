// https://www.algoexpert.io/questions/two-number-sum
function twoNumberSum(array, targetSum) {
  // Write your code here.

  // loop through array with for loop and i. NOTE: stop at length-2
  for (let i = 0; i <= array.length - 2; ++i) {
    for (let k = i + 1; k <= array.length - 1; ++k) {
      // look at i and k elements
      // see if their sum === targetSum
      if (array[i] + array[k] === targetSum) return [array[i], array[k]];
      // if yes, put these in an array and return it
    }
  }
  // outside for loop - targetSum not found - return empty array
  return [];
}
