class BinarySearchTree {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  //take a numeric value and insert it into a valid place in the tree
  insert (value) {
    if (value > this.value && this.right === null) {
      this.right = new BinarySearchTree(value);
    } else if (value < this.value && this.left === null) {
      this.left = new BinarySearchTree(value);
    } else if (value !== this.value) {
      let side = value > this.value ? this.right : this.left;
      side.insert(value);
    }
  }

  //check if a given value is present in the tree and return boolean if so
  contains (target) {
    if (target > this.value && this.right === null) {
      return false;
    } else if (target < this.value && this.left === null) {
      return false;
    } else if (target === this.value) {
      return true;
    } else {
      let side = target > this.value ? this.right : this.left;
      return side.contains(target);
    }
  }

  //traverse the tree depth-first, running a call on each node
  depthFirstLog (cb) {
    cb(this.value);
    if (this.left !== null) {
      this.left.depthFirstLog(cb);
    }
    if (this.right !== null) {
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
