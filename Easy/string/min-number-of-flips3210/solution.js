/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
  minFlips(s) {
    function countFlips(i, expected) {
      if (i === s.length) {
        return 0;
      }

      let flip = 0;
      if (s[i] !== expected) {
        flip = 1;
      }

      let nextExpected = expected === "0" ? "1" : "0";
      return flip + countFlips(i + 1, nextExpected);
    }

    let startWith0 = countFlips(0, "0");
    let startWith1 = countFlips(0, "1");

    return Math.min(startWith0, startWith1);
  }
}
