# Count Group Occurrences

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/count-the-characters1821/1)
📊 Difficulty: Easy
📂 Category: String

## 📝 Description

Given a string **s** and an integer **k** , count the number of distinct characters that appear in exactly **k groups** in the string.

A group is defined as one or more consecutive occurrences of the same character. For example, in the string "aaabbcca", the groups are "aaa", "bb", "cc" and "a".

 Example:

```
Input: s = "abc", k = 1
Output: 3
Explanation: The characters 'a', 'b' and 'c' each appear in exactly one group.
```

```
Input: s = "geeksforgeeks", k = 2
Output: 4
Explanation: The characters 'g', 'e', 'k' and 's' each appear in exactly two groups.
```

```
Input: s = "aaaaa", k = 2
Output: 0
Explanation: The character 'a' appears in only one group, so no character appears in exactly two groups.
```

**Constraints:**
- 1 <= s.size() <= 10<sup>5</sup>
- 1 <= k <= 10<sup>3</sup>
- s consists only of lowercase English alphabets
