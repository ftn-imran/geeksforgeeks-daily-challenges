# Count Edges in Graph

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/count-number-of-edges-in-an-undirected-graph/1)
📊 Difficulty: Easy
📂 Category: Graph

## 📝 Description

Given an undirected graph with **V** vertices numbered from **0** to **V - 1** , represented by an adjacency list **adj[][]** , where **adj[i]** contains the vertices adjacent to vertex **i.**

Return the total number of edges present in the graph.

 Example:

```
Input: adj[][] = [[1, 2], [0, 2], [0, 1, 3], [2]]
Output: 4
Explanation: The edges in the graph are: (0-1), (0-2), (2-3), (1-2). Hence, total number of edges = 4.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/913857/Web/Other/blobid0_1761566038.jpg)

```
Input: adj[][] = [[1], [0, 2], [1, 3], [2]]
Output: 3
Explanation: The edges in the graph are: (0-1), (1-2), (2-3). Hence, total number of edges = 3.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/913857/Web/Other/blobid1_1761566117.jpg)

**Constraints:**
- 1 <= adj.size() <= 10<sup>4</sup>
- 0 <= adj[i][j] < adj.size()
