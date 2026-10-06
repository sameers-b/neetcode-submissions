class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let len= nums.length
        for(let i=1;i<=len;i++){
            if(!nums.includes(i))
               return i;
        }
        return len+1
    }
}
