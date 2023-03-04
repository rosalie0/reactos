// Write a function called unique
// It takes a string, and returns a string with any duplicat characters removed
// Bonus: try solving using 'reduce'
/* Examples:
  console.log(unique('abc')) // abc
  console.log(unique('aabba')) // ab
  console.log(unique('')) // ''
  console.log(unique('ddddddddddddd')) // d 
*/

function unique(str) {
  // initialize empty array that we will push characters into one at a time
  const uniqueCharacters = [];

  // loop through the given string, char by char
  for (let i = 0; i < str.length; i++) {
    // if char is NOT yet array  (use .includes)
    if (!uniqueCharacters.includes(str[i])) {
      // push that chr into the arr
      uniqueCharacters.push(str[i])
    }
    // else (meaning we've seen it already) we don't need to do anything.
  }

  // join the array of unique chars into a string and return it.
  return uniqueCharacters.join('');
}

function uniqueUsingReduce(str) {
  const arr = str.split(''); // make the string an array of characters so we can use .reduce
  
  return arr.reduce((accum, char) => {
    // If the accum doesn't have this char yet, add it
    if (!accum.includes(char)) return accum + char;
    // otherwise, carry over our accum
    else return accum;
  }, '')
}

console.log(unique('abc')) // abc
console.log(unique('aabba')) // ab
console.log(unique('')) // ''
console.log(unique('ddddddddddddd')) // d 