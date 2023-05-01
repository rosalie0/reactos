function nonConstructibleChange(coins) {
  // Write your code here.
  // output will always have answer, there is no return false
  // a loop that has a counter=0, stops when counter his end of array.
  // updates by one.
  const total = coins.reduce((accum, curr) => accum + curr, 0);
  const sorted = coins.sort((a, b) => a - b);

  // if we don't have a 1 coin, immediately return.
  if (sorted[0] !== 1) return 1;

  let sums = []; // an array of all the possible sums.

  for (let i = 0; i < sorted.length; i++) {
    const currentCoin = sorted[i];
    sums.push(currentCoin);
    const stoppingPoint = sums.length - 1;
    // have to sum the current coin with all previous sums:
    //AKA everything to the left of its placement in `sums`
    for (let k = 0; k < stoppingPoint; k++) {
      const newSum = currentCoin + sums[k]; // this is a sum i can make
      const last = sums[sums.length - 1];
      const secondFromLast = sums[sums.length - 2];
      // If the difference between the last two values that are possible
      // is more than one, (eg 3 and 5) then that means
      // there's a value i can't make.
      // And that value is to just add 1 to the smaller of the two (2nd-to-last)
      if (last - secondFromLast > 1) return secondFromLast + 1;
      sums.push(newSum);
    }
  }
  return total + 1;
}
