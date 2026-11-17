/**
 * @param {number} l
 * @param {number} r
 * @returns {number}
 */

class Solution {
  xorTill(n) {
    if (n <= 0 || n % 4 === 3) return 0;
    return n ^ this.xorTill(n - 1);
  }

  findXOR(l, r) {
    return this.xorTill(r) ^ this.xorTill(l - 1);
  }
}
