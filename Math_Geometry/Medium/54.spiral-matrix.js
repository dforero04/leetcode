/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 *
 * https://leetcode.com/problems/spiral-matrix/description/
 *
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 *
 * Example 1:
 *
 *
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [1,2,3,6,9,8,7,4,5]
 *
 *
 * Example 2:
 *
 *
 * Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 *
 *
 * Constraints:
 *
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 10
 * -100 <= matrix[i][j] <= 100
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  ///////////////////////////////////////////////////////////////////
  // BASICALLY SAME ALGORITHM AS SPIRAL MATRIX II, WHICH I DID FIRST
  ///////////////////////////////////////////////////////////////////
  const res = new Array(matrix.length * matrix[0].length);
  let rowBegin = 0,
    rowEnd = matrix.length - 1,
    colBegin = 0,
    colEnd = matrix[0].length - 1,
    index = 0;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    for (let i = colBegin; i <= colEnd; i++) {
      res[index++] = matrix[rowBegin][i];
    }
    rowBegin++;

    for (let i = rowBegin; i <= rowEnd; i++) {
      res[index++] = matrix[i][colEnd];
    }
    colEnd--;

    if (rowBegin <= rowEnd) {
      for (let i = colEnd; i >= colBegin; i--) {
        res[index++] = matrix[rowEnd][i];
      }
    }
    rowEnd--;

    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        res[index++] = matrix[i][colBegin];
      }
    }
    colBegin++;
  }
  return res;
};
// @lc code=end
