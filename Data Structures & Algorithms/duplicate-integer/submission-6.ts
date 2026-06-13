class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // 1st approach - 
        // i will need a storage can be an arrya or js object(hashmap)

        // loop thorugh and see if any elemnt you are currently at, is already present in the storage if yes, retrun yes and if no retrun no

        let check: number[] = [] // not an object beacause i dont need freqency for all the elements.

        for (let num of nums) {
            if(check.includes(num)){
                return true
            }else{
                check.push(num)
            }
        }
        
        return false;
    }
}
