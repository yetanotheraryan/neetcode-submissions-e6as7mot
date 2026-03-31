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
     * @return {ListNode}
     */
    reverseList(head) {
        let curr = head;
        let prev = null;
        let next;
        if(!head) {
            return head;
        }    
        while (true) {
            if(curr.next == null){
                head = curr;
                head.next = prev;
                console.log(head);
                return head;
            }
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
    }
}         


// value of head
// ListNode {
//   val: 0,
//   next: ListNode { val: 1, next: ListNode { val: 2, next: [ListNode] } }
// }
