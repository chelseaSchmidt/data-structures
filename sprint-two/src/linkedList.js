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
    //create node and pass in value
    let newNode = Node(value);
    // if list.tail is null
    if (list.tail === null) {
      // initialize the head and and tail pointers
      list.head = {pointer: 0};
      list.tail = {pointer: 0};
      list[list.tail.pointer] = newNode;
      list.head.value = value;
    } else { // if there is already at least one node in the list
      //update old tail node's next property to point to the new node
      list[list.tail.pointer++].next = list.tail.pointer;
      // add the new node to the list at tail
      list[list.tail.pointer] = newNode;
    }
    // set the tail to have the newnode's value so the tests pass
    list.tail.value = value;
  };

  // use list.head to delete that property from the list
  // update the head to point to the next node
  // return the previous head node
  // inputs: nothing
  // outputs: value of the removed node, side effect of removing head node
  // complexity: constant
  // edge cases: if there's no head, return nothing
  list.removeHead = function() {
    // if list.head is null
    if (list.head === null) {
      return;
    }
    // store the current head node to return later
    let oldHeadNode = list[list.head.pointer];
    // if the tail and head pointers are equal
    if (list.head.pointer === list.tail.pointer) {
      // set list.head and list.tail to null
      list.head = null;
      list.tail = null;
    } else {
      // update the list.head index to the next node
      //debugger;
      list.head.pointer = oldHeadNode.next;
      list.head.value = list[list.head.pointer].value;
    }
    // return the old head node's value
    return oldHeadNode.value;
  };

  // locate a target (ie a value at a key) inside the list
  // look at the head, if it's not the target look at the next one, etc.
  // search for the input value, if it's there return true, false otherwise
  // inputs: target value
  // output: boolean
  // complexity: O(n)
  // edge cases: head/tail is null, return nothing
  list.contains = function(target) {
    // make a variable for the current node we're looking at
    // while that node is not the right one
      // if the next node is empty
        // return
      // set the current to the next one
    // return the current node
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
