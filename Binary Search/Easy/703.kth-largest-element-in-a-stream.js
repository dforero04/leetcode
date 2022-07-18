/*
 * @lc app=leetcode id=703 lang=javascript
 *
 * [703] Kth Largest Element in a Stream
 *
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/description/
 *
 *
 * Design a class to find the k^th largest element in a stream. Note that it is
 * the k^th largest element in the sorted order, not the k^th distinct
 * element.
 *
 * Implement KthLargest class:
 *
 *
 * KthLargest(int k, int[] nums) Initializes the object with the integer k and
 * the stream of integers nums.
 * int add(int val) Appends the integer val to the stream and returns the
 * element representing the k^th largest element in the stream.
 *
 *
 *
 * Example 1:
 *
 *
 * Input
 * ["KthLargest", "add", "add", "add", "add", "add"]
 * [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
 * Output
 * [null, 4, 5, 5, 8, 8]
 *
 * Explanation
 * KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
 * kthLargest.add(3);   // return 4
 * kthLargest.add(5);   // return 5
 * kthLargest.add(10);  // return 5
 * kthLargest.add(9);   // return 8
 * kthLargest.add(4);   // return 8
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= k <= 10^4
 * 0 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * -10^4 <= val <= 10^4
 * At most 10^4 calls will be made to add.
 * It is guaranteed that there will be at least k elements in the array when
 * you search for the k^th element.
 *
 *
 */

// @lc code=start
/**THERE IS A MORE OPTIMAL WAY TO CODE THIS USING A MIN HEAP OF LENGTH K, BUT THAT IS MORE IN DEPTH IMPLEMENTATION. RESEARCH THAT SOLUTION MORE */
/**
 * @param {number} k
 * @param {number[]} nums
 */
const KthLargest = function (k, nums) {
  // Initial thought is to sort nums and binary search to add into array
  this.k = k;
  // This is sorted in largest (index 0) to smallest (index nums.length-1)
  this.nums = nums.sort((a, b) => b - a);
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  const nums = this.nums;
  // Right is at the null value at the end of the array, in order to add a value in that spot
  let left = 0,
    right = nums.length;

  // Whenever left crosses over right, you will add the value at the position of left
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] === val) {
      left = middle;
      break;
    }
    if (nums[middle] > val) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  // You will always add the new value at the left position.
  nums.splice(left, 0, val);
  return nums[this.k - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
