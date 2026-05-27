class MinStack {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        console.log('testing')
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        let t = this.stack.slice(-1)
        return t;
    }

    /**
     * @return {number}
     */
    getMin() {
        let smallest = Infinity
        
        for(let n of this.stack){
            if(n < smallest){
                smallest = n;
            }
        }
        return smallest;
    }
}
