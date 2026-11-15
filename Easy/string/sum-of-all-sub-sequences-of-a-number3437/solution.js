/**
 * @param {string} s
 * @return {number}
 */

class Solution {
  subsequenceSum(s) {
    const MOD = 1000000007;
    let sum = 0;
    let ways = 1;

    function solve(i) {
      if (i === s.length) {
        return;
      }

      let digit = Number(s[i]);
      sum = (sum * 2 + digit * ways) % MOD;
      ways = (ways * 2) % MOD;

      solve(i + 1);
    }

    solve(0);
    return sum;
  }
}
