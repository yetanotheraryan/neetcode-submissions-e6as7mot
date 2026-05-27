class MinStack {
    private stack: number[];

    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        this.stack.push(val);
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        let t = this.stack.slice(-1)[0];
        return t;
    }

    getMin(): number {
        let smallest = Infinity;

        for (let n of this.stack) {
            if (n < smallest) {
                smallest = n;
            }
        }
        return smallest;
    }
}
