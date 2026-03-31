class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // nums[i] - target <- present in the array? if yes, take that and push in array;
        const map = new Map();

        for(let i in nums){
            let complement = target - nums[i];

            if(map.has(complement)){
                return [Number(map.get(complement)), Number(i)]
            }

            map.set(nums[i], i);
        }
    }
}
