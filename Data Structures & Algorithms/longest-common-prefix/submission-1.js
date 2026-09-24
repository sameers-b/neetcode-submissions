class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let firstInd= strs[0]
        let prefix=""
        let breakPoint=0
        for(let i=0;i<firstInd.length;i++){
            for(let j=1;j<strs.length;j++){
               if(firstInd[i]!==strs[j][i]){
                breakPoint = 1
                break;
                }
            }
            if(breakPoint !== 0)
              break
            prefix += firstInd[i]
        }
        return prefix;
    }
}
