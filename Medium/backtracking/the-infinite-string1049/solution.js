/**
 * @param {string} s
 * @param {number} pos
 * @return {char}
 */

class Solution {
  posInfinite(s, pos) {
    const n = s.length;
    let len = n;
    let step = 0;

    while (len < pos) {
      step++;
      len = len * 2 + step;
    }

    while (pos > n) {
      const prevLen = (len - step) / 2;

      if (pos > prevLen + step) {
        pos = len - pos + 1;
      } else if (pos > prevLen) {
        return "$";
      }

      len = prevLen;
      step--;
    }

    return s[pos - 1];
  }
}
