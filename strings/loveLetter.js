function anonLoveLetter(L, N) {
  // split them into arrays of characters
  const loveLetterCharacters = L.toLowerCase().split('');
  const newspaperCharacters = N.toLowerCase().split('');

  for (let i = 0; i < loveLetterCharacters.length; i++) {
    const current = loveLetterCharacters[i]; // get current char I want to be able to 'write'
    console.log('current:', current)
    if (current===' ') continue;
    // see if newspaperCharacters contains this char
    if (newspaperCharacters.includes(current)) {
      const indexOfCurrent = newspaperCharacters.indexOf(current);
      newspaperCharacters.splice(indexOfCurrent, 1) // remove this element from the array
      console.log(newspaperCharacters)
    }
    // if it doesn't , it's impossible to write this loveletter
    else return false;
  }
  // if we made it through the entire loveLetterCharacters loop without returning false, we can write it!
  return true;
}

console.log(anonLoveLetter('i love you', 'iiiiloooveyasdgjgfu')); // true
console.log(anonLoveLetter('i love you', 'qwertyuiopasdfghjkzxcvn')); // false