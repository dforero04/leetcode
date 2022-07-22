/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 *
 * https://leetcode.com/problems/merge-intervals/description/
 *
 * Given an array of intervals where intervals[i] = [starti, endi], merge all
 * overlapping intervals, and return an array of the non-overlapping intervals
 * that cover all the intervals in the input.
 *
 *
 * Example 1:
 *
 *
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlap, merge them into
 * [1,6].
 *
 *
 * Example 2:
 *
 *
 * Input: intervals = [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= intervals.length <= 10^4
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // Done by myself

  // Result Array
  const res = [];
  // Sort the intervals array based on the first value
  // This is done so that we don't have to return to a previous overlapping interval to add to it
  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  // Starting interval is set to the first element in intervals
  // - This is done to take care of cases with 1 element in the input
  // Pointer also starts with the first element
  let curInterval = sorted[0],
    pointer = 0;

  // We check every value in the array
  while (pointer < sorted.length) {
    // Checks to see if the start of the interval is within the curInterval
    if (sorted[pointer][0] <= curInterval[1]) {
      // This step is done to make the interval larger if the end of the interval is larger than curInterval[1]
      curInterval[1] = Math.max(curInterval[1], sorted[pointer++][1]);
    } else {
      // Add curInterval to result array
      res.push(curInterval);
      // Change to new interval
      curInterval = sorted[pointer++];
    }
  }
  // Add the final interval to the result array
  res.push(curInterval);

  return res;
};
// @lc code=end
