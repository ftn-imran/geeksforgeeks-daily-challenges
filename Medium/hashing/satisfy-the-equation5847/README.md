# Two Pairs with Same Sum

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/satisfy-the-equation5847/1)
📊 Difficulty: Medium
📂 Category: Hashing

## 📝 Description

Given an array **arr[]** of positive integers, find four indices **a** , **b** , **c** , and **d** such that arr[a] + arr[b] = arr[c] + arr[d], where a, b, c, d are all distinct indices.

- If multiple such quadruplets exist, return the one that is lexicographically smallest when the indices are considered in the order a, b, c, d.

- If no such quadruplet exists, return {-1, -1, -1, -1}.

- Ensure a < b and c < d, and the pair (a, b) is lexicographically smaller than the pair (c, d).

 Example:

```
Input: arr[] = [3, 4, 7, 1, 2, 9, 8]
Output: [0, 2, 3, 5]
Explanation: arr[0] + arr[2] = 3 + 7 = 10, arr[3] + arr[5] = 1 + 9 = 10.
This is the lexicographically smallest such quadruplet of indices.
```

```
Input: arr[] = [1, 2, 3, 3]
Output: [-1, -1, -1, -1]
Explanation: No two distinct pairs of indices produce the same sum.
```

**Constraints:**
- 4 <= arr.size() <= 10<sup>3</sup>
- 1 <= arr[i] <= 10<sup>7</sup>
