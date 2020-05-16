/*
    a
  /  \
  b--c
nodes = [a, b, c]

adjacencies = {
  0: [1, 2],
  1: [0, 2],
  2: [0, 1]
}
*/

// Instantiate a new graph
var Graph = function() {
  let graph = Object.create(Graph.prototype);
  graph.nodes = [];
  graph.edges = {};
  return graph;
};

// Add a node to the graph, passing in the node's value.
// Justification: Add a node to the graph
// Inputs: a value to add
// Outputs: nothing
// Side effects: a node gets added the graph
// Complexity: O(1)
// Edge cases: if the value already exists, how do we handle it?
// Explanation: take a value to add:
//  - add it to the node list
//  - and add a spot for it in the edges list by referring to the node list indexes
Graph.prototype.addNode = function(node) {
  // store the length of graph.nodes
  let index = this.nodes.length;
  // add the value to graph.nodes
  this.nodes.push(node);
  // add a new property to edges at key = stored length and value = []
  this.edges[index] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
// Justification: Check if a target node is present in the graph
// Inputs: a value to search for
// Outputs: boolean
// Side effects: none
// Complexity: O(n)
// Edge cases: none
// Explanation: takes a node to search for, traverse the nodes of graph and look for a match, if there is return true, else false
Graph.prototype.contains = function(target) {
  // return reduction of graph.nodes to a boolean using ||
  return _.reduce(this.nodes, (contains, node) => contains || node === target, false);
};

// Removes a node from the graph.
// Justification: Remove a node from the graph as well as its edges
// Inputs: a value to remove
// Outputs: nothing
// Side effects: a value and its edges get removed from the graph
// Complexity: O(n)
// Edge cases: none
// Explanation: take a node to search for, traverse the nodes looking for a match, if there is:
//  - store the index that node is at
//  - set that index to undefined
//  - remove the property keyed by that index from the edges object
Graph.prototype.removeNode = function(target) {
  // get indexOf node in graph.nodes
  let nodeIndex = _.indexOf(this.nodes, target);
  // if it exists:
  if (nodeIndex !== -1) {
    // set that index in graph.nodes to undefined
    this.nodes[nodeIndex] = undefined;
    // delete the property keyed by index in graph.edges
    this.edges[nodeIndex] = undefined;
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// Justification: Check if two nodes have an association in graph.edges
// Inputs: the two nodes to look for and edge between
// Output: boolean
// Side effects: none
// Complexity: O(n)
// Edge cases: if one of the nodes doesn't exist there is no edge
// Explanation: take two nodes then traverse the nodes array to get their indexes:
  // if they both exist
    // check one of them to see if it has an edge to the other
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // store indices of fromNode and toNode from graph.nodes
  let fromIndex = _.indexOf(this.nodes, fromNode);
  let toIndex = _.indexOf(this.nodes, toNode);
  if (fromIndex === -1 || toIndex === -1) {
    return false;
  }
  return _.contains(this.edges[fromIndex], toIndex);

};

// Connects two nodes in a graph by adding an edge between them.
// Justification: Add an edge between two nodes
// Inputs: two nodes to add an edge between
// Output: nothing
// Side effects: graph.edges gets updated for both nodes
// Complexity: O(n)
// Edge cases: if either of the nodes don't exist, do nothing (add a test for this)
// Explanation: taking two nodes, get their indexes
  // using those indexes, update graph.edges to include each other's indexes
Graph.prototype.addEdge = function(fromNode, toNode) {
  // store the indexes of fromNode and toNode (in graph.nodes)
  let fromIndex = _.indexOf(this.nodes, fromNode);
  let toIndex = _.indexOf(this.nodes, toNode);
  if (fromIndex !== -1 && toIndex !== -1) {
    // push the stored index fromNode into toNode's edges
    this.edges[fromIndex].push(toIndex);
    // push the stored index toNode into fromNodes edges
    this.edges[toIndex].push(fromIndex);
  }
};

// Remove an edge between any two specified (by value) nodes.
// Justification: Remove an edge between two nodes
// Inputs: two node to remove an edge between
// Output: nothing
// Side effects: graph.edges gets updated for both nodes
// Complexity: O(n)
// Edge cases: if either of the nodes don't exist, do nothing (add a test)
// Explanation: taking two nodes, get their indexes
  // using those indexes, set the corresponding entry in each other's graph.edges to undefined
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // store the indexes fromNode and toNode
  let fromIndex = _.indexOf(this.nodes, fromNode);
  let toIndex = _.indexOf(this.nodes, toNode);
  if (fromIndex !== -1 && toIndex !== -1) {
    // store the indexes of each others index in graph.edges
    let fromEdges = this.edges[fromIndex];
    let toEdges = this.edges[toIndex];
    let fromEdgeUpdateIndex = _.indexOf(fromEdges, toIndex);
    let toEdgeUpdateIndex = _.indexOf(toEdges, fromIndex);
    // set those indexes to undefined in each others graph.edges
    fromEdges[fromEdgeUpdateIndex] = undefined;
    toEdges[toEdgeUpdateIndex] = undefined;
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: O(1)
 * contaions: O(n)
 * removeNode: O(n)
 * hasEdge: O(n)
 * addEdge: O(n)
 * removeEdge: O(n)
 * forEachNode: O(n)
 */


