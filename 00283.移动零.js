/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// easy
// 双指针
var moveZeroes = function (nums) {
    let point1 = 0
    let point2 = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[point1] !== 0) {
            nums[point2] = nums[point1]
            point2 = point2 + 1
        }
        point1 = point1 + 1
    }
    for (let i = point2; i < nums.length; i++) {
        nums[i] = 0
    }
};
