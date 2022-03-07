/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 快慢指针
var middleNode = function(head) {
    let p1 = head
    let p2 = head
    while(true) {
        if(!p1 || !p1.next){
            return p2
        }
        p1 = p1.next.next
        p2 = p2.next
    }
};
