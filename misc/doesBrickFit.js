/* 
Write the function that takes three dimensions of a brick: 
height(a), width(b) and depth(c) 
and returns true if this brick can fit into a hole 
with the width(w) and height(h).

Examples
doesBrickFit(1, 1, 1, 1, 1) ➞ true
doesBrickFit(1, 2, 1, 1, 1) ➞ true
doesBrickFit(1, 2, 2, 1, 1) ➞ false
doesBrickFit(3, 3, 3, 4, 4) ➞ true

*/
const doesBrickFit = (
  brickHeight,
  brickWidth,
  brickDepth,
  holeWidth,
  holeHeight
) => {
  // make arrays for both items
  const brickDimensions = [brickHeight, brickWidth, brickDepth];
  const holeDimensions = [holeWidth, holeHeight];

  // sort them
  brickDimensions.sort((a, b) => a - b);
  holeDimensions.sort((a, b) => a - b);

  const brickDimension1 = brickDimensions.shift();
  const brickDimension2 = brickDimensions.shift();

  const holeDimension1 = holeDimensions.shift();
  const holeDimension2 = holeDimensions.shift();

  if (holeDimension1 >= brickDimension1 && holeDimension2 >= brickDimension2)
    return true;
  else return false;
};

console.log(doesBrickFit(1, 1, 1, 1, 1)); //➞ true
console.log(doesBrickFit(1, 2, 1, 1, 1)); //➞ true
console.log(doesBrickFit(1, 2, 2, 1, 1)); //➞ false
console.log(doesBrickFit(3, 3, 3, 4, 4)); //➞ true
