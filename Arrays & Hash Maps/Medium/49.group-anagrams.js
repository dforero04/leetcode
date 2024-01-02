/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 *
 * https://leetcode.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (64.66%)
 * Likes:    17925
 * Dislikes: 538
 * Total Accepted:    2.4M
 * Total Submissions: 3.6M
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * Given an array of strings strs, group the anagrams together. You can return
 * the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a
 * different word or phrase, typically using all the original letters exactly
 * once.
 *
 *
 * Example 1:
 * Input: strs = ["eat" ,"tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * Example 2:
 * Input: strs = [""]
 * Output: [[""]]
 * Example 3:
 * Input: strs = ["a"]
 * Output: [["a"]]
 *
 *
 * Constraints:
 *
 *
 * 1 <= strs.length <= 10^4
 * 0 <= strs[i].length <= 100
 * strs[i] consists of lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  //   /////////////////////////////////////////////////////
  //   // SOLUION USING CHARACTER FREQUENCY ARRAY AND UNIQUE KEY
  //   /////////////////////////////////////////////////////
  //   // Object that holds the final result
  //   let result = {};
  //   for (string of strs) {
  //     // Initialize array of 26 indices to keep track of char frequency
  //     let count = new Array(26).fill(0);
  //     // Fill count array with char freq in current string
  //     for (char of string) count[char.charCodeAt() - 97]++;
  //     // Create unique key by joining count array into a string value
  //     // A separator is needed to prevent 2 words from having the same key
  //     let key = count.join("#");
  //     // Check to see if the final result has the key value. If not, add it.
  //     result[key] ? result[key].push(string) : (result[key] = [string]);
  //   }
  //   return Object.values(result);
  //  // Time Complexity: O(n*k) where n is the size of input array and k is the maximum length of string in input array
  //  // Space Complexity: O(n)
  //
  ////////////////////////////////////////////////////////
  // SOLUTION USING STRING SPLIT, SORT, JOIN AND MAP
  ////////////////////////////////////////////////////////
  let m = new Map();
  for (let str of strs) {
    // Sort each string
    let sorted = str.split("").sort().join("");
    // Add str to map value
    if (m.has(sorted)) m.set(sorted, [...m.get(sorted), str]);
    else m.set(sorted, [str]);
  }
  return Array.from(m.values());
  // Time Complexity: O(n*klog(k)) where n is the length of input array and k is the maximum length of a string in input array
  // Space Complexity: O(n)
};
// @lc code=end
