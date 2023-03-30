//

/*
my notes:
[-4, -3, 2, 5, 7]
64

   merge sort on neg and pos:
 l               r
[9, 64]     [4, 25, 49]
   [4, ]
*/

function sortedSquaredArray(array) {
  // Write your code here.
  const negativeProducts = [];
  const positiveProducts = [];
  for (let i = 0; i < array.length; i++) {
    const n = array[i];
    if (n < 0) negativeProducts.unshift(n * n);
    else positiveProducts.push(n * n);
  }

  // merge sort the negative and positive products:
  // these two arrs are already sorted themselves.
  const merged = [];
  let left = 0;
  let right = 0;
  while (left < negativeProducts.length && right < positiveProducts.length) {
    if (negativeProducts[left] < positiveProducts[right]) {
      merged.push(negativeProducts[left]);
      left++;
    } else {
      merged.push(positiveProducts[right]);
      right++;
    }
  }

  //copy over the rest of which everone wasnt merged
  if (left < negativeProducts.length)
    for (let i = left; i < negativeProducts.length; i++)
      merged.push(negativeProducts[i]);
  if (right < positiveProducts.length)
    for (let i = right; i < positiveProducts.length; i++)
      merged.push(positiveProducts[i]);

  return merged;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
