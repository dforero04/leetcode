/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 *
 * https://leetcode.com/problems/contains-duplicate/description/
 *
 * Given an integer array nums, return true if any value appears at least twice
 * in the array, and return false if every element is distinct.
 *
 *
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // FIRST, QUICK ANSWER = TIME COMPLEXITY IS O(N^2) (I BELIEVE?)
  // ARRAY.SHIFT() METHOD IS O(N) TIME COMPLEXITY
  // while(nums.length > 0){
  //     let val = nums.shift();
  //     if(nums.includes(val)) return true;
  // }
  // return false;

  // Using an Object (could have used Map too)
  // TIME COMPLEXITY IS O(N)
  // const numObj = {};
  // for(let i = 0; i < nums.length; i++){
  //     let test = nums[i];
  //     if(numObj[test]) return true;
  //     numObj[test] = true;
  // }
  // return false;

  // Simple Solution
  // Convert array to a set.
  // If the sizes are not the same, that means the original array contains duplicates
  const set = new Set(nums);
  return nums.length !== set.size;
};
// @lc code=end
