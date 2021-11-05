/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    let len = nums.length
    k = k % len
    for(let i=0;i<len/2;i++){
        let temp = nums[i]
        nums[i] = nums[len-i -1]
        nums[len-i-1] = temp
    }

    for(let i=0;i<k/2;i++){
        let temp = nums[i]
        nums[i] = nums[k-i-1]
        nums[k-i-1] = temp
    }

    for(let i=k;i<(k+len)/2;i++){
        let temp = nums[i]
        nums[i] = nums[len+k-i-1]
        nums[len+k-i-1] = temp
    }

    return nums
};