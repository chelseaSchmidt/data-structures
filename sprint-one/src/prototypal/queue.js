var Queue = function() {
  let newQueue = Object.create(queueMethods);
  return newQueue;
};

var queueMethods = {
  enqueue: function (string) {
    let maxKey = Math.max(0, ...Object.keys(this));
    this[maxKey + 1] = string;
  },
  dequeue: function () {
    let minKey = Math.min(...Object.keys(this));
    let dequeued = this[minKey];
    delete this[minKey];
    return dequeued;
  },
  size: function () {
    let numericKeys = Object.keys(this).filter(function(key) {
      return Number(key);
    });
    return numericKeys.length;
  }
};


