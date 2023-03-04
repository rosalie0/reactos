// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size


// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


function chunk(arr, chunkSize) {
  // outer empty array, chunkHolder
  const chunkHolder = [];
  // outer 
  let i = 0;
  while (i < arr.length) {
    const chunk = [];
    //inner loop where we push on until k===size
    for (let k=0; k < chunkSize; k++) {
      // don't get an element if it's beyond the arr!
      if (k+i > arr.length-1) break;
      const element = arr[k+i];
      chunk.push(element)
    }
    // push chunk onto chunkHolder
    chunkHolder.push(chunk);
    // move i to start where next chunk should start
    i += chunkSize
  }
  
  // return chunkHolder
  return chunkHolder;
}


console.log( chunk([1, 2, 3, 4], 2) ) // --> [[ 1, 2], [3, 4], [5]]
console.log( chunk([1, 2, 3, 4, 5], 2) ) // --> [[ 1, 2], [3, 4], [5]]
console.log( chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) ) // --> --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
console.log( chunk([1, 2, 3, 4, 5], 4) ) // --> [[ 1, 2, 3, 4], [5]]
console.log( chunk([1, 2, 3, 4, 5], 10) ) //--> [[ 1, 2, 3, 4, 5]]

