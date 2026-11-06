/**
 * @param {String} s
 * @param {number[]} p
 * @return {number}
 */

class Solution {
  getMinimumDays(s, p) {
    let n = s.length;
    let arr = s.split("");
    let count = 0;

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        count++;
      }
    }

    if (count === 0) return 0;

    for (let i = 0; i < n; i++) {
      let idx = p[i];

      if (idx > 0 && arr[idx] === arr[idx - 1]) {
        count--;
      }
      if (idx < n - 1 && arr[idx] === arr[idx + 1]) {
        count--;
      }

      arr[idx] = "?";

      if (count === 0) return i + 1;
    }

    return 0;
  }
}
