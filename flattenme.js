///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ben Note: This code I was asked to write from scratch. Notice how the function itself has my pseudo-code interweaved into it - this is a great practice to help your interviewer follow your logic and to help you walk away with commented code.

// Array Flatten
// Flatten the array such that the output would be [1,2,3,4,5,6,7,8,9,10]

const flattenMe = [1,[2,[[3,4,[5,[6,7]]],8]],9,10];

function deepFlatten(currentArray) { 
  //recursion - base case of when its its not an array
  if (!Array.isArray(currentArray)) return currentArray;

  // If it is an array...
  // go through each element
  const results = [];
  
  for (let i = 0; i < currentArray.length; i++) {
    const element = currentArray[i];
    // if its not an array, push this value
    if (!Array.isArray(element)) results.push(element)
  // if current element is an array, call recursively on it
    else {
  // and concat this result onto what we have (this result will be flat)    
      const flattenedElement = deepFlatten(element);
      results.push(...flattenedElement);
    }
  }
  
  return results;
}

console.log(deepFlatten(flattenMe));
//  [1,2,3,4,5,6,7,8,9,10]