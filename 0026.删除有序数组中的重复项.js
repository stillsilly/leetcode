/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let len = nums.length
    let map = {}
    for (let i = 0; i < len; i++) {
        if (map[nums[i]]) {
            nums.splice(i, 1)
            len = len - 1
            i = i - 1
        } else {
            map[nums[i]] = true
        }
    }
    return len
};