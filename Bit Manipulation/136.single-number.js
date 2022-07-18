/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 *
 * https://leetcode.com/problems/single-number/description/
 *
 * Given a non-empty array of integers nums, every element appears twice except
 * for one. Find that single one.
 *
 * You must implement a solution with a linear runtime complexity and use only
 * constant extra space.
 *
 *
 * Example 1:
 * Input: nums = [2,2,1]
 * Output: 1
 * Example 2:
 * Input: nums = [4,1,2,1,2]
 * Output: 4
 * Example 3:
 * Input: nums = [1]
 * Output: 1
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 3 * 10^4
 * -3 * 10^4 <= nums[i] <= 3 * 10^4
 * Each element in the array appears twice except for one element which appears
 * only once.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // // First Go Round
  // // Works, but doesn't meet the constraint of constant space
  // const set = new Set();
  // for(num of nums){
  //     if(set.has(num)){
  //         set.delete(num);
  //     }else{
  //         set.add(num);
  //     }
  // }
  // return Array.from(set)[0];

  // This is a Bit Manipulation Problem
  // n xor 0 = n
  // So, when looping through the array, you XOR each element with an XOR
  // value.
  // Ultimately, each element will be XORd against itself, making 0.
  // Then the final result will be the value of XOR since n xor 0 = n
  let xor_val = 0;
  for (const num of nums) xor_val = xor_val ^ num;

  return xor_val;
};
// @lc code=end
