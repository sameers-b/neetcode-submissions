class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let len= nums.length;
        let ans = []
        let i=1;
        while(i<=2){
            for(let i=0;i<len;i++){
                ans.push(nums[i])
            }
            i++
        }
        return ans
    }
}
