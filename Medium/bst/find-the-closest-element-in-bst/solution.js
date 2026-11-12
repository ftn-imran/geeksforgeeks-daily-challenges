/* Structure of a Binary Search Tree node
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @param {number} k
 * @return {number}
 */

class Solution {
  minDiff(root, k) {
    let ans = Math.abs(root.data - k);

    function solve(node) {
      if (node === null) {
        return;
      }

      let diff = Math.abs(node.data - k);
      if (diff < ans) {
        ans = diff;
      }

      if (node.data === k) {
        return;
      } else if (k < node.data) {
        solve(node.left);
      } else {
        solve(node.right);
      }
    }

    solve(root);
    return ans;
  }
}
