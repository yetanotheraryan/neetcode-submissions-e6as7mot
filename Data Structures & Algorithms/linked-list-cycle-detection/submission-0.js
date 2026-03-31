/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        // checking if i can keep nodes in objects
        let curr = head;
        let arr = []
        while(curr){
            if(arr.includes(curr)){
                return true
            }
            console.log('curr node: ', curr)
            arr.push(curr);
            curr = curr.next;
        }
        return false;
    }
}
