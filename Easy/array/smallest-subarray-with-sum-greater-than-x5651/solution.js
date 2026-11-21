/**
 * @param {number[]} arr
 * @param {number} x
 * @return {number}
 */

class Solution {
  smallestSubWithSum(arr, x) {
    const n = arr.length;
    const INF = n + 1;

    const solve = (l, r) => {
      if (l === r) {
        return arr[l] > x ? 1 : INF;
      }

      const mid = (l + r) >> 1;
      let best = solve(l, mid);
      if (best === 1) return 1;

      const rightBest = solve(mid + 1, r);
      if (rightBest < best) best = rightBest;
      if (best === 1) return 1;

      let leftSum = 0;
      for (let i = l; i <= mid; i++) {
        leftSum += arr[i];
      }

      let j = mid + 1;
      let rightSum = arr[j];

      for (let i = l; i <= mid; i++) {
        while (leftSum + rightSum <= x && j < r) {
          j++;
          rightSum += arr[j];
        }

        if (leftSum + rightSum > x) {
          const len = j - i + 1;
          if (len < best) best = len;
        } else {
          break;
        }

        leftSum -= arr[i];
      }

      return best;
    };

    const ans = solve(0, n - 1);
    return ans > n ? 0 : ans;
  }
}
