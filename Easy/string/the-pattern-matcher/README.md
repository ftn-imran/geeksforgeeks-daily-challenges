# Repeated Pattern Check

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/the-pattern-matcher/1)
📊 Difficulty: Easy
📂 Category: String

## 📝 Description

Given a string **s** made of two characters of **'x'** and **'y'** . The task is to verify whether **s** is made by concatenating substrings that follow the pattern **x<sup>n</sup>y<sup>n </sup>** (equal number of y's follow equal number of x's).

 Example:

```
Input: s = "xxyyxy"
Output: true
Explanation: The string can be split into "xxyy" + "xy". Both substrings contain an equal number of consecutive 'x' and 'y' characters.
```

```
Input: s = "xyx"
Output: false
Explanation: The last 'x' cannot form a valid substring because it is not followed by a matching 'y'.
```

**Constraints:**
- 1 <= s.size() <= 10<sup>5</sup>
- s consists only of the characters 'x' and 'y'
