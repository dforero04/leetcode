/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 *
 *
 * Example 1:
 *
 *
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 * Example 2:
 *
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 * Constraints:
 *
 * 1 <= n <= 45
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

/**
 * Algorithm:
 * Since you can only make 1 or 2 steps, you can make a decision tree to show all the possible routes to take
 * Once that tree is made, you can use DFS to see how many unique paths there are
 * With DFS and a decision tree in mind, you can use each smaller sub-problem to solve the bigger picture.
 * For example:
 * n = 5
 * The base case is you are at the final number (5), so you should return a 1.
 * If you are at n - 1 (4), then there are only 1 ways to get to n, since 2 would bring you over.
 * If youa re at n - 2 (3), one step will take you to 4, which you know has only 1 way, and 2 steps will take you to 5, which returns 1.
 * So you use each sub-problem to solve this.
 * Instead of using an array of size n, you only need to keep track of the 2 previous values.
 */
var climbStairs = function (n) {
  let one = 1;
  let two = 1;

  for (let i = 0; i < n - 1; i++) {
    let temp = one;
    one = one + two;
    two = temp;
  }
  return one;
};
// @lc code=end
