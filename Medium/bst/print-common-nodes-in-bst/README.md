# Common Nodes in Two BSTs

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/print-common-nodes-in-bst/1)
📊 Difficulty: Medium
📂 Category: BST

## 📝 Description

Given the roots **r1** and **r2** of two Binary Search Trees (BST), find all nodes that are present in both trees i.e. the intersection nodes of the two BSTs.

Return the common node values in sorted order.

 Example:

```
Input: r1 = [5, 1, 10, 0, 4, 7, N, N, N, N, N, N, 9], r2 = [10, 7, 20, 4, 9, N, N]
Output: [4, 7, 9, 10]
Explanation: The values present in both BSTs are 4, 7, 9, and 10. Hence, the answer is [4, 7, 9, 10].
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/933458/Web/Other/blobid0_1788525674.webp)

```
Input: r1 = [10, 2, 11, 1, 3, N, N], r2 = [2, 1, 3]
Output: [1, 2, 3]
Explanation: The values 1, 2, and 3 are present in both BSTs. Hence, the answer is [1, 2, 3].
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/933458/Web/Other/blobid1_1788525723.webp)

**Constraints:**
- 1 <= size of binary trees <= 10<sup>5</sup>
- 0 <= Node.data <= 10<sup>9</sup>
