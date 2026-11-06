/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
  subarrayXor(arr) {
    const n = arr.length;
    if ((n & 1) === 0) return 0;

    let ans = 0;
    for (let i = 0; i < n; i += 2) {
      ans ^= arr[i];
    }
    return ans;
  }
}
