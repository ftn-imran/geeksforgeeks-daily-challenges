/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

class Solution {
  getCount(s, k) {
    const groupCounts = new Int32Array(26);

    const splitAndCountGroups = (left, right) => {
      if (left === right) {
        const charIndex = s.charCodeAt(left) - 97;
        groupCounts[charIndex]++;
        return;
      }

      const mid = (left + right) >>> 1;
      splitAndCountGroups(left, mid);
      splitAndCountGroups(mid + 1, right);

      if (s.charCodeAt(mid) === s.charCodeAt(mid + 1)) {
        const sharedCharIndex = s.charCodeAt(mid) - 97;
        groupCounts[sharedCharIndex]--;
      }
    };

    if (s.length > 0) {
      splitAndCountGroups(0, s.length - 1);
    }

    const countQualifiedChars = (charIndex) => {
      if (charIndex === 26) {
        return 0;
      }
      const qualified = groupCounts[charIndex] === k ? 1 : 0;
      return qualified + countQualifiedChars(charIndex + 1);
    };

    return countQualifiedChars(0);
  }
}
