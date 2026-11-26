# Range Vowel Count Queries

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/range-vowel-count-queries-static/1)
📊 Difficulty: Medium
📂 Category: Prefix Sum

## 📝 Description

Given a string **s** and a 2D array **queries[][]** , where each query consists of two integers **l** and **r** , find the number of vowels in the substring **s[l....r]** for each query. The substring includes both indices l and r.

Return an array containing the answers to all queries in the order they are given.

 Example:

```
Input: s = "geeksforgeeks", queries[][] = [[1, 3], [2, 4], [1, 9]]
Output: [2, 1, 4]
Explanation:
Query 1: "eek" has 2 vowels (e, e).
Query 2: "eks" has 1 vowel (e).
Query 3: "eeksforge" has 4 vowels (e, e, o, e).
```

```
Input: s = "helloworld", queries[][] = [[0, 4], [5, 9], [0, 9]]
Output: [2, 1, 3]
Explanation:
Query 1: "hello" has 2 vowels (e, o).
Query 2: "world" has 1 vowel (o).
Query 3: "helloworld" has 3 vowels (e, o, o).
```

**Constraints:**
- 1 <= s.size(), queries.size() <= 10<sup>5</sup>
- s consists only of lowercase English alphabets
- queries[i].size() = 2
- 0 <= queries[i][0] <= queries[i][1] < s.size()
