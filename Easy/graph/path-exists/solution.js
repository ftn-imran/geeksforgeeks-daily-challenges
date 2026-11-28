/**
 * @param {number[][]} adj
 * @param {number} u
 * @param {number} v
 * @returns {boolean}
 */

class Solution {
  checkPath(adj, u, v) {
    const visited = new Uint8Array(adj.length);

    const dfs = (node) => {
      if (node === v) return true;
      visited[node] = 1;

      const neighbors = adj[node];
      for (let i = 0; i < neighbors.length; i++) {
        const next = neighbors[i];
        if (!visited[next] && dfs(next)) {
          return true;
        }
      }

      return false;
    };

    return dfs(u);
  }
}
