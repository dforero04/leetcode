/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-inorder-traversal/description/
 *
 * Given the root of a binary tree, return the inorder traversal of its nodes'
 * values.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,null,2,3]
 * Output: [1,3,2]
 *
 *
 * Example 2:
 *
 *
 * Input: root = []
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: root = [1]
 * Output: [1]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 *
 *
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// In order traversal is left, root, right
var inorderTraversal = function (root) {
  // This is the recursive solution
  const res = [];
  const traverse = function (root) {
    if (root.left) traverse(root.left);
    res.push(root.val);
    if (root.right) return traverse(root.right);
  };
  if (!root) return res;
  traverse(root);
  return res;

  //   // This is the iterative solution
  //   const stack = [];
  //   const res = [];
  //   let curr = root;
  //   while (curr || stack.length) {
  //     while (curr) {
  //       stack.push(curr);
  //       curr = curr.left;
  //     }
  //     curr = stack.pop();
  //     res.push(curr.val);
  //     curr = curr.right;
  //   }

  //   return res;
};
// @lc code=end
