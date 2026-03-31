class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let db = {};

        for(let i of nums){
            if(db[i] != undefined){
                db[i] = db[i] +1;
            }else{
                db[i] = 1;
            }
        }

        for(let counts of Object.values(db)){
            if (counts > 1) return true
        }

        return false;
    }
}
