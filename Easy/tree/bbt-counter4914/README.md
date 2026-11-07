# Balanced Binary Tree Counter

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/bbt-counter4914/1)
📊 Difficulty: Easy
📂 Category: Tree

## 📝 Description

Given a height **h** , find the maximum number of distinct balanced binary trees of height exactly h.

A binary tree is balanced if, for every node, the heights of its left and right subtrees differ by at most 1. A tree with a single node has height 1. An empty tree has height 0.

 **Note:** Since the answer can be very large, return it modulo 10<sup>9</sup> + 7.

 Example:

```
Input: h = 1
Output: 1
Explanation: Only one tree of height 1 exists i.e. a single node.
```

```
Input: h = 2
Output: 3
Explanation: 3 distinct balanced trees of height 2 exist.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/934600/Web/Other/blobid1_1790422382.webp)

```
Input: h = 3
Output: 15
Explanation: 15 distinct balanced trees of height 3 exist.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/934600/Web/Other/blobid0_1790422347.webp)

**Constraints:**
- 1 <= h <= 10<sup>6</sup>
