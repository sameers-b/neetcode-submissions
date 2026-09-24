class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj1={}; // val->ind
        for(let i in nums){
            obj1[nums[i]]=i;
        }
        for(let i in nums){
            let diff= target-nums[i];
            if(obj1[diff]!== undefined && obj1[diff]!==i)
              return [+i,+obj1[diff]]
        }
        return []
    }
}
