/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order, and each of their nodes
 * contains a single digit. Add the two numbers and return the sum as a linked
 * list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 *
 * Example 1:
 *
 *
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 *
 *
 * Example 2:
 *
 *
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 *
 *
 * Example 3:
 *
 *
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in each linked list is in the range [1, 100].
 * 0 <= Node.val <= 9
 * It is guaranteed that the list represents a number that does not have
 * leading zeros.
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // Initialize a dummy head node
  const dummyHead = new ListNode(0);
  // Point current at the dummy head
  let current = dummyHead;
  let carry = 0;

  // While either still has values left
  while (l1 || l2) {
    // If a ListNode doesn't have any values left, automatically assign it to 0
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    // Since current is pointing at the dummyHead, we can assign the next value to continue adding to the ListNode
    current.next = new ListNode(sum % 10);
    // We increment current because now dummyHead will always be at the front
    current = current.next;
    // Only go to the next value if it is not null
    // This checks the case when one list has more numbers than the other.
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  // Add an additional ListNode of value 1 if the last two values > 10
  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  // Return dummyHead.next because dummyHead holds the value of 0 set up top
  return dummyHead.next;
};
// @lc code=end
