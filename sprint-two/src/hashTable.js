

var HashTable = function() {
  this._limit = 8;
  this._itemCount = 0;
  this._storage = LimitedArray(this._limit);
};

//Justification/explanation: double the storage size and limit and re-insert all items into hash table
//I: nothing
//O: nothing
//SE: double limit and make a new storage array
//C: O(n)
//EC: none
HashTable.prototype._reHash = function(multiplier) {
  //make a new hash table
  let newTable = new HashTable();
  //update the new hash table's limit to be double the current table's limit
  newTable._limit = this._limit * multiplier;
  //update the new hash table's storage to be double in limit to current table's limit
  newTable._storage = LimitedArray(newTable._limit);
  //for each bucket of current hash table's storage...
  this._storage.each(bucket => {
    //for each tuple in the current bucket...
    _.each(bucket, tuple => newTable.insert(tuple[0], tuple[1]));
      //insert tuple into new hash table
  });
  //reassign the old storage to new hash table storage
  this._storage = newTable._storage;
  //reassign the old limit to new hash table's limit value
  this._limit = newTable._limit;
};

//Justification/explanation: insert a value to storage at the index translated by the key
//Inputs: a key and a value
//Outputs: nothing
//Side effects: storage gets modified
//Constraints: O(1)
//Edge cases: inserting a key that already exist should overwrite the old one
HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  //store whatever's at index in storage
  let bucket = this._storage.get(index);
  //if stored value is undefined, set it to and empty array
  if (bucket === undefined) {
    bucket = [];
  }
  //filter out the [k, v] from the bucket
  const newBucket = _.filter(bucket, tuple => tuple[0] !== key);
  // this means it's not an update, itemcount shouldn't change
  if (newBucket.length === bucket.length) {
    this._itemCount++;
  }
  //push [k,v] into the the bucket
  newBucket.push([key, value]);
  //set storage at the index to the stored value
  this._storage.set(index, newBucket);
  if (this._itemCount / this._limit >= 0.75) {
    this._reHash(2);
  }
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

//Justification/explanation: remove a key/value pair from a bucket at index translated by the key
//Input: a key
//Output: nothing
//Side effects: the key/value at the index gets removed
//Constraints: O(1)-ish
//Edge cases: if there's no bucket at the index do nothing
HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  //store the bucket at the index from storage
  const bucket = this._storage.get(index);
  //if the bucket is defined
  if (bucket !== undefined) {
    //filter for every tuple that doesn't have the key and store the filtered bucket
    const newBucket = _.filter(bucket, tuple => tuple[0] !== key);
    //set storage at the index to the new bucket
    this._storage.set(index, newBucket);
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


