var Stack = function() {
  this.name = 'newStack';
};

Stack.prototype.push = function(string) {
  //filter for numeric keys
  let numericKeys = Object.keys(this).filter(function(key) {
    return Number(key);
  });
  //get max key
  let maxKey = Math.max(0, ...numericKeys);
  //add string at max key + 1
  this[maxKey + 1] = string;
};

Stack.prototype.pop = function() {
  //filter for numeric keys
  let numericKeys = Object.keys(this).filter(function(key) {
    return Number(key);
  });
  //get max key
  let maxKey = Math.max(0, ...numericKeys);
  //store value at max key
  let popped = this[maxKey];
  //remove max key
  delete this[maxKey];
  //return stored value
  return popped;
};

Stack.prototype.size = function() {
  //filter for numeric keys
  let numericKeys = Object.keys(this).filter(function(key) {
    return Number(key);
  });
  //return length of filtered keys array
  return numericKeys.length;
};


