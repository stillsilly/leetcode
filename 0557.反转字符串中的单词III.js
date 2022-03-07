/**
 * @param {string} s
 * @return {string}
 */
// 双指针
var reverseWords = function (s) {
    return s.split(' ').map(item => reverseString(item)).join(' ')
};

function reverseString(s) {
    s = s.split('')
    let left = 0
    let right = s.length - 1
    while (left < right) {
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left = left + 1
        right = right - 1
    }
    return s.join('')
}
