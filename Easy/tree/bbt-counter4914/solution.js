/**
 * @param {number} h
 * @returns {number}
 */

class Solution {
  countBT(h) {
    if (h <= 1) return 1;

    let mod = 1000000007n;
    let a = 1n,
      b = 1n;

    for (let i = 2; i <= h; i++) {
      let c = (b * b + 2n * a * b) % mod;
      a = b;
      b = c;
    }

    return Number(b);
  }
}
