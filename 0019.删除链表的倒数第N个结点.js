/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 双指针 滑动窗口
var removeNthFromEnd = function (head, n) {
    let node = new ListNode()
    node.next = head

    let p1 = node
    let p2 = getNextNNode(node, n)
    while (p1) {
        if (p2 === null) {
            p1.next = p1.next.next
            return node.next
        } else {
            p1 = p1.next
            p2 = p2.next
        }

    }
};

function getNextNNode(node, n) {
    let p = node
    n = n + 1
    for (let i = 0; i < n; i++) {
        p = p.next
    }
    return p
}
