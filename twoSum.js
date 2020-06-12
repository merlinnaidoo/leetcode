/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
    for (let x = 0; x < nums.length; x++){
        for (let i = x + 1 ; i < nums.length; i++){
            if (nums[x] + nums[i] == target){
                return iArr = [x,i];
            }
        }    
    }
};

console.log(twoSum([2,5,5,11],10));

