class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        let result: number[] = []
        let map = new Map()
        for(let n in nums){
            let wanted = target - nums[n];
            if(map.has(wanted) == true){
                result.push(Number(n));
                result.push(Number(map.get(wanted)))

                return result
            }else{
                map.set(nums[n], n)
            }
        }

        return result;

    }
}
