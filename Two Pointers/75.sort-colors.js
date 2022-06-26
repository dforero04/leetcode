/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 *
 * https://leetcode.com/problems/sort-colors/description/
 *
 * Given an array nums with n objects colored red, white, or blue, sort them
 * in-place so that objects of the same color are adjacent, with the colors in
 * the order red, white, and blue.
 *
 * We will use the integers 0, 1, and 2 to represent the color red, white, and
 * blue, respectively.
 *
 * You must solve this problem without using the library's sort function.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [2,0,1]
 * Output: [0,1,2]
 *
 *
 *
 * Constraints:
 *
 *
 * n == nums.length
 * 1 <= n <= 300
 * nums[i] is either 0, 1, or 2.
 *
 *
 *
 * Follow up: Could you come up with a one-pass algorithm using only constant
 * extra space?
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // Position where to put all zeros
  let left = 0;
  // Current position
  let curr = 0;
  // Position where to put all 2s
  let right = nums.length - 1;

  // Before you hit the first sorted 2
  while (curr <= right) {
    // If we hit a 0 value, move it all the way to the left position, the inc left
    if (nums[curr] === 0) {
      [nums[curr++], nums[left++]] = [nums[left], nums[curr]];
      // If we hit a 2 value, move it all the way to the right position, the dec right
    } else if (nums[curr] === 2) {
      [nums[curr], nums[right--]] = [nums[right], nums[curr]];
    } else {
      // If we hit a 1 value, just inc curr because 1s will be put in the middle automatically
      curr++;
    }
  }
};
// @lc code=end
