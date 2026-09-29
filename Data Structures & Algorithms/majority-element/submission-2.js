class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let resMap= new Map();
        let maxCount =nums[0];
        for(let i of nums){
            if(resMap.has(i)){
                resMap.set(i,resMap.get(i)+1)
            }else{
                resMap.set(i,1)
            }

            if(resMap.get(i)>resMap.get(maxCount)){
                maxCount=i;
            }
        }
        return maxCount;
    }
}
