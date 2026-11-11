/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */

class Solution {
  checkWithinK(arr, k) {
    const lastSeen = new Map();

    function solve(i) {
      if (i === arr.length) {
        return false;
      }

      let num = arr[i];

      if (lastSeen.has(num) && i - lastSeen.get(num) <= k) {
        return true;
      }

      lastSeen.set(num, i);
      return solve(i + 1);
    }

    return solve(0);
  }
}
