/**
 * @param {number[][]} adj
 * @returns {number}
 */

class Solution {
  countEdges(adj) {
    let total = 0;
    const n = adj.length;
    for (let i = 0; i < n; i++) {
      total += adj[i].length;
    }
    return total >> 1;
  }
}
