/* Structure of a Binary Search Tree node
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
};
*/

/**
 * @param {Node} r1
 * @param {Node} r2
 * @return {Number[]}
 */

class Solution {
  findCommon(r1, r2) {
    const ans = [];

    function existsInBST(node, target) {
      if (node === null) {
        return false;
      }
      if (node.data === target) {
        return true;
      }
      if (target < node.data) {
        return existsInBST(node.left, target);
      } else {
        return existsInBST(node.right, target);
      }
    }

    function solve(node) {
      if (node === null) {
        return;
      }
      solve(node.left);
      if (existsInBST(r2, node.data)) {
        ans.push(node.data);
      }
      solve(node.right);
    }

    solve(r1);
    return ans;
  }
}
