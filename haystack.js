/*
Implement a function called indexOf that takes in strings. 
The indexOf function takes a "haystack" string, and a "needle" string to search for. 
So, indexOf("hello world", "or") would return 7. 
The indexOf function will return the first instance of the needle string.
For example indexOf('my name is louis', 'is') would return 8 since the word is happens before the is in louis. 
Do not use string prototype indexOf
*/

function indexOf(haystack, needle) {
  // Loop through haystack with i
  for (let i = 0; i < haystack.length; ++i) {
    // grab the chunk that starts with index i and is of same length as needle
    const grabbedChunk = haystack.slice(i, needle.length + i);

    // see if grabbedChunk === needle
    // if yes, we're done! return the index we found it at. (i)
    if (grabbedChunk === needle) return i;

  }
  // outside of loop, return -1 (not found) 
  return -1
}

console.log( indexOf('hello world', 'or') ); // 7
console.log( indexOf('hello worldddddd', 'hi') ); // -1
console.log( indexOf('my name is louis', 'is') ); // 8