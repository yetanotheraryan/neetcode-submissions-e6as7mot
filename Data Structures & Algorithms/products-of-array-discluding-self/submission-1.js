class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr = [];
        for (let val in nums){
            let mul = 1;
            for(let other in nums){
                if(other == val) continue;

                mul = mul*nums[other];
            }
            arr.push(mul);
        };
        console.log(arr);
        return arr;
    }
}
