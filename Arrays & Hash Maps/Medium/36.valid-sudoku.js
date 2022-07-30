/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 *
 * https://leetcode.com/problems/valid-sudoku/description/
 *
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be
 * validated according to the following rules:
 *
 *
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9
 * without repetition.
 *
 *
 * Note:
 *
 *
 * A Sudoku board (partially filled) could be valid but is not necessarily
 * solvable.
 * Only the filled cells need to be validated according to the mentioned
 * rules.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: board =
 * [["5","3",".",".","7",".",".",".","."]
 * ,["6",".",".","1","9","5",".",".","."]
 * ,[".","9","8",".",".",".",".","6","."]
 * ,["8",".",".",".","6",".",".",".","3"]
 * ,["4",".",".","8",".","3",".",".","1"]
 * ,["7",".",".",".","2",".",".",".","6"]
 * ,[".","6",".",".",".",".","2","8","."]
 * ,[".",".",".","4","1","9",".",".","5"]
 * ,[".",".",".",".","8",".",".","7","9"]]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: board =
 * [["8","3",".",".","7",".",".",".","."]
 * ,["6",".",".","1","9","5",".",".","."]
 * ,[".","9","8",".",".",".",".","6","."]
 * ,["8",".",".",".","6",".",".",".","3"]
 * ,["4",".",".","8",".","3",".",".","1"]
 * ,["7",".",".",".","2",".",".",".","6"]
 * ,[".","6",".",".",".",".","2","8","."]
 * ,[".",".",".","4","1","9",".",".","5"]
 * ,[".",".",".",".","8",".",".","7","9"]]
 * Output: false
 * Explanation: Same as Example 1, except with the 5 in the top left corner
 * being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it
 * is invalid.
 *
 *
 *
 * Constraints:
 *
 *
 * board.length == 9
 * board[i].length == 9
 * board[i][j] is a digit 1-9 or '.'.
 *
 *
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // An array of sets for each row, col, and 3 x 3 square
  const rowMap = [];
  const colMap = [];
  const sqMap = [];

  for (let i = 0; i < 9; i++) {
    rowMap[i] = new Set();
    colMap[i] = new Set();
    sqMap[i] = new Set();
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      // if we run into a '.', just move on to the next location
      if (board[row][col] === ".") continue;

      // This formula divides the sudoku matrix into this format
      // [0 ,1, 2]
      // [3, 4, 5]
      // [6, 7, 8]

      const boxNum = 3 * Math.floor(row / 3) + Math.floor(col / 3);
      if (
        rowMap[row].has(board[row][col]) ||
        colMap[col].has(board[row][col]) ||
        sqMap[boxNum].has(board[row][col])
      )
        return false;

      rowMap[row].add(board[row][col]);
      colMap[col].add(board[row][col]);
      sqMap[boxNum].add(board[row][col]);
    }
  }

  return true;
};
// @lc code=end
