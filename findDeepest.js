/*
----- Prompt -----
Given a binary tree, write a function called findDeepest that will return the node in the tree with greatest depth. You may assume there is a unique deepest node.
findDeepest(a) //val: f
*/

// Code given to interviewer below

function node(val) {
  return {
    val,
    left: null,
    right: null
  };
}
let a = node('a');
let b = node('b');
let c = node('c');
let d = node('d');
let e = node('e');
let f = node('f');

a.left = b;
a.right = c;
b.right = d;
d.left = f;
c.left = e;

const findDeepestBFS = (node) => {
  // breadth first search
  // put node on nodesNotYetSeen
  const nodes = [node]
  // iterate through nodes not yet seen
  for (let i = 0; i < nodes.length; ++i) {
    // get node from [i]
    const current = nodes[i];
    // push on its children
    if (current.left) nodes.push(current.left)
    if (current.right) nodes.push(current.right)
  }
  // the very last nodesNotYetSeen on this queue will be our deepest?
  return nodes[nodes.length - 1]
}

const findDeepestDFS = (node) => {
  // recurse through the tree, with an additional variable 'depth'
  // have a maxDepth and deepest node
  // start these values at 0 and our root
  let maxDepth = 0;
  let deepestNode = node;
  // start depth at 0

  const recurse = (current, depth) => {
    // if theres a left node, call this recursion on it with depth+1
    if (current.left) recurse(current.left, depth + 1)

    // if theres right node, same
    if (current.right) recurse(current.right, depth + 1)

    // if there are no children, see if this depth is more or less our maxDepth
    if (depth > maxDepth) {
      // if yes, overwrite these
      maxDepth = depth;
      deepestNode = current;
    }
    
  }

  // start our recursion
  recurse(node, 0);

  return deepestNode
}
console.log(findDeepestDFS(a))