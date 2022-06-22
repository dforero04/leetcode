/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // Initialize map to check string against
  const map = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  // Initialize stack
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    // This tries to mirror the string onto the stack
    if (map.has(s[i])) {
      stack.push(map.get(s[i]));
    } else {
      let p = stack.pop();
      if (p !== s[i]) return false;
    }
  }
  // You must make sure the stack is empty
  return stack.length === 0;
};
// @lc code=end
