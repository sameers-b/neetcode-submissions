class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let len = s.length-1;
        for(let i=0;i<len/2;i++){
            [s[i],s[len-i]]=[s[len-i], s[i]]
        }
        return s;
    }
}
