class Stack {
  constructor() {
    this.name = 'newStack';
  }

  push(string) {
    let numericKeys = Object.keys(this).filter(function(key) {
      return Number(key);
    });
    let maxKey = Math.max(0, ...numericKeys);
    this[maxKey + 1] = string;
  }

  pop() {
    let numericKeys = Object.keys(this).filter(function(key) {
      return Number(key);
    });
    let maxKey = Math.max(0, ...numericKeys);
    let popped = this[maxKey];
    delete this[maxKey];
    return popped;
  }

  size() {
    let numericKeys = Object.keys(this).filter(function(key) {
      return Number(key);
    });
    return numericKeys.length;
  }
}