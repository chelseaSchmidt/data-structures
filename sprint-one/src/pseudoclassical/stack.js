var Stack = function() {
  this.name = 'newStack';
};

Stack.prototype.push = function(string) {
  let numericKeys = Object.keys(this).filter(function(key) {
    return Number(key);
  });
  let maxKey = Math.max(0, ...numericKeys);
  this[maxKey + 1] = string;
};

Stack.prototype.pop = function() {
  let numericKeys = Object.keys(this).filter(function(key) {
    return Number(key);
  });
  let maxKey = Math.max(0, ...numericKeys);
  let popped = this[maxKey];
  delete this[maxKey];
  return popped;
};

Stack.prototype.size = function() {
  let numericKeys = Object.keys(this).filter(function(key) {
    return Number(key);
  });
  return numericKeys.length;
};


