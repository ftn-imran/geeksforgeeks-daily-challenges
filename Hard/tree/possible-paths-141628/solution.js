/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} queries
 * @return {number[]}
 */

class Solution {
  maximumWeight(n, edges, queries) {
    let par = Array.from({ length: n + 1 }, (_, i) => i);
    let sz = new Array(n + 1).fill(1);

    const find = (x) => (par[x] === x ? x : (par[x] = find(par[x])));

    edges.sort((a, b) => a[2] - b[2]);

    let q = queries.map((val, i) => [val, i]).sort((a, b) => a[0] - b[0]);
    let res = new Array(queries.length);
    let paths = 0,
      j = 0;

    for (let [limit, idx] of q) {
      while (j < edges.length && edges[j][2] <= limit) {
        let u = find(edges[j][0]);
        let v = find(edges[j][1]);

        if (u !== v) {
          paths += sz[u] * sz[v];
          if (sz[u] < sz[v]) [u, v] = [v, u];
          par[v] = u;
          sz[u] += sz[v];
        }
        j++;
      }
      res[idx] = paths;
    }

    return res;
  }
}
