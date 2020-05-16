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

Deletion (extra credit):
  take a key (and a current node?)
    search for that key
    if the node has no branches, delete it
    if the node only has one branch, replace it with the branched node
    if the node has two branches
      replace the current node with the in order successor
*/
class BinarySearchTree {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  //Justification: take a numeric value and insert it into a valid place in the tree
  //I: numeric value
  //O: nothing
  //SE: modifies the tree
  //C: O (log n)
  //E: if either or both branches are null
  //Explanation: take a numeric value and insert it into a valid place in the tree

  insert (value) {
    //if value is greater and this.right is null
    if (value > this.value && this.right === null) {
      //add a new tree at this.right with value
      this.right = new BinarySearchTree(value);
    } else if (value < this.value && this.left === null) {
    //if value is lesser and this.left is null
      //add a new tree at this.left
      this.left = new BinarySearchTree(value);
    } else if (value !== this.value) {
      //if value is greater, store this.right; else, store this.left
      let side = value > this.value ? this.right : this.left;
      //recurse on the stored tree
      side.insert(value);
    }
  }

  //Justification/Explanation: check if a given value is present in the tree and return boolean if so
  //I: a target value
  //O: boolean
  //SE: none
  //C: O (log n)
  //EC: none
  //
  contains (target) {
    //if value is greater and this.right is null
    if (target > this.value && this.right === null) {
      //return false
      return false;
    } else if (target < this.value && this.left === null) {
    //if value is lesser and this.left is null
      //return false
      return false;
    } else if (target === this.value) {
    //if target is equal to this.value,
      //return true
      return true;
    } else {
    // else
      //if value is greater, store this.right; else, store this.left
      let side = target > this.value ? this.right : this.left;
      //recurse on the stored tree
      return side.contains(target);
    }
  }

  //Justification/explanation: traverse the tree depth-first, running a call on each node
  //I: a callback function to run on each node
  //O: none
  //SE: none-ish
  //C: O(n)
  //EC: none

  depthFirstLog (cb) {
    //run cb on this.value
    cb(this.value);
    //if there is a left branch
    if (this.left !== null) {
      //recurse on left branch with cb
      this.left.depthFirstLog(cb);
    }
    //if there is a right branch
    if (this.right !== null) {
      //recurse on right branch with cb
      this.right.depthFirstLog(cb);
    }
  }

}


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(log n)
 * contains: O(log n)
 * depthFirstLog: O(n)
 */
