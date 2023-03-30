/*
Create a function that concatenates n input arrays, where n is variable.

Examples
concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
*/
const concat = (...arrays) => {
  const concatted = [];
  for (let i = 0; i < arrays.length; i++) {
    const array = arrays[i];
    concatted.push(...array); // destruct this array's items and push those individually onto concatted.
  }
  return concatted;
};
console.log(concat([1, 2, 3], [4, 5], [6, 7])); //➞ [1, 2, 3, 4, 5, 6, 7]
console.log(concat([1], [2], [3], [4], [5], [6], [7])); //➞ [1, 2, 3, 4, 5, 6, 7]
console.log(concat([1, 2], [3, 4])); //➞ [1, 2, 3, 4]
console.log(concat([4, 4, 4, 4, 4])); //➞ [4, 4, 4, 4, 4]
