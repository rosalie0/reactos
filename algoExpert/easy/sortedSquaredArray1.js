function sortedSquaredArray(array) {
  // Write your code here.
  // Have to re-sort because negative numbers when doubles are now in wrong spot
  return array.map((n) => n * n).sort((a, b) => a - b);
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
