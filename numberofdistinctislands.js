//Objective is the same as 'Number of Islands' except now we want the number of
//distinct islands, where 'distinct islands' are islands of different shapes

let grid = 
[[11000],
 [11000],
 [00011],
 [00011]]


//O(n) solution where n is the number of elements in the matrix
//We do a DFS traversal over the graph and keep track of the directions
//that we go each time

let set = new Set()
    
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {

        //'o' stands for 'origin'
        if (grid[i][j] == 1) {
            let path = []
            dfs(grid, i, j, path, 'o')
            set.add(path.join(''))    
        }
    }
}

return set.size

function dfs(grid, i, j, path, dir) {
    //'f' stands 'finish' to denote that the current path is finished
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == 0) {
        path.push('f')
        return
    }
    
    grid[i][j] = 0
    path.push(dir)
    
    dfs(grid, i - 1, j, path, 'u')
    dfs(grid, i + 1, j, path, 'd')
    dfs(grid, i, j - 1, path, 'l')
    dfs(grid, i, j + 1, path, 'r')
}