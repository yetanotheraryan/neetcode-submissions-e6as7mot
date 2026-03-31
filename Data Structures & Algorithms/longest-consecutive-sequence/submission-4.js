class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const sorted = nums.sort((a,b)=>a-b);
        console.log(sorted);
        let maxLength = 0;
        let length = 1;
        if(nums.length == 0){
            return 0
        }else{
        for(let i in sorted){
            console.log(sorted[i+1], sorted[i], i, sorted[Number(i)+1])
            if(sorted[Number(i)+1] - sorted[i] == 1){
                // console.log('')
                length++;
            }
            else if (sorted[Number(i)+1] - sorted[i] == 0){
                continue;
            }
            else{
                if(length > maxLength){
                    maxLength = length;
                    length = 1;
                } 
                else{
                    length = 1;
                }

            }
        }
        return maxLength;

        }
    }
}
