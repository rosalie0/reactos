function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
  redShirtSpeeds.sort((a, b) => a - b); // sorted min->max

  // depending on fastest, sort blue either min->max or max->min
  if (fastest) blueShirtSpeeds.sort((a, b) => b - a);
  else blueShirtSpeeds.sort((a, b) => a - b);

  // sorting them in opposite direction of each other yields fastest solution
  // sorting them in same direction,
  // (this pairs the slowest with the slowest and the fastest with the fastest)
  // and is the worst solution.

  // now that the arrays are sorted in desired ways, use index to pair the red and blue shirts.
  // remember that the speed of the bike is ALWAYS the larger of the two numbers in the pair.
  // has nothing to do with 'fastest'
  let total = 0;
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    // add to the total the larger of the num in both red and blue at this index
    const red = redShirtSpeeds[i];
    const blue = blueShirtSpeeds[i];
    if (red > blue) total += red;
    else total += blue;
  }

  return total;
}
