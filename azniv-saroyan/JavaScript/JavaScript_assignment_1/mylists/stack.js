//LIFO
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(value) {
        let node = new Node(value);
        if(!this.first) {
            this.first = node;
            this.last = node;
        } else {
            let prevFirst = this.first;
            this.first = node;
            this.first.next = prevFirst;
        }
        this.length++;
        return this.length;
    } //O(1)//

    pop() {
        if(!this.first) return null;
        let prevFirst = this.first;
        if(this.first === this.last) {
            this.last = null; 
        } else {
            this.first = this.first.next;
        }
        this.length--;
        return prevFirst.value;
    } //O(1)//

    size() {
        return this.length;
    }//O(1)

    isEmpty() {
        return this.length === 0;
    }//O(1)

    print() {
        if(this.isEmpty()) {
            console.log('Queue is empty');
        } else {
            let tmpArr = [];
            let tmp = this.first;
            while(tmp) {
                tmpArr.push(tmp.value);
                tmp = tmp.next;
            }
            console.log(tmpArr.join(','));
        }
    }//O(n)
}

let stack = new Stack();
stack.push(8);
stack.push(7);
console.log(stack);
stack.push(9);
console.log(stack.pop());
console.log(stack.size());
console.log(stack.isEmpty());
stack.print();