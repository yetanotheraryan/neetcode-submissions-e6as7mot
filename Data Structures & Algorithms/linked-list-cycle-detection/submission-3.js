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
        
        // floyds tortoise and hare algorithm
        let f=head, s=head;
        if(!head) return false;
        while(f && s){
            s = s.next;
            if(!f?.next || !f?.next?.next) return false;
            f = f?.next?.next;
            if(f == s) return true
        }
        
        // let curr = head;
        // let arr = []
        // while(curr){
        //     if(arr.includes(curr)){
        //         return true
        //     }
        //     console.log('curr node: ', curr)
        //     arr.push(curr);
        //     curr = curr.next;
        // }
        // return false;
    }
}
