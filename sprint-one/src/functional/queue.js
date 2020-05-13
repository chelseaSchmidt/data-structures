var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //Add a string to the back of the queue

    //get next available numeric key
    let keys = Object.keys(someInstance);
    let nextAvailable = Math.max(...keys) + 1;
    //add value at next available key to storage object
    storage[nextAvailable] = value;
  };

  someInstance.dequeue = function() {
    //Remove and return the string at the front of the queue

    //get minimum numeric key
    let keys = Object.keys(someInstance);
    //store value at min key
    let minKey = Math.min(...keys);
    let minVal = storage[minKey];
    //remove property at min key
    delete storage[minKey];
    //return stored value
    return minVal;
  };

  someInstance.size = function() {
    //return the number of items in the queue
    return Object.keys(storage).length;
  };

  return someInstance;
};
