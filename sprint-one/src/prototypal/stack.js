var Stack = function() {
  //return new stack object that will delegate failed lookups to stackMethods object
  let newStack = Object.create(stackMethods);
  return newStack;
};

var stackMethods = {
  //push, accepts a string:
  push: function (string) {
    //get max numeric key from stack
    let maxKey = Math.max(0, ...Object.keys(this));
    //add string at max numeric key + 1
    this[maxKey + 1] = string;
  },
  //pop
  pop: function () {
    //get max numeric key
    let maxKey = Math.max(0, ...Object.keys(this));
    //store value at max numeric key
    let popped = this[maxKey];
    //remove max numeric key
    delete this[maxKey];
    //return stored max value
    return popped;
  },
  //size
  size: function () {
    //filter stack keys array for numeric keys
    let numericKeys = Object.keys(this).filter(function(key) {
      return Number(key);
    });
    //return length of numeric keys array
    return numericKeys.length;
  }
};


