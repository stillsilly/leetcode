/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 双指针
var reverseString = function (s) {
    let left = 0
    let right = s.length - 1
    while (left < right) {
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left = left + 1
        right = right - 1
    }
};
