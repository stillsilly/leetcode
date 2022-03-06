/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// easy
// 双指针
var twoSum = function (numbers, target) {
    let left = 0
    let right = numbers.length - 1

    while (left < right) {
        for (let i = right; i > left; i--) {
            if (numbers[left] + numbers[i] > target) {
                right = right - 1
            } else if (numbers[left] + numbers[i] === target) {
                return [left + 1, i + 1]
            }
        }
        left = left + 1
    }

    return [left + 1, right + 1]
};
