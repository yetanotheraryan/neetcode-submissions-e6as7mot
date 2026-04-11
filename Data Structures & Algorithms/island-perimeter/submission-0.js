class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        // this would be stupid method
        // for(let i=0; i < grid.length; i++){
        //     for(let j=0; j < grid[0].length; j++){
        //         console.log('grid vlaues', grid[i][j])
        //     }
        // }


        // DFS
        // if you reach base case return 1 as adding length for the perimeter
        const visit = new Set()
        const key = (x, y) => `${x},${y}`;


        function dfs(i, j){
            if (i >= grid.length || j >= grid[0].length
            || i < 0 || j < 0 || grid[i][j] == 0){
                return 1
            }
            if(visit.has(key(i, j))){
                return 0 // already visited cases to not be added in parameter
            }
            visit.add(key(i, j))
            let perimeter = dfs(i, j+1);
            perimeter += dfs(i, j-1);
            perimeter += dfs(i+1, j);
            perimeter += dfs(i-1, j);

            return perimeter


        }

        for(let i=0; i < grid.length; i++){
            for(let j=0; j < grid[0].length; j++){
                if(grid[i][j] == 1){
                    return dfs(i, j)
                }
            }
        }
        

    }
}

