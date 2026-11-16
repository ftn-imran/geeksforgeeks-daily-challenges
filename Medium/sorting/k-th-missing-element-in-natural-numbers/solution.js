class Solution {
  findKthSmall(arr, k) {
    arr.sort((a, b) => a - b);

    const search = (low, high, idx) => {
      if (low > high) {
        return k + idx;
      }

      let mid = (low + high) >> 1;

      if (arr[mid] - (mid + 1) >= k) {
        return search(low, mid - 1, mid);
      } else {
        return search(mid + 1, high, idx);
      }
    };

    return search(0, arr.length - 1, arr.length);
  }
}
