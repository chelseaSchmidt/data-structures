var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // create a new node with the value and add it to the list
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

  // remove the first node in the list and return removed value
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
      list.head.pointer = oldHeadNode.next;
      list.head.value = list[list.head.pointer].value;
    }
    // return the old head node's value
    return oldHeadNode.value;
  };

  // check if list contains target value
  list.contains = function(target) {
    // make a variable for the current node we're looking at
    let currentNode = list[list.head.pointer];
    // while that node is not the right one
    while (currentNode.value !== target) {
      // if the next node is empty
      if (currentNode.next === null) {
        return false;
      }
      // set the current to the next one
      currentNode = list[currentNode.next];
    }
    return true;
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
