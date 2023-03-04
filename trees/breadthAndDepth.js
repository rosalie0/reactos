function node(value) {
  return {
    value,
    children: [],
  };
}
var a = node('a');
var b = node('b');
var c = node('c');
var d = node('d');
var e = node('e');
var f = node('f');
var g = node('g');
var h = node('h');
var i = node('i');
var j = node('j');
var k = node('k');
var l = node('l');
var m = node('m');

a.children.push(b, c, d);
b.children.push(e);
e.children.push(k, l);
c.children.push(f, g, h);
h.children.push(m);
d.children.push(i, j);

const logger = node => {
  console.log(node)
}

/*
Write a series of iterator functions for trees.
breadthFirst
depthFirstSearch
Each of these function will take a node of the tree and a callback. The function will iterate through the child nodes, calling the callback function on each of them. The difference between them is the order in which they iterate.
*/

const breadthFirst = (node, cb) => {
  // node:
  // value,
  //  children: [],

  // make an array of the nodes we encounter
  // push the node onto array
  let notYetSearchedNodes = [node];

  // loop through nodes children
  for (let i = 0; i < notYetSearchedNodes.length; i++) {
    // get the current node
    const node = notYetSearchedNodes[i];

    // do the callback here 
    cb(node.value);

    // NOW see if this child has any children
    if (node.children.length > 0) {
      // if so, push those onto the notYetSearchedNodes
      notYetSearchedNodes = notYetSearchedNodes.concat(node.children);
    }
  }

}

// TEST!
breadthFirst(a, logger)

const depthFirstSearch = (node, cb) => {
  //
}



