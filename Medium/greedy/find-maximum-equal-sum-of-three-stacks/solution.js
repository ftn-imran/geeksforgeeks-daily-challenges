/**
 * @param {number[]} s1
 * @param {number[]} s2
 * @param {number[]} s3
 * @returns {number}
 */

class Solution {
  maxEqualSum(s1, s2, s3) {
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;

    for (let x of s1) sum1 += x;
    for (let x of s2) sum2 += x;
    for (let x of s3) sum3 += x;

    function solve(i, j, k) {
      if (i === s1.length || j === s2.length || k === s3.length) {
        return 0;
      }

      if (sum1 === sum2 && sum2 === sum3) {
        return sum1;
      }

      if (sum1 >= sum2 && sum1 >= sum3) {
        sum1 -= s1[i];
        return solve(i + 1, j, k);
      } else if (sum2 >= sum1 && sum2 >= sum3) {
        sum2 -= s2[j];
        return solve(i, j + 1, k);
      } else {
        sum3 -= s3[k];
        return solve(i, j, k + 1);
      }
    }

    return solve(0, 0, 0);
  }
}
