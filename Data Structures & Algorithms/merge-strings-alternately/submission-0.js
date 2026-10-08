class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let w1Lng=word1.length;
        let w2Lng=word2.length;
         let maxLng = Math.max(w1Lng,w2Lng);
         let str=""
         for(let i=0;i<maxLng;i++){
            str+=(word1[i]||"")+(word2[i]||"")
         }   
         return str;      
    }
}
