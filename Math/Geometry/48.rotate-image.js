/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 *
 * https://leetcode.com/problems/rotate-image/description/
 *
 * You are given an n x n 2D matrix representing an image, rotate the image by
 * 90 degrees (clockwise).
 *
 * You have to rotate the image in-place, which means you have to modify the
 * input 2D matrix directly. DO NOT allocate another 2D matrix and do the
 * rotation.
 *
 *
 * Example 1:
 *
 *
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [[7,4,1],[8,5,2],[9,6,3]]
 *
 *
 * Example 2:
 *
 *
 * Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 * Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 *
 *
 *
 * Constraints:
 *
 *
 * n == matrix.length == matrix[i].length
 * 1 <= n <= 20
 * -1000 <= matrix[i][j] <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  /////////////////////////////////////////////
  // ALGORITHM
  /////////////////////////////////////////////
  // - First, we will do the outside layer.
  //  -- We keep track of the outer limits of the matrix (top, right, bottom, left)
  //  -- We start with rotating the corners, then move clockwise
  //  -- The way we swap the values is store temp variable, then move clockwise from bottom left
  //  - Once we finish rotating the outer layer, we decrement the outer limits by one to get the inner layers (anything over 3x3)
  /////////////////////////////////////////////
  let left = 0,
    right = matrix.length - 1;
  let top, bottom;

  // This while-loop makes sure you get the entire matrix
  // There is no need to rotate the center index of an even n by n matrix
  while (left < right) {
    // This for-loop takes care of each layer
    for (let i = 0; i < right - left; i++) {
      top = left;
      bottom = right;
      // Save top-left value
      let topLeft = matrix[top][left + i];
      // Move bottom-left into top-left
      matrix[top][left + i] = matrix[bottom - i][left];
      // Move bottom-right into bottom-left
      matrix[bottom - i][left] = matrix[bottom][right - i];
      // Move top-right into bottom-right
      matrix[bottom][right - i] = matrix[top + i][right];
      // Move temp into top-right
      matrix[top + i][right] = topLeft;
    }
    // This will change it to the inner layers
    left++;
    right--;
  }
};
// @lc code=end
