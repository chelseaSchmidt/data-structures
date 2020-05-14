var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // update the tail property with a new node
  // if the head is null update that too (it's the same as the tail)

  // create a new node with the value and add it to the list
  // update the tail property to point to that new node
  // inputs: value to insert
  // outputs: none, side effect of adding a node to the list
  // complexity: constant
  // edge cases: if the head is null, update that too
  list.addToTail = function(value) {
  };

  // use list.head to delete that property from the list
  // update list.head to point to the next node
  // update the head to point to the next node
  // return the previous head node
  // inputs: nothing
  // outputs: value of the removed node, side effect of removing head node
  // complexity: constant
  // edge cases: if there's no head, return nothing
  list.removeHead = function() {
  };

  // locate a target (ie a value at a key) inside the list
  // look at the head, if it's not the target look at the next one, etc.
  // search for the input value, if it's there return true, false otherwise
  // inputs: target value
  // output: boolean
  // complexity: O(n)
  // edge cases: head/tail is null, return nothing
  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null; //key

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
