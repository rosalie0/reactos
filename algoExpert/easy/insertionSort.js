function insertionSort(array) {
  // outer loop for "tentatively sorted list"
  for (let i = 1; i < array.length; i++) {
    // inner try to insert the +1 of it
    // i is the index for division between what is sorted and what is not.

    for (let k = i; k > 0; k--) {
      // if our item to sort is less than k, swap
      if (array[k] < array[k - 1]) {
        const temp = array[k];
        array[k] = array[k - 1];
        array[k - 1] = temp;
      }
    }
  }
  return array;
}
