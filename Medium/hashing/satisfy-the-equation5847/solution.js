/**
 * @param {number[]} arr
 * @return {number[]}
 */

class Solution {
  findPairs(arr) {
    const n = arr.length;
    const map = new Map();
    let best = null;

    const isBetter = (cand) => {
      if (!best) return true;
      for (let k = 0; k < 4; k++) {
        if (cand[k] !== best[k]) return cand[k] < best[k];
      }
      return false;
    };

    const search = (i) => {
      if (i >= n - 1) return;
      for (let j = i + 1; j < n; j++) {
        const sum = arr[i] + arr[j];
        if (map.has(sum)) {
          const [a, b] = map.get(sum);
          if (a !== i && b !== i && b !== j) {
            const cand = [a, b, i, j];
            if (isBetter(cand)) {
              best = cand;
            }
          }
        } else {
          map.set(sum, [i, j]);
        }
      }
      search(i + 1);
    };

    search(0);
    return best || [-1, -1, -1, -1];
  }
}
