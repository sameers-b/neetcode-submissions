class MyHashMap {
    constructor() {
        this.arr=[];
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        for(let i in this.arr){
        if(this.arr[i][0]===key){
            this.arr[i][1]=value;
            return
        }
    }
    this.arr.push([key,value])
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
           for(let i in this.arr){
        if(this.arr[i][0]==key){
            return this.arr[i][1];
        }
    }
    return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        for(let i in this.arr){
        if(this.arr[i][0]===key){
            this.arr.splice(i,1);
            break;
        }
    }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
