// https://www.algoexpert.io/questions/two-number-sum
function twoNumberSum(array, targetSum) {
  // Write your code here.
  // Time of O(n) using a cache/hash map, which takes up additional O(n) space
  const cache = {};
  for (let n of array) {
    const match = targetSum - n; // match is our 'matching' pair int that would render us a result
    if (cache[match]) return [n, match];
    else cache[n] = n; // add n to our cache / seen numbers
  }
  return [];
}
