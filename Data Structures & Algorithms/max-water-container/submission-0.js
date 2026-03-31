class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // alogorithm would be to find the rectange with most amount of area. -> basic logic.
        let maxArea = 0;
        for(let i in heights){
            for(let j in heights){
                let height = heights[i] > heights[j] ? heights[j] : heights[i]
                let area = (j-i) * height;
                maxArea = area > maxArea ? area : maxArea; 
            }
        }
        return maxArea
    }
}
