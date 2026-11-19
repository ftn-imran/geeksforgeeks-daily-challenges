# Sort in Specific Order

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/sort-in-specific-order2422/1)
📊 Difficulty: Medium
📂 Category: Sorting

## 📝 Description

Given an array **arr[]** of non-negative integers. Your need to sort them so that

- The first part of the array contains odd numbers sorted in descending order.

- The rest of the portion contains even numbers sorted in ascending order.

 Example:

```
Input: arr[] = [1, 2, 3, 5, 4, 7, 10]
Output: [7, 5, 3, 1, 2, 4, 10]
Explanation: 7, 5, 3, 1 are odd numbers in descending order and 2, 4, 10 are even numbers in ascending order.
```

```
Input: arr[] = [0, 4, 5, 3, 7, 2, 1]
Output: [7, 5, 3, 1, 0, 2, 4]
Explanation: 7, 5, 3, 1 are odd numbers in descending order and 0, 2, 4 are even numbers in ascending order.
```

**Constraints:**
- 1 <= arr.size() <= 10<sup>5</sup>
- 0 <= arr[i] <= 10<sup>9</sup>
