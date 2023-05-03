function findClosestValueInBst(tree, target) {
  // Write your code here.
  // temp for a 'closestThusFar' to keep track / compare with ?
  let closestSoFar = tree.value;

  const traverse = (current) => {
    const currentDifference = Math.abs(current.value - target);
    const closestSoFarDifferene = Math.abs(closestSoFar - target);
    // if true, we have our new closestSoFar
    if (currentDifference < closestSoFarDifferene) closestSoFar = current.value;

    if (current.left) traverse(current.left);
    if (current.right) traverse(current.right);
  };

  traverse(tree); // call our helper.

  return closestSoFar;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
