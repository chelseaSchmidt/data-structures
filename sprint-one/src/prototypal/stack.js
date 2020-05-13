var Stack = function() {
  let newStack = Object.create(stackMethods);
  return newStack;
};

var stackMethods = {
  push: function (string) {
    let maxKey = Math.max(0, ...Object.keys(this));
    this[maxKey + 1] = string;
  },
  pop: function () {
    let maxKey = Math.max(0, ...Object.keys(this));
    let popped = this[maxKey];
    delete this[maxKey];
    return popped;
  },
  size: function () {
    let numericKeys = Object.keys(this).filter(function(key) {
      return Number(key);
    });
    return numericKeys.length;
  }
};


