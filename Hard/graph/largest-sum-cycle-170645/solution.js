/**
 * @param {number[]} edge
 * @return {number}
 */

class Solution {
  largestSumCycle(edge) {
    let n = edge.length;
    let vis = new Int32Array(n);
    let pathSum = new Int32Array(n);
    let ans = -1;

    function dfs(node, sum) {
      vis[node] = 1;
      pathSum[node] = sum;

      let next = edge[node];
      if (next !== -1) {
        if (vis[next] === 0) {
          dfs(next, sum + next);
        } else if (vis[next] === 1) {
          ans = Math.max(ans, sum - pathSum[next] + next);
        }
      }

      vis[node] = 2;
    }

    for (let i = 0; i < n; i++) {
      if (vis[i] === 0) {
        dfs(i, i);
      }
    }

    return ans;
  }
}
