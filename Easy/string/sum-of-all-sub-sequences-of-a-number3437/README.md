# Sum of All Digit Subsequences

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/sum-of-all-sub-sequences-of-a-number3437/1)
📊 Difficulty: Easy
📂 Category: String

## 📝 Description

Given a string **s** which consists of digits, find sum of all digits across all non-empty subsequences of s.

 **Note:** Since the answer can be very large, return it modulo 10<sup>9</sup> + 7.

 Example:

```
Input: s = "123"
Output: 24
Explanation: The non-empty subsequences are: [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]. The sum of all digits in these subsequences is: 1 + 2 + 3 + (1 + 2) + (1 + 3) + (2 + 3) + (1 + 2 + 3) = 24.
```

```
Input: s = "405"
Output: 36
Explanation: The non-empty subsequences are: [4], [0], [5], [4, 0], [4, 5], [0, 5], [4, 0, 5]. The sum of all digits in these subsequences is 36.
```

**Constraints:**
- 1 <= s.size() <= 10<sup>5</sup>
- s consists only of digits(1 - 9).
