const originalArray = [1, 2, 3, 4]

function oddNumArray(arr) {
  const newArray = [];
  for (let i = 1; i <= originalArray.length; i++) {
    if (i === 1) newArray.push(i); //base case
    else {
      const newValue = 2 * i - 1;
      newArray.push(newValue);
    }
  }
  return newArray;
}

console.log(oddNumArray(originalArray))
// [(1, 3, 5, 7)];