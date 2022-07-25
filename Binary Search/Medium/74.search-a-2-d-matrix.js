/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 *
 * https://leetcode.com/problems/search-a-2d-matrix/description/
 *
 * Write an efficient algorithm that searches for a value target in an m x n
 * integer matrix matrix. This matrix has the following properties:
 *
 *
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the
 * previous row.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 100
 * -10^4 <= matrix[i][j], target <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  /////////////////////////////////////////////////////////
  // I had the algorithm down on the first go, I just couldn't implement it
  // - It's basically binary search on rows first, then within that row
  /////////////////////////////////////////////////////////

  // Get boundaries for matrix, for reference
  const rows = matrix.length;
  const cols = matrix[0].length;
  let rowLo = 0,
    rowHi = rows - 1;

  // Find the row that would hold the target
  // The loop will break if you find the row
  while (rowLo <= rowHi) {
    let pivotRow = Math.round((rowLo + rowHi) / 2);
    if (target > matrix[pivotRow][cols - 1]) rowLo = pivotRow + 1;
    else if (target < matrix[pivotRow][0]) rowHi = pivotRow - 1;
    else break;
  }
  // However, if the loop ended because rowLo > rowHi, then the target is not in the matrix
  if (rowLo > rowHi) return false;

  // Recalculate row with values from first while loop
  let row = Math.round((rowLo + rowHi) / 2);
  let left = 0,
    right = cols - 1;
  // Use binary search to find target
  while (left <= right) {
    let pivot = Math.floor((left + right) / 2);
    if (target > matrix[row][pivot]) left = pivot + 1;
    else if (target < matrix[row][pivot]) right = pivot - 1;
    else return true;
  }

  // If you still can't find, return false
  return false;
};
// @lc code=end
