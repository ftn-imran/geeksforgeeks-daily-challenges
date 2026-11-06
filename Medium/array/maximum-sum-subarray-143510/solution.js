/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
  maximumSubarray(arr) {
    let noSq = arr[0];
    let withSq = arr[0] * arr[0];
    let ans = withSq;

    for (let i = 1; i < arr.length; i++) {
      let x = arr[i];
      let sq = x * x;

      let op1 = withSq + x;
      let op2 = (noSq > 0 ? noSq : 0) + sq;
      withSq = op1 > op2 ? op1 : op2;

      noSq = (noSq > 0 ? noSq : 0) + x;

      if (withSq > ans) {
        ans = withSq;
      }
    }

    return ans;
  }
}
