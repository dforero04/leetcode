/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 *
 * Given two strings s and t, return true if t is an anagram of s, and false
 * otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a
 * different word or phrase, typically using all the original letters exactly
 * once.
 *
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length, t.length <= 5 * 10^4
 * s and t consist of lowercase English letters.
 *
 *
 *
 * Follow up: What if the inputs contain Unicode characters? How would you
 * adapt your solution to such a case?
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // If the 2 strings aren't the same length, then they cannot be anagrams of each other
  if (s.length !== t.length) return false;

  // Initialize map to keep track of character frequency
  const sMap = new Map();

  // Add characters of 1st string to map
  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i])) {
      sMap.set(s[i], sMap.get(s[i]) + 1);
    } else {
      sMap.set(s[i], 1);
    }
  }

  // Check all characters of 2nd string to map
  for (i = 0; i < t.length; i++) {
    // Make sure to check if the value is greater than 0 because that means there are
    // still more of that character in the string
    if (sMap.has(t[i]) && sMap.get(t[i]) > 0) {
      // Decrement frequency by 1
      sMap.set(t[i], sMap.get(t[i]) - 1);
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end
