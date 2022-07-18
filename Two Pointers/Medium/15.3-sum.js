/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[j],
 * nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] +
 * nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation:
 * nums[0] + nums[1] + nums[1] = (-1) + 0 + 1 = 0.
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 * The distinct triplets are [-1,0,1] and [-1,-1,2].
 * Notice that the order of the output and the order of the triplets does not
 * matter.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0,1,1]
 * Output: []
 * Explanation: The only possible triplet does not sum up to 0.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 * Explanation: The only possible triplet sums up to 0.
 *
 *
 *
 * Constraints:
 *
 *
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // This algorithm sort of combines the solution of Two Sum and Two Sum II.
  //////////////////////////////////////////////////////////////////////////
  // Algorithm:
  // - We first sort the array to make it easier to check the values
  // - Then, for each value in the sorted array, we check all of the remaining
  // values similar to that in Two Sum II, where we change the left and right
  // pointers based on the sum of the values
  // - Also, since this problem requires to duplicate triplets, we have to add additional
  // functionality by skipping over values that would cause the same answer.
  // - FINAL TIME COMPLEXITY: O(nlogn) + O(n^2) = O(n^2)
  //////////////////////////////////////////////////////////////////////////

  const resArr = [];
  // Sorting array Time Complexity: ~ O(nlogn)
  const sorted = nums.sort((a, b) => a - b);

  // Time Complexity: O(n^2)
  sorted.forEach((val, i) => {
    // This check skips a duplicate value
    if (i > 0 && val === sorted[i - 1]) return;

    // Left and right pointers of the subarray minus sorted[i]
    let l = i + 1,
      r = sorted.length - 1;
    // This is the part that is similar to Two Sum II
    while (l < r) {
      let sum = val + sorted[l] + sorted[r];
      if (sum === 0) {
        resArr.push([val, sorted[l], sorted[r]]);
        // This additional functionality helps to not check duplicate entries
        // We only have to increment left because the else block will take care of
        // decrementing right.
        // We could have done it the other way around, but it gets the same result.
        l++;
        while (sorted[l] === sorted[l - 1] && l < r) {
          l++;
        }
        // r--;
        // while(sorted[r] === sorted[r+1] && l < r){
        //     r--;
        // }
      } else {
        sum < 0 ? l++ : r--;
      }
    }
  });

  return resArr;
};
// @lc code=end
