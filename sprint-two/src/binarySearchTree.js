/*
a tree with two branches for each node (left and right)
the keys on the right must be larger than the keys on the left

definitions:
  node - a spot that holds a keyed object and has up to 2 branches
  branch - a connection from a parent node to a child node
  in order successor - the next highest key for a given key
    NOTE: the successor isn't neccessarily a branch of the given node

operations:
insertion - adding a node
deletion - removing a node (must preserve order - this is tricky!)
search - finding a node

Search:
  take a key and a current node (start with root)
    check if the current node is the correct one
      if it is, we're done!
      otherwise, check if the key is larger or smaller than the current node
        if it's smaller, recur with the right node (right side is always smaller)
        if it's larger, recur with the left node (left side is always larger)

Insertion:
  take a key and a current node (start with root)
    look at the right or left branch depending if the key is smaller or larger
      if that branch has a node, recur with that node
      otherwise, insert the key at that branch

Deletion:
  take a key (and a current node?)
    search for that key
    if the node has no branches, delete it
    if the node only has one branch, replace it with the branched node
    if the node has two branches
      replace the current node with the in order successor
*/
var BinarySearchTree = function(value) {
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
