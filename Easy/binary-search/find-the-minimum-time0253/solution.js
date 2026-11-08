/**
 * @param {number} n
 * @param {number} s1
 * @param {number} s2
 * @returns {number}
 */

class Solution {
  minTime(n, s1, s2) {
    const searchMinTime = (low, high) => {
      if (low > high) return low;

      const midTime = (low + high) >>> 1;
      const totalScanned = Math.floor(midTime / s1) + Math.floor(midTime / s2);

      if (totalScanned >= n) {
        return searchMinTime(low, midTime - 1);
      }
      return searchMinTime(midTime + 1, high);
    };

    return searchMinTime(1, Math.min(s1, s2) * n);
  }
}
