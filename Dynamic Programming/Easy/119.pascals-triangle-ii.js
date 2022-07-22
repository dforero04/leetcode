/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 *
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 *
 * Given an integer rowIndex, return the rowIndex^th (0-indexed) row of the
 * Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it as shown:
 *
 *
 * Example 1:
 * Input: rowIndex = 3
 * Output: [1,3,3,1]
 * Example 2:
 * Input: rowIndex = 0
 * Output: [1]
 * Example 3:
 * Input: rowIndex = 1
 * Output: [1,1]
 *
 *
 * Constraints:
 *
 *
 * 0 <= rowIndex <= 33
 *
 *
 *
 * Follow up: Could you optimize your algorithm to use only O(rowIndex) extra
 * space?
 *
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  // Returns top level
  if (!rowIndex) return [1];

  // This is like the base case, which is also the second level (rowIndex = 1)
  // We use this to dynamically calculate going down the triangle
  let res = [1, 1];

  // Since we already have the second level (rowIndex = 1), we pre-fix the decrementer
  // This is the same as:
  // rowIndex -= 1;
  // while(rowIndex)
  while (--rowIndex) {
    // Initialize new layer
    // This will only be the values in between the 1s
    let nextLayer = [];

    // Calculate the middle values
    for (let i = 0; i < res.length - 1; i++) {
      nextLayer.push(res[i] + res[i + 1]);
    }
    // This is the next layer, which will be used to continue to build future layers
    res = [1, ...nextLayer, 1];
  }
  return res;
};
// @lc code=end
