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
            console.log("typeof n", typeof n)
            let wanted = target - nums[n];
            if(map.has(wanted) == true){
                result.push(Number(n));
                result.push(map.get(wanted))

                return result
            }else{
                map.set(Number(nums[n]), Number(n))
            }
        }

        return result;

    }
}
