/**
 * @param {string[]} arr
 * @returns {string[]}
 */

class Solution {
  generateUsernames(arr) {
    let st = new Set(arr);
    let mp = new Map();
    let res = [];

    const findNext = (s, k) => {
      if (st.has(s + k)) return findNext(s, k + 1);
      st.add(s + k);
      mp.set(s, k + 1);
      return s + k;
    };

    for (let i = 0; i < arr.length; i++) {
      let s = arr[i];
      if (!mp.has(s)) {
        mp.set(s, 1);
        res.push(s);
      } else {
        res.push(findNext(s, mp.get(s)));
      }
    }
    return res;
  }
}
