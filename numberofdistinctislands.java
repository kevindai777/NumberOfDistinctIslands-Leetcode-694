//Java Solution

class Solution {
    public int numDistinctIslands(int[][] grid) {
        Set<List<Character>> set = new HashSet<>();
        
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == 1) {
                    List<Character> path = new ArrayList<>();
                    dfs(grid, i, j, path, 'o');
                    set.add(path);
                }
            }
        }
        
        return set.size();
    }
    
    public void dfs(int[][] grid, int i, int j, List<Character> path, char dir) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == 0) {
            path.add('f');
            return;
        }
        
        grid[i][j] = 0;
        path.add(dir);
        
        dfs(grid, i + 1, j, path, 'd');
        dfs(grid, i - 1, j, path, 'u');
        dfs(grid, i, j + 1, path, 'r');
        dfs(grid, i, j - 1, path, 'l');
    }
}