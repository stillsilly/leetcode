/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0
    let right = nums.length -1
    let result = []
    while(left<=right){
        if(Math.abs(nums[left])>=Math.abs(nums[right])){
            result.unshift(Math.pow(nums[left], 2))
            left = left + 1
        }else{
            result.unshift(Math.pow(nums[right], 2))
            right = right - 1
        }
    }

    return result
};