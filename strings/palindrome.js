// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const palindrome = (str) => {
  // look at first and last chr
  const first = str[0];
  const last = str[str.length-1];
  // if different return false
  if (first !== last) return false;
  // if same...
  // make ver of the string missing first and last
  const sliced = str.slice(1, str.length-1);
  // base case checks
  if (sliced.length === 1) return false;
  if (sliced.length === 0) return true;
  return palindrome(sliced)
}

console.log(palindrome("abba"))
console.log(palindrome("abcdefg"))