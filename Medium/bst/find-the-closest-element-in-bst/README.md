# Closest in BST

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/find-the-closest-element-in-bst/1)
📊 Difficulty: Medium
📂 Category: BST

## 📝 Description

Given **root** of a Binary Search Tree (BST) and an integer **k** , find the minimum absolute difference between k and the value of any node in the BST.

 Example:

```
Input: root = [10, 2, 11, 1, 5, N, N, N, N, 3, 6, N, 4], k = 13
Output: 2
Explanation: The node with value 11 is closest to k = 13. So, the minimum absolute difference is |11 - 13| = 2.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/700423/Web/Other/blobid0_1783688040.png)

```
Input: root = [8, 1, 9, N, 4, N, 10, 3], k = 9
Output: 0
Explanation: The node with value 9 is closest to k = 9. So, the minimum absolute difference is |9 - 9| = 0.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/700423/Web/Other/blobid1_1783744852.png)

**Constraints:**
- 1 <= size of binary tree, k <= 10<sup>5</sup>
- 0 <= Node.data <= 10<sup>5</sup>
