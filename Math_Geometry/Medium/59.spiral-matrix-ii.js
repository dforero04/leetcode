/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 *
 * https://leetcode.com/problems/spiral-matrix-ii/description/
 *
 * Given a positive integer n, generate an n x n matrix filled with elements
 * from 1 to n^2 in spiral order.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 3
 * Output: [[1,2,3],[8,9,4],[7,6,5]]
 *
 *
 * Example 2:
 *
 *
 * Input: n = 1
 * Output: [[1]]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 20
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // ALGORITHM                                                                                      //
  // - You set up boundaries for the matrix (top, right, bottom, left)                              //
  // - The algorithm will go until top boundary overlaps bottom, and left boundary overlaps right   //
  // - As you fill in a spiral, you increment the side/layer that you completed                     //
  //    -- For example, starting from the top left.                                                 //
  //        -- After filling the top row, you increment top++;                                      //
  //        -- After filling the right col, you decrement right--;                                  //
  // - You need to two conditionals going left and up in order to check to see if you               //
  // have already filled in those cells                                                             //
  //    -- You check the boundary values                                                            //
  ////////////////////////////////////////////////////////////////////////////////////////////////////

  // Initialize final array
  const res = new Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = new Array(n);
  }
  // Set up boundaries
  let count = 1,
    rowBegin = 0,
    colBegin = 0,
    rowEnd = n - 1,
    colEnd = n - 1;

  // Go while the boundaries do not overlap
  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    // Going right
    for (let i = colBegin; i <= colEnd; i++) {
      res[rowBegin][i] = count++;
    }
    rowBegin++;

    // Going down
    for (let j = rowBegin; j <= rowEnd; j++) {
      res[j][colEnd] = count++;
    }
    colEnd--;

    if (rowBegin <= rowEnd) {
      // Going left
      for (let k = colEnd; k >= colBegin; k--) {
        res[rowEnd][k] = count++;
      }
    }
    rowEnd--;

    if (colBegin <= colEnd) {
      // Going up
      for (let l = rowEnd; l >= rowBegin; l--) {
        res[l][colBegin] = count++;
      }
    }
    colBegin++;
  }
  return res;
};
// @lc code=end
