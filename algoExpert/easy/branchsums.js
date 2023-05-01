// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
  // dfs
  // create an array to push all the sums onto
  const branchsums = [];

  const dfs = (node, currentSum) => {
    // update currentSum with our node's value.
    currentSum += node.value;

    // are we at a leaf? if so, we are done with this sum.
    const isLeaf = !node.left && !node.right;
    if (isLeaf) {
      branchsums.push(currentSum);
      return;
    }

    // if not at leaf, keep going.
    if (node.left) dfs(node.left, currentSum); // left must go first bc they want left to right branches.
    if (node.right) dfs(node.right, currentSum);
  };

  dfs(root, 0); // call helper

  // return that array
  return branchsums;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
