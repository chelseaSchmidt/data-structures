

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//Justification/explanation: insert a value to storage at the index translated by the key
//Inputs: a key and a value
//Outputs: nothing
//Side effects: storage gets modified
//Constraints: O(1)
//Edge cases: none
HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  //store whatever's at index in storage
  let bucket = this._storage.get(index);
  //if stored value is undefined, set it to and empty array
  if (bucket === undefined) {
    bucket = [];
  }
  //push [k,v] into the the stored value
  bucket.push([key, value]);
  //set storage at the index to the stored value
  this._storage.set(index, bucket);
};

//Justification/explanation: take a key and translating the key into an index and retrieving the value from that indexes bucket
//Inputs: a key
//Output: the value
//Side effects: none
//Constraints: O(1)-ish
//Edge cases: if there's no bucket at the index, return undefined
HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  //get the bucket at index from storage
  let bucket = this._storage.get(index);
  //if the bucket is undefined, return undefined
  if (bucket === undefined) {
    return;
  }
  //for each tuple in the bucket
  //check if the key matches the first element, if it does
  let match = _.find(bucket, tuple => tuple[0] === key);
  if (match !== undefined) {
    return match[1];
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


