class Solution {
  findPattern(s, idx = 0) {
    let n = s.length;
    if (idx === n) return 1;
    if ((n - idx) % 2 !== 0) return 0;

    let countX = 0;
    while (idx < n && s[idx] === "x") {
      countX++;
      idx++;
    }

    if (countX === 0) return 0;

    let countY = 0;
    while (idx < n && s[idx] === "y") {
      countY++;
      idx++;
    }

    if (countX !== countY) return 0;

    return this.findPattern(s, idx);
  }
}
