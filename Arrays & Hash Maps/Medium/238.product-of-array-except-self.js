/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 *
 * https://leetcode.com/problems/product-of-array-except-self/description/
 *
 * Given an integer array nums, return an array answer such that answer[i] is
 * equal to the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit
 * integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the
 * division operation.
 *
 *
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * Example 2:
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 *
 *
 * Constraints:
 *
 *
 * 2 <= nums.length <= 10^5
 * -30 <= nums[i] <= 30
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit
 * integer.
 *
 *
 *
 * Follow up: Can you solve the problem in O(1) extra space complexity? (The
 * output array does not count as extra space for space complexity analysis.)
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
///////////////////////////////////////////////////////////
// Algorithm
// - Calculate the prefix and postfix products at each index in the input array
//  -- Prefix is multiplying the value at each index by the product at the previous index
//      -- [1, 2, 3, 4] = [1, 2, 6, 24]
//  -- Postfix is the same but from the back
//      -- [1, 2, 3, 4] = [24, 24, 12, 4]
// - Traverse through the array one more time and, at each index, multiply the value of the prefix array at i - 1 by the value of the postfix array at i + 1
// - Multiply the end indices by 1
///////////////////////////////////////////////////////////

var productExceptSelf = function (nums) {
  const prefixArray = new Array(nums.length);
  const postfixArray = new Array(nums.length);
  const res = new Array(nums.length);

  // Do postfix first so that you can do the prefix and final result within the same for-loop
  for (let j = nums.length - 1; j >= 0; j--) {
    postfixArray[j] =
      j === nums.length - 1 ? nums[j] : nums[j] * postfixArray[j + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    prefixArray[i] = i === 0 ? nums[i] : nums[i] * prefixArray[i - 1];
    if (i === 0) res[i] = 1 * postfixArray[i + 1];
    else if (i === nums.length - 1) res[i] = 1 * prefixArray[i - 1];
    else res[i] = prefixArray[i - 1] * postfixArray[i + 1];
  }

  return res;
};
// @lc code=end
