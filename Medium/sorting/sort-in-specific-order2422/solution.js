/**
 * @param {number[]} arr
 * @returns {void}
 */

class Solution {
  sortIt(arr) {
    const odds = [];
    const evens = [];

    function splitArray(i) {
      if (i === arr.length) {
        return;
      }
      if (arr[i] % 2 !== 0) {
        odds.push(arr[i]);
      } else {
        evens.push(arr[i]);
      }
      splitArray(i + 1);
    }

    function fillArray(startIdx, list, k) {
      if (k === list.length) {
        return startIdx;
      }
      arr[startIdx] = list[k];
      return fillArray(startIdx + 1, list, k + 1);
    }

    splitArray(0);
    odds.sort((a, b) => b - a);
    evens.sort((a, b) => a - b);

    let nextIdx = fillArray(0, odds, 0);
    fillArray(nextIdx, evens, 0);
  }
}
