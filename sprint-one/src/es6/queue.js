class Queue {
  constructor() {
    this.name = 'newQueue';
  }
  enqueue(string) {
    let numericKeys = Object.keys(this).filter(function(key) {
      return Number(key);
    });
    let maxKey = Math.max(0, ...numericKeys);
    this[maxKey + 1] = string;
  }

  dequeue() {
    let numericKeys = Object.keys(this).filter(function(key) {
      return Number(key);
    });
    let minKey = Math.min(...numericKeys);
    let dequeued = this[minKey];
    delete this[minKey];
    return dequeued;
  }

  size() {
    let numericKeys = Object.keys(this).filter(function(key) {
      return Number(key);
    });
    return numericKeys.length;
  }
}
