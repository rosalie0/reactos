// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.

//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Whyyyyyyyyy?') --> 0 

function vowels(str) {
  // vowelArray is an array of a, e, i, o, u characters
  const vowelArray = ['a', 'e', 'i', 'o', 'u']
  
  // start numOfVowels at 0
  let numOfVowels = 0;
  
  // make the str lowercase
  const sanitizedStr = str.toLowerCase();
  
  // loop through the string, looking at each character
  for (let i = 0; i < sanitizedStr.length; i++){
    // if vowelArray includes current character 
    if (vowelArray.includes(sanitizedStr[i])) {
      // +1 numOfVowels
      numOfVowels++;
    }
  }

  // return numOfVowels
  return numOfVowels;
}


console.log(
  vowels('Hi There!'), vowels('Why do you ask?'), vowels('Whyyyyyyyyy?')
) 
  //--> 3, --> 4, --> 0 

function vowels(str) {
  //initialize a counter
  let count = 0;
  //initialize an array with the vowels in it
  const checker = ['a', 'e', 'i', 'o', 'u'];
  //loop through the entire string
  for (let i = 0; i <= str.length - 1; i++) {
    let letter = str[i];
    //using the includes method we will see if
    //any vowel in the checker is part of the str
    if (checker.includes(letter.toLowerCase())) {
      //increase the count
      count++;
    }
  }
  return count;
}

function vowels(str) {
  //initialize a counter
  let count = 0;
  //make sure the string passed in is all lowercase
  //to account for any uppercase letters
  let lower = str.toLowerCase();
  //loop through the whole string
  for (let i = 0; i <= lower.length - 1; i++) {
  //if we find a cowel add 1 to the count
    if (lower[i] === 'a') {
      count++;
    } else if (lower[i] === 'e') {
      count++;
    } else if (lower[i] === 'i') {
      count++;
    } else if (lower[i] === 'o') {
      count++;
    } else if (lower[i] === 'u') {
      count++;
    }
  }
  return count;
}

function vowels(str) {
  //using regex check if any vowel is in the string
  const matches = str.match(/[aeiou]/gi); 
  //if we have a match return the length otherwise 0. 
  return matches ? matches.length : 0;
}