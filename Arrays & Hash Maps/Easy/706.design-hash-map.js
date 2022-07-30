/*
 * @lc app=leetcode id=706 lang=javascript
 *
 * [706] Design HashMap
 *
 * https://leetcode.com/problems/design-hashmap/description/
 *
 * Design a HashMap without using any built-in hash table libraries.
 *
 * Implement the MyHashMap class:
 *
 *
 * MyHashMap() initializes the object with an empty map.
 * void put(int key, int value) inserts a (key, value) pair into the HashMap.
 * If the key already exists in the map, update the corresponding value.
 * int get(int key) returns the value to which the specified key is mapped, or
 * -1 if this map contains no mapping for the key.
 * void remove(key) removes the key and its corresponding value if the map
 * contains the mapping for the key.
 *
 *
 *
 * Example 1:
 *
 *
 * Input
 * ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
 * [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
 * Output
 * [null, null, null, 1, -1, null, 1, null, -1]
 *
 * Explanation
 * MyHashMap myHashMap = new MyHashMap();
 * myHashMap.put(1, 1); // The map is now [[1,1]]
 * myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
 * myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
 * myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1],
 * [2,2]]
 * myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the
 * existing value)
 * myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
 * myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
 * myHashMap.get(2);    // return -1 (i.e., not found), The map is now
 * [[1,1]]
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= key, value <= 10^6
 * At most 10^4 calls will be made to put, get, and remove.
 *
 *
 */

// @lc code=start

///////////////////////////////////////////////////////////
// RESEARCH SOLUTION MORE
// - This one works, but there is more explanation on how to actually implement a hashing function
// https://leetcode.com/problems/design-hashmap/discuss/1097755/JS-Python-Java-C%2B%2B-or-(Updated)-Hash-and-Array-Solutions-w-Explanation
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
var MyHashMap = function () {
  this.map = [];
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const index = this.map.findIndex((el) => el[0] === key);
  index >= 0 ? (this.map[index][1] = value) : this.map.push([key, value]);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const index = this.map.findIndex((el) => el[0] === key);
  return index >= 0 ? this.map[index][1] : index;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const index = this.map.findIndex((el) => el[0] === key);
  if (index >= 0) {
    const copy = this.map.slice();
    const filtered = copy.filter((el) => el[0] !== key);
    this.map = filtered.slice();
  }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end
