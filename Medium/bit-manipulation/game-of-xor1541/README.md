# XOR of All Subarray XORs

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/game-of-xor1541/1)
📊 Difficulty: Medium
📂 Category: Bit Manipulation

## 📝 Description

Given an integer array **arr[]** , find the XOR of the XOR values of all possible non-empty subarrays of the array.

 Example:

```
Input: arr[] = [1, 2, 3]
Output: 2
Explanation:
xor[1] = 1
xor[1, 2] = 3
xor[2, 3] = 1
xor[1, 2, 3] = 0
xor[2] = 2
xor[3] = 3
Result: 1 ^ 3 ^ 1 ^ 0 ^ 2 ^ 3 = 2
```

```
Input: arr[] = [1, 2]
Output: 0
Explanation:
xor[1] = 1
xor[1, 2] = 3
xor[2] = 2
Result: 1 ^ 3 ^ 2 = 0
```

**Constraints:**
- 1 <= arr.size() <= 10<sup>5</sup>
- 0 <= arr[i] <= 10<sup>9</sup>
