class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let tempObj={};
        let res = [];
        for(let i of nums){
            if(tempObj[i]!= undefined){
                tempObj[i]+=1;
            }else{
                tempObj[i]=1
            }
        }

        for(let i=1;i<=k;i++){
            let max={key:0,val:0};
           for(let [key,val] of Object.entries(tempObj)){
              if(val!=undefined && max.val<val){
                max.val=val
                max.key=key
              }
           }
           if(tempObj[max.key]){
            tempObj[max.key]=undefined
            res.push(max.key)
           }
              
        }

        return res
    }
}
