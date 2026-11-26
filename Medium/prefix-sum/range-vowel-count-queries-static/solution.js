/**
 * @param {string} s
 * @param {number[][]} queries
 * @returns {number[]}
 */

class Solution {
  countVowels(s, queries) {
    const n = s.length;
    const tree = new Int32Array(4 * n);

    const isVowel = (ch) =>
      ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u"
        ? 1
        : 0;

    const build = (node, start, end) => {
      if (start === end) {
        tree[node] = isVowel(s[start]);
        return;
      }
      const mid = Math.floor((start + end) / 2);
      build(2 * node, start, mid);
      build(2 * node + 1, mid + 1, end);
      tree[node] = tree[2 * node] + tree[2 * node + 1];
    };

    const countInRange = (node, start, end, l, r) => {
      if (r < start || end < l) return 0;
      if (l <= start && end <= r) return tree[node];
      const mid = Math.floor((start + end) / 2);
      return (
        countInRange(2 * node, start, mid, l, r) +
        countInRange(2 * node + 1, mid + 1, end, l, r)
      );
    };

    build(1, 0, n - 1);

    const q = queries.length;
    const ans = new Array(q);

    for (let i = 0; i < q; i++) {
      ans[i] = countInRange(1, 0, n - 1, queries[i][0], queries[i][1]);
    }

    return ans;
  }
}
