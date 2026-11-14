# Max Equal Sum in 3 Stacks

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/find-maximum-equal-sum-of-three-stacks/1)
📊 Difficulty: Medium
📂 Category: Greedy

## 📝 Description

Given three stacks **s1** , **s2** , and **s3** , represented by arrays where the first element of each array represents the top of the corresponding stack.

Find the maximum possible equal sum(sum of all elements) of all three stacks by removing zero or more elements from the top of each stack.

If it is not possible to make the sum of all three stacks equal, return **0** .

 Example:

```
Input: s1 = [3, 2, 1, 1, 1], s2 = [4, 3, 2], s3 = [2, 5, 4, 1]
Output: 5
Explanation: Remove 3 from s1, 4 from s2, and 2, 5 from s3. The remaining sums of all three stacks are equal to 5.
```

![Problem Image](https://media.geeksforgeeks.org/wp-content/uploads/20261023170949729500/pop.webp)

```
Input: s1 = [4,7], s2 = [10], s3 = [1,2,3]
Output: 0
Explanation: It is not possible to make the sums of all three stacks equal by removing elements from their tops.
```

**Constraints:**
- 1 <= s1.size(), s2.size(), s3.size() <= 5 * 10<sup>5</sup>
- 1 <= s1[i], s2[i], s3[i] <= 10<sup>3</sup>
