/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// This is a PRE-ORDER DEPTH FIRST SEARCH (ROOT, LEFT, RIGHT)
var isSameTree = function (p, q) {
  // Check to see if TreeNodes are null
  if (!p && !q) return true;
  // Check to see if either or is null
  // Example: This checks the case if one tree has a leaf and the other doesn't
  if (!p || !q) return false;
  // Check the actual values of the node
  if (p.val !== q.val) return false;
  // Recursively check left and right sides of tree
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
// @lc code=end
