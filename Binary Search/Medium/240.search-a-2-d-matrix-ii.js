/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 *
 * https://leetcode.com/problems/search-a-2d-matrix-ii/description/
 *
 * Write an efficient algorithm that searches for a value target in an m x n
 * integer matrix matrix. This matrix has the following properties:
 *
 * Integers in each row are sorted in ascending from left to right.
 * Integers in each column are sorted in ascending from top to bottom.
 *
 * Example 1:
 *
 * Input: matrix =
 * [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],
 * target = 5
 * Output: true
 *
 * Example 2:
 *
 * Input: matrix =
 * [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],
 * target = 20
 * Output: false
 *
 * Constraints:
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= n, m <= 300
 * -10^9 <= matrix[i][j] <= 10^9
 * All the integers in each row are sorted in ascending order.
 * All the integers in each column are sorted in ascending order.
 * -10^9 <= target <= 10^9
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  /////////////////////////////////////////////////////////
  // ALGORITHM
  // - We start at either the top right or bottom left (I started top right)
  // - If the target is less than the top right, we discard that whole right col since values increase going down
  // - If the target is greater than the top right, we discard that whole top row since values increase going right
  // - Basically, we continue to take off rows and cols from the top and right until we find our value.
  // - If we go past the bottom left, that means the value doesn't exist and we return false
  /////////////////////////////////////////////////////////

  // Keep track of matrix boundaries
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Since we start from the top right, we will only decrement top and right
  let top = 0,
    left = 0;
  let bottom = rows - 1,
    right = cols - 1;

  // This will go until value is found or exit matrix at the bottom left
  while (top <= bottom && left <= right) {
    if (matrix[top][right] === target) return true;
    if (target < matrix[top][right]) right--;
    else top++;
  }

  return false;
};
// @lc code=end
