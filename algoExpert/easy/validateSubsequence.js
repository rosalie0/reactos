// https://www.algoexpert.io/questions/validate-subsequence
function isValidSubsequence(array, sequence) {
  // counter for sequence, start at 0
  let count = 0;
  // go thru array with for loop
  for (let i = 0; i < array.length; i++) {
    // if sequence[counter] === array[i]
    //   update sequence counter
    if (sequence[count] === array[i]) count++;
  }

  // our count should be the same number as the sequence length
  return count === sequence.length;
}

const arr1 = [5, 1, 22, 25, 6, -1, 8, 10];
const seq1 = [1, 6, -1, 10];
console.log(isValidSubsequence(arr1, seq1)); // true
