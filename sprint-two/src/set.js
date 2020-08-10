var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = new HashTable();
  return set;
};

var setPrototype = {};

//add an item to the set
setPrototype.add = function(item) {
  this._storage.insert(item, true);
};

//check if a set contains an item
setPrototype.contains = function(target) {
  return this._storage.retrieve(target) === true;
};

//remove a value from the set
setPrototype.remove = function(target) {
  this._storage.remove(target);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add: O(1)
 * contains: O(1)
 * remove: O(1)
 */
