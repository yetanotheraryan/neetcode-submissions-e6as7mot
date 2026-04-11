func islandPerimeter(grid [][]int) int {
    visit := make(map[[2]int]struct{})

    for i := range(len(grid)){
        for j := range(len(grid[0])){
            if grid[i][j] == 1 {
                return dfs(i, j, visit, grid)
            }
        }
    }
    return -1    
}

func dfs(i int, j int, visit map[[2]int]struct{}, grid [][]int) int {
        if i < 0 || j < 0 || i >= len(grid) || j >= len(grid[0]) || grid[i][j] == 0 {
            return 1
        }
        key := [2]int{i, j}
        if _, ok := visit[key]; ok {
            return 0
        }

        visit[key] = struct{}{}
        perimeter := dfs(i, j+1, visit, grid)
        perimeter += dfs(i, j-1, visit, grid)
        perimeter += dfs(i+1, j, visit, grid)
        perimeter += dfs(i-1, j, visit, grid)

        return perimeter
    }