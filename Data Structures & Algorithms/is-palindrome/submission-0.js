class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    
    isPalindrome(s) {
        let newStr = ''
        // remove spaces
        console.log(/^[a-zA-Z0-9]$/.test('?'))
        for(let char of s){
            // console.log(`s: `, char)
            if(char != ' '){
                if(/^[a-zA-Z0-9]$/.test(char) == true){
                    console.log(char)
                    newStr += char;
                }
            }
        }
        let i=0;
        let j=newStr.length-1;

        while(i<j){
            if(newStr[i].toLowerCase() != newStr[j].toLowerCase()){
                console.log(`newStr[i]`, newStr[i], `newStr[j]`, newStr[j])
                return false;
            }

            i++;
            j--;
        };
        return true;        
    }
}
