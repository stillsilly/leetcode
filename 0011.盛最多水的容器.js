/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0
    let leftIndex = 0
    let rightIndex = height.length - 1

    while (leftIndex < rightIndex) {
        let left = height[leftIndex]
        let right = height[rightIndex]
        let width = rightIndex - leftIndex
        let capacity
        if (left < right) {
            capacity = left * width
            leftIndex = leftIndex + 1
        } else {
            capacity = right * width
            rightIndex = rightIndex - 1
        }
        if (capacity > max) {
            max = capacity
        }
    }

    return max
};

