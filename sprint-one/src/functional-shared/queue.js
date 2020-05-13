var Queue = function() {
  let newQueue = {};
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {
  enqueue: function(string) {
    let keys = Object.keys(this);
    keys = keys.filter(function(key) {
      return Number(key);
    });
    let nextAvailable = Math.max(0, ...keys) + 1;
    this[nextAvailable] = string;
  },
  dequeue: function() {
    let keys = Object.keys(this);
    keys = keys.filter(function(key) {
      return Number(key);
    });
    let minKey = Math.min(...keys);
    let minVal = this[minKey];
    delete this[minKey];
    return minVal;
  },
  size: function() {
    let keys = Object.keys(this).filter(function(key) {
      return Number(key);
    });
    return keys.length;
  }
};


