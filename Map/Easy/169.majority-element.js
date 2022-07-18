/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 *
 * https://leetcode.com/problems/majority-element/description/
 *
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 *
 *
 * Example 1:
 * Input: nums = [3,2,3]
 * Output: 3
 * Example 2:
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 *
 *
 * Constraints:
 *
 *
 * n == nums.length
 * 1 <= n <= 5 * 10^4
 * -10^9 <= nums[i] <= 10^9
 *
 *
 *
 * Follow-up: Could you solve the problem in linear time and in O(1) space?
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  //   // Done by myself
  //   // This solution's time and space complexity:
  //   // Time: O(n) because we only go through the array once
  //   // and searching through Map is O(1)
  //   // Space: O(n) because we use a Map
  //   const map = new Map();
  //   let max = 0,
  //     maxValue;
  //   for (const num of nums) {
  //     // Optimized to not have to worry about an array with one element
  //     // because if you try to get() from an empty map, it will result
  //     // to 1 + 0 = 1 with the OR operator
  //     map.set(num, 1 + (map.get(num) || 0));
  //     if (map.get(num) > max) {
  //       max = map.get(num);
  //       maxValue = num;
  //     }
  //   }
  //   return maxValue;
  ////////////////////////////////////////////////////////////////////
  // THIS IS FOR THE FOLLOW-UP
  // Could you solve the problem in linear time and in O(1) space?
  // THIS COULD BE A GOOD METHOD TO KEEP TRACK OF MAX
  // WHEN YOU NEED O(1) SPACE
  ////////////////////////////////////////////////////////////////////
  // We start with the first value and increment count.
  // If we run into same value, increment count.
  // If we run into another value, decrement count.
  // If count === 0 and we run into another value, change res to new value
  // and increment count to 1
  ////////////////////////////////////////////////////////////////////
  // This solution's time and space complexity:
  // Time: O(n) because we only go through the array once
  // Space: O(1) because don't use any extra memory
  ////////////////////////////////////////////////////////////////////
  let res = nums[0],
    count = 0;
  for (const num of nums) {
    if (res === num) {
      count++;
    } else {
      if (count === 0) {
        res = num;
        count++;
      } else {
        count--;
      }
    }
  }
  return res;
};
// @lc code=end
