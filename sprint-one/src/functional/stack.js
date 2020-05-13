var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    //add a string to top of the stack
    //get max key + 1
    let keys = Object.keys(storage);
    let nextAvailable = Math.max(0,...keys) + 1;
    //add property at max key + 1 set to input value
    storage[nextAvailable] = value;
  };

  someInstance.pop = function() {
    //remove and return string on the top of the stack
    //get max key
    let keys = Object.keys(storage);
    let maxKey = Math.max(...keys);
    //store value at max key
    let value = storage[maxKey];
    //delete property at max key
    delete storage[maxKey];
    //return stored value
    return value;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
