/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
  longestSubarrayDivK(arr, k) {
    const first = new Int32Array(k);

    const solve = (i, rem) => {
      if (i === arr.length) return 0;

      rem = (rem + arr[i]) % k;
      if (rem < 0) rem += k;

      let curr = 0;
      if (rem === 0) {
        curr = i + 1;
      } else if (first[rem] !== 0) {
        curr = i + 1 - first[rem];
      } else {
        first[rem] = i + 1;
      }

      const next = solve(i + 1, rem);
      return curr > next ? curr : next;
    };

    return solve(0, 0);
  }
}
