var Stack = function() {
  let newStack = {};
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {
  push: function(value) {
    let keys = Object.keys(this);
    //reassign keys to be filtered for only numeric
    keys = keys.filter(function(key) {
      return Number(key);
    });
    let nextAvailable = Math.max(0, ...keys) + 1;
    this[nextAvailable] = value;
  },
  pop: function() {
    let keys = Object.keys(this);
    //reassign keys to be filtered for only numeric
    keys = keys.filter(function(key) {
      return Number(key);
    });
    let maxKey = Math.max(...keys);
    let maxVal = this[maxKey];
    delete this[maxKey];
    return maxVal;
  },
  size: function() {
    //get numeric keys
    //return length of numeric keys
    let keys = Object.keys(this).filter(function(key) {
      return Number(key);
    });
    console.log(keys);
    return keys.length;
  }
};


