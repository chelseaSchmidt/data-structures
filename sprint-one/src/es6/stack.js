class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.name = 'newStack';
  }

}

Stack.prototype.push = function(string) {
  //filter instance's keys for numeric keys
  let numericKeys = Object.keys(this).filter(function(key) {
    return Number(key);
  });
  //get max key
  let maxKey = Math.max(0, ...numericKeys);
  //add string at max key + 1
  this[maxKey + 1] = string;
};

Stack.prototype.pop = function() {
  //filter instance's keys for numeric keys
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
  //filter instance's keys for numeric keys
  let numericKeys = Object.keys(this).filter(function(key) {
    return Number(key);
  });
  //return length of numeric keys collection
  return numericKeys.length;
};