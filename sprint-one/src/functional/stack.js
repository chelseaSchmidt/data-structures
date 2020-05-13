var Stack = function() {
  var someInstance = {};

  var storage = {};

  someInstance.push = function(value) {
    let keys = Object.keys(storage);
    let nextAvailable = Math.max(0,...keys) + 1;
    storage[nextAvailable] = value;
  };

  someInstance.pop = function() {
    let keys = Object.keys(storage);
    let maxKey = Math.max(...keys);
    let value = storage[maxKey];
    delete storage[maxKey];
    return value;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
