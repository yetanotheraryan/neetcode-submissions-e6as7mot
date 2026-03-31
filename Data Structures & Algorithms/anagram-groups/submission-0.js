class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {}
    for(let word of strs){
        let a =word;
        console.log(typeof(word))
        let sorted = a.split('').sort().join('');
        if(obj[sorted]!= undefined){
            obj[sorted] = [word, ...obj[sorted]];
        }else{
            obj[sorted] = [word];
        }
    }
    console.log(`obj: `, obj);
    let finalResult = [];
    for(let key of Object.keys(obj)){
        finalResult.push(obj[key]);
    }

    return finalResult;
    }
}
