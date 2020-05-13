var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    //add a string to top of the stack
    //get max key + 1
    //add property at max key + 1 set to input value
  };

  someInstance.pop = function() {
    //remove and return string on the top of the stack
    //get max key
    //store value at max key
    //delete property at max key
    //return stored value
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
