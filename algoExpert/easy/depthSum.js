function nodeDepths(root) {
  // Write your code here.
  // variable keeping track of sum of node-depths
  let depthSum = 0;
  // helper func with args node, currentDepth

  const dfs = (node, currentDepth) => {
    // add our current nodes depth to the depthSum.
    depthSum += currentDepth;
    // if left child, call recursively with a depth+1
    if (node.left) dfs(node.left, currentDepth + 1);
    // if right child, call recursively with a depth+1
    if (node.right) dfs(node.right, currentDepth + 1);
  };

  // call our helper
  dfs(root, 0); // depth of root is 0, as per sample input.
  // return depthSum
  return depthSum;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
