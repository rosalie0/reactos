// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // new value sorted, casted as a String
  const numberAsString = String(n);

  // let reversedArr = []
  let reversedArr = [];

  // for loop , i=nAsString.length-1, i >= 0, i--
  for (let i = numberAsString.length - 1; i >= 0; i--) {
    // store current digit in temp
    const currentDigit = numberAsString[i];
    // reversedArr.push(temp)
    reversedArr.push(currentDigit);
  }

  // example: [5, 1, -]
  // check if last element in reversedArr is '-'
  if (reversedArr[reversedArr.length - 1] === "-") {
    reversedArr.pop();
    reversedArr.unshift("-");
  }

  const arrLength = reversedArr.length;
  let str = "";
  // 0 ISSUE - example: [ '-', 0, 9]
  for (let i = 0; i < arrLength; i++) {
    if (reversedArr[i] !== "0") str += reversedArr[i];
  }

  return Number(str);
}

console.log(reverseInt(15)); // 15
console.log(reverseInt(981)); // 189
console.log(reverseInt(500)); // 5
console.log(reverseInt(-15)); // -51
console.log(reverseInt(-90)); // -9
