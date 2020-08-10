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
// Explanation: take a value to add:
//  - add it to the node list
//  - and add a spot for it in the edges list by referring to the node list indexes
Graph.prototype.addNode = function(node) {
  let index = this.nodes.length;
  this.nodes.push(node);
  this.edges[index] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  return _.reduce(this.nodes, (contains, node) => contains || node === target, false);
};

// Explanation: take a node to search for, traverse the nodes looking for a match, if there is:
//  - store the index that node is at
//  - set that index to undefined
//  - remove the property keyed by that index from the edges object
Graph.prototype.removeNode = function(target) {
  let nodeIndex = _.indexOf(this.nodes, target);
  if (nodeIndex !== -1) {
    this.nodes[nodeIndex] = undefined;
    this.edges[nodeIndex] = undefined;
  }
};

// Explanation: take two nodes then traverse the nodes array to get their indexes:
  // if they both exist
    // check one of them to see if it has an edge to the other
Graph.prototype.hasEdge = function(fromNode, toNode) {
  let fromIndex = _.indexOf(this.nodes, fromNode);
  let toIndex = _.indexOf(this.nodes, toNode);
  if (fromIndex === -1 || toIndex === -1) {
    return false;
  }
  return _.contains(this.edges[fromIndex], toIndex);

};

// Justification: Add an edge between two nodes
Graph.prototype.addEdge = function(fromNode, toNode) {
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
Graph.prototype.removeEdge = function(fromNode, toNode) {
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


