/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
  firstElementKTime(arr, k) {
    const freq = new Map();

    function solve(index) {
      if (index === arr.length) {
        return -1;
      }

      let num = arr[index];
      let count = (freq.get(num) || 0) + 1;

      if (count === k) {
        return num;
      }

      freq.set(num, count);
      return solve(index + 1);
    }

    return solve(0);
  }
}
