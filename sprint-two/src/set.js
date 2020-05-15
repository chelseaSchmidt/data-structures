var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

//Justification: add an item to the set
//Spec:
// I: value to add
// O: nothing
// SE: contents of the set are modified
// C: constant time
// EC: called with no item: do nothing
//Explanation: Take the input value and add it into the set
setPrototype.add = function(item) {
  //push the item into the storage array
  this._storage.push(item);
};

//Justification: check if a set contains an item
//Spec:
// I: item to look for
// O: boolean
// SE: nothing
// C: O(n)
// EC: empty array
//Explanation: take the item, look through the storage for a match, return true if match, false if not
setPrototype.contains = function(target) {
  //return reduction of all items in set to a true or false value
  return _.reduce(this._storage, function(doesContain, item) {
    return doesContain || item === target;
  }, false);
};

setPrototype.remove = function(item) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
