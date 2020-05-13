var Queue = function() {
  var someInstance = {};

  var storage = {};

  someInstance.enqueue = function(value) {
    let keys = Object.keys(storage);
    let nextAvailable = Math.max(0,...keys) + 1;
    storage[nextAvailable] = value;
  };

  someInstance.dequeue = function() {
    let keys = Object.keys(storage);
    let minKey = Math.min(...keys);
    let minVal = storage[minKey];
    delete storage[minKey];
    return minVal;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
