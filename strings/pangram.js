function isPangram(string){
  const alphabet = 'qwertyuiopasdfghjklzxcvbnm';
  
  let flattenedString = ''
  // flatten our given string to see only the unique characters
  for (let i = 0; i <string.length; i++) {
    const c = string[i].toLowerCase(); //cast to lowercase for sanitization
    // if its an alphabetical letter, put it on our flattenedString
    if (alphabet.includes(c)) flattenedString += c;

  }
  
  // If we have a chr in the alphabet that is NOT in our string, it's not a pangram
  // loop through alphabet
  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i]
    // if our given string doesn't have the letter from the alphabet, return false
    console.log(letter)
    if (!flattenedString.includes(letter)) return false
  }
  return true
}

console.log(isPangram('Cwm fjord bank glyphs vext quiz'))