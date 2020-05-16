// a tree has a root node and any number of child nodes
// child nodes can also have any number of child nodes
// connections between nodes are called branches
// a node with no branches is called a leaf
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

//Justification: add a child to a node
//Explanation: Take the input value and make a new tree with that value,
// then put that tree into the children array of the tree on which addChild was called
treeMethods.addChild = function(value) {
  let newTree = Tree(value);
  this.children.push(newTree);
};

//Justification: check if a given value exists inside the tree
//Explanation: Compare the target value to tree's value; if they match, return true; else, recurse on children; and so on; if there are no children, return false
treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    return _.reduce(this.children, function(doesContain, child) {
      return doesContain || child.contains(target);
    }, false);
  } else {
    return false;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1)
 * contains: O(n) - where n is the number of nodes, not number of levels in the tree
 */
