var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // create a new node with the value and add it to the list
  list.addToTail = function(value) {
    //create node and pass in value
    let newNode = Node(value);
    if (list.tail === null) {
      list.head = {pointer: 0};
      list.tail = {pointer: 0};
      list[list.tail.pointer] = newNode;
      list.head.value = value;
    } else { // if there is already at least one node in the list
      list[list.tail.pointer++].next = list.tail.pointer;
      list[list.tail.pointer] = newNode;
    }
    // set the tail to have the newnode's value so the tests pass
    list.tail.value = value;
  };

  // remove the first node in the list and return removed value
  list.removeHead = function() {
    if (list.head === null) {
      return;
    }
    let oldHeadNode = list[list.head.pointer];
    if (list.head.pointer === list.tail.pointer) {
      list.head = null;
      list.tail = null;
    } else {
      list.head.pointer = oldHeadNode.next;
      list.head.value = list[list.head.pointer].value;
    }
    return oldHeadNode.value;
  };

  // check if list contains target value
  list.contains = function(target) {
    if (list.head === null) {
      return false;
    }
    let currentNode = list[list.head.pointer];
    while (currentNode.value !== target) {
      if (currentNode.next === null) {
        return false;
      }
      currentNode = list[currentNode.next];
    }
    return true;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * list.contains(): O(n)
 * list.removeHead(): O(1)
 * list.addToTail(): O(1)
*/
