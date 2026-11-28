# Path Exists Between Two Vertices

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/path-exists/1)
📊 Difficulty: Easy
📂 Category: Graph

## 📝 Description

Given an undirected graph with **V** vertices numbered from 0 to V - 1, represented by an adjacency list **adj[][]** , where adj[i] contains all vertices adjacent to vertex **i** . Also given two vertices **u** and **v** , check whether a path exists between them.

Return true if a path exists, otherwise return false.

 Example:

```
Input: adj[][] = [[2, 3], [2], [0, 1], [0], [5], [4]], u = 1, v = 5
Output: false
Explanation: There is no path from vertex 1 to vertex 5.
```

![Problem Image](https://media.geeksforgeeks.org/wp-content/uploads/20251014110602842995/420046859.webp)

```
Input: adj[][] = [[2, 3], [2], [0, 1], [0], [5], [4]], u = 2, v = 3
Output: true
Explanation: We can reach vertex 3 from vertex 2 via vertex 0.
```

![Problem Image](https://media.geeksforgeeks.org/wp-content/uploads/20251014110602842995/420046859.webp)

![Problem Image](https://media.geeksforgeeks.org/wp-content/uploads/20251014110602797647/1.webp)

**Constraints:**
- 2 <= adj.size() <= 10<sup>5</sup>
- 0 <= adj[i][j], u, v < adj.size()
- u != v
