function findThreeLargestNumbers(array) {
  // array of top 3? or maybe just loose variables?
  // do array because the trickle-down when something gets replaced seems annoying-
  // we can instead just use the array to keep things sorted in our top 3.
  // fill with -Infinity , NOT nulls.
  const top3 = [-Infinity, -Infinity, -Infinity];

  // iterate through array
  for (let i = 0; i < array.length; i++) {
    // if current is greater or equal than top3[0], unshift into front and pop.
    const current = array[i];
    if (current >= top3[0]) {
      top3.splice(0, 0, current); // insert current at index 0
      top3.pop(); // pop off last ele (no longer in our top 3)
    }
    // do same but looking at 2nd place -  MUST be else if ,
    // or else compares current with what used to be top3[0]
    else if (current >= top3[1]) {
      top3.splice(1, 0, current); // insert current at index 1
      top3.pop(); // pop off last ele (no longer in our top 3)
    } else if (current >= top3[2]) {
      top3.splice(2, 0, current); // insert current at index 2
      top3.pop(); // pop off last ele (no longer in our top 3)
    }
    // else, just go to next ele
  }

  // top3 looks like [10, 4, 1] but output wants it  min->max.
  // therefore reverse.
  return top3.reverse();
}
