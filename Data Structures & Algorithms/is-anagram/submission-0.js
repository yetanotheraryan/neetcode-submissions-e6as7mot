class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let obj={}
        for(let c of s){
            if(obj[c]!=undefined){
                obj[c] = obj[c] + 1;
            }else{
                obj[c] = 1;
            }
        }

        for(let d of t){
            if(obj[d]!=undefined){
                obj[d] = obj[d] - 1;
            }else{
                obj[d] = 1;
            }
        }

        for(let val of Object.values(obj)){
            if(val != 0){
                return false;
            }
        }

        return true;
    }
}
