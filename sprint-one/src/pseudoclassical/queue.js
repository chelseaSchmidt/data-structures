var Queue = function() {
  this.name = 'newQueue';
};

Queue.prototype.enqueue = function(string) {
  let numericKeys = Object.keys(this).filter(function(key) {
    return Number(key);
  });
  let maxKey = Math.max(0, ...numericKeys);
  this[maxKey + 1] = string;
};

Queue.prototype.dequeue = function() {
  let numericKeys = Object.keys(this).filter(function(key) {
    return Number(key);
  });
  let minKey = Math.min(...numericKeys);
  let dequeued = this[minKey];
  delete this[minKey];
  return dequeued;
};

Queue.prototype.size = function() {
  let numericKeys = Object.keys(this).filter(function(key) {
    return Number(key);
  });
  return numericKeys.length;
};


