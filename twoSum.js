/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let arr = [2 ,7, 11, 15]
var twoSum = function(nums, target) {
    let ansArr = [];
    let index1 = 0;
    let index2 = 0;
    
    for (let i = 0; i <= nums.length; i++){
        index1 = i;
        index2 = i+1;
    
        if ((nums[index1] + nums[index2]) == target){
            ansArr.push(index1);
            ansArr.push(index2);
        }
        return ansArr;
    }
};

console.log(twoSum(arr,9));
console.log('hello');