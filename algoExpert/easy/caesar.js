function caesarCipherEncryptor(string, key) {
  // Write your code here.
  // obj that maps letter to string

  // caesar string
  let caesarString = "";
  const alphabet = `abcdefghijklmnopqrstuvwxyz`;
  // loop through the string
  for (let i = 0; i < string.length; i++) {
    // get current letter
    const curr = string[i];

    // get the index of current letter in the alphabet string
    let value = alphabet.indexOf(curr);
    // do +key to each letters value
    value += key;
    // mod by 26 (for the wrap-around effect, this is also the alphabet length)
    value = value % alphabet.length; // 28 -> 2

    // alphabet[newValue] gets pushed on
    caesarString += alphabet[value];
  }

  // return caesar string
  return caesarString;
}
