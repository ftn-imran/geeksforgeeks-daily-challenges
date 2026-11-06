# Maximum Subarray Sum with One Square Allowed

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/maximum-sum-subarray--143510/1)
📊 Difficulty: Medium
📂 Category: Array

## 📝 Description

Given an integer array **arr[]** , find the maximum subarray sum by squaring at most one element.

 Example:

```
Input: arr[] = [-1, -2, 3, -2, 3]
Output: 10
Explanation: The subarray {3, -2, 3} with squaring -2 will give the maximum sum as 3 + 4 + 3 = 10.
```

```
Input: arr[] = [-4, -4, -2, 5, 2, -1]
Output: 27
Explanation: The subarray {5, 2} with squaring 5 will give a maximum sum of 25 + 2 = 27.
```

**Constraints:**
- 1 <= arr.size() <= 10<sup>5</sup>
- -10<sup>3</sup> <= arr[i] <= 10<sup>3</sup>
