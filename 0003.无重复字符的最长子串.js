/**
 * @param {string} s
 * @return {number}
 */
// 双指针
// TODO 不是很好，还有优化空间，硬写的
var lengthOfLongestSubstring = function(s) {
    let max = 0
    let left = 0
    let right = left
    while(left < s.length && right < s.length) {
        for(let i = left; i<right; i++) {
            if(s[i] === s[right]){
                max = Math.max(right-left, max)
                left = i + 1
            }
        }
        max = Math.max(right-left + 1, max)

        right = right + 1
    }

    return max
};
