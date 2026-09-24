class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(nums) {
    //     let i=0;
    //     let len= nums.length;
    //     while(i<len){
    //         for(let j=i+1;j<len;j++){
    //             if(nums[j]===nums[i]) return true
    //         }
    //         i++;
    //     }
    //     return false;
    // }

    hasDuplicate(nums) {
        let newSet= new Set()
        for(let i of nums){
            if(newSet.has(i))
            return true
            else
            newSet.add(i)
        }
        return false
    }
}
