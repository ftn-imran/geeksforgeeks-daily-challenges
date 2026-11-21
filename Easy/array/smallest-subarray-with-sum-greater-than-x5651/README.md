# Smallest Subarray Sum Greater Than x

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/smallest-subarray-with-sum-greater-than-x5651/1)
📊 Difficulty: Easy
📂 Category: Array

## 📝 Description

Given an integer **x** and ** ** an array of integers, **arr[]** . Find the length of the smallest subarray whose sum is strictly greater than **x** .

If no such subarray exists, return **0** .

 Example:

```
Input: x = 51, arr[] = [1, 4, 45, 6, 0, 19]
Output: 3
Explanation: The smallest subarray with a sum greater than 51 is [4, 45, 6], whose sum is 55 and length is 3.
```

```
Input: x = 100, arr[] = [1, 10, 5, 2, 7]
Output: 0
Explanation: No subarray has a sum greater than 100. Hence, the answer is 0.
```

**Constraints:**
- 1 <= x, arr.size() <= 10<sup>5</sup>
- 0 <= arr[i] <= 10<sup>4</sup>
