class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let tempObj={};

        for(let str of strs){
            let key = str.split("").sort().join("")
            if(!tempObj[key]){
                tempObj[key]=[]
            }
            tempObj[key].push(str)
        }
        return Object.values(tempObj)
    }
}
