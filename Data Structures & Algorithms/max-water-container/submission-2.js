class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // alogorithm would be to find the rectange with most amount of area. -> basic logic.
        let maxArea = 0;
        let l = 0;
        let r = heights.length-1;
        while (l < r){
            
            let length = (r - l) ;
            let breadth = heights[l] < heights[r] ? heights[l] : heights[r];
            let area = length * breadth;
            maxArea = area > maxArea ? area : maxArea;

            if(heights[l] > heights[r]){
                r--;
            } 
            else if(heights[r] > heights[l]){
                l++;
            } 
            else{
                l++;
            }
        }
        return maxArea;
    }
}
