# K-th Missing in Natural Numbers

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/k-th-missing-element-in-natural-numbers/1)
📊 Difficulty: Medium
📂 Category: Sorting

## 📝 Description

Given an array **arr[]** of distinct positive integers and a positive integer **k** . Consider an infinite sequence of natural numbers starting from 1. The task is to remove all elements present in arr[] from this sequence.

Find the k-th smallest number in the remaining sequence.

 **Note:** Your solution must run in O(1) auxiliary space.

 Example:

```
Input: arr[] = [1, 9, 5, 2], k = 6
Output: 10
Explanation: After removing [1, 2, 5, 9] from the natural numbers, the remaining sequence is: 3, 4, 6, 7, 8, 10, 11, .... and so on. The 6th number in this sequence is 10, so the answer is 10.
```

```
Input: arr[] = [1, 2, 3, 4], k = 1
Output: 5
Explanation: After removing [1, 2, 3, 4] from the natural numbers, the remaining sequence is: 5, 6, 7, .... and so on. The 1st number in the sequence is 5, so the answer is 5.
```

**Constraints:**
- 1 <= arr.size() <= 10<sup>5</sup>
- 1 <= arr[i], k <= 10<sup>6</sup>
- All elements of arr are distinct.
