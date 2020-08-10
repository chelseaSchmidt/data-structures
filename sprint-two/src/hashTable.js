

var HashTable = function() {
  this._limit = 8;
  this._itemCount = 0;
  this._storage = LimitedArray(this._limit);
};

//double or half the storage size and limit and re-insert all items into hash table
HashTable.prototype._reHash = function(multiplier) {
  let newTable = new HashTable();
  newTable._limit = this._limit * multiplier;
  newTable._storage = LimitedArray(newTable._limit);
  this._storage.each(bucket => {
    _.each(bucket, tuple => newTable.insert(tuple[0], tuple[1]));
  });
  this._storage = newTable._storage;
  this._limit = newTable._limit;
};

//insert a value to storage at the index translated by the key
HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  let bucket = this._storage.get(index);
  if (bucket === undefined) {
    bucket = [];
  }
  //filter out the [k, v] from the bucket so we update it if it exists
  const newBucket = _.filter(bucket, tuple => tuple[0] !== key);
  // this means it's an update, itemcount shouldn't change
  if (newBucket.length === bucket.length) {
    this._itemCount++;
  }
  newBucket.push([key, value]);
  this._storage.set(index, newBucket);
  if (this._itemCount / this._limit >= 0.75) {
    this._reHash(2);
  }
};

//take a key and translating the key into an index and retrieving the value from that indexes bucket
HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  let bucket = this._storage.get(index);
  if (bucket === undefined) {
    return;
  }
  let match = _.find(bucket, tuple => tuple[0] === key);
  if (match !== undefined) {
    return match[1];
  }
};

//remove a key/value pair from a bucket at index translated by the key
HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  const bucket = this._storage.get(index);
  if (bucket !== undefined) {
    // check if we are actually removing something
    const newBucket = _.filter(bucket, tuple => tuple[0] !== key);
    this._storage.set(index, newBucket);
    // this means we actually removed something so itemCount changes
    if (newBucket.length < bucket.length) {
      if (--this._itemCount / this._limit < 0.25) {
        this._reHash(0.5);
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(1) except when calling reHash - becomes O(n)
 * remove: O(1) except when calling reHash - becomes O(n)
 * retrieve: O(1) except worst-case O(n)
 */


