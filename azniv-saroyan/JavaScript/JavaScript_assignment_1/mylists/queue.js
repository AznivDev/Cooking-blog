//FIFO
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null; 
        this.tail = null;
        this.length = 0;
    }

    enqueue(value) {
        let node = new Node(value);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this.length;
    } //O(1)//

    dequeue() {
        if(!this.head) {
            return null;
        }
        let prevFirst = this.head;
        if(this.head === this.tail) {
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return prevFirst.value;
    }//O(1)//

    size() {
        return this.length;
    }//O(1)

    isEmpty(){
        return this.length === 0;
    }//O(1)

    print() {
        if(this.isEmpty()) {
            console.log('Queue is empty');
        } else {
            let tmpArr = [];
            let tmp = this.head;
            while(tmp) {
                tmpArr.push(tmp.value);
                tmp = tmp.next;
            }
            console.log(tmpArr.join(','));
        }
    }//O(n)

    peek(){
        return this.head;
    }
}

let queue = new Queue();
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue(5);
queue.enqueue(5);
queue.enqueue(5);
queue.enqueue(5);
queue.enqueue(5);
queue.enqueue(5);
console.log(queue);
console.log(queue.size());
queue.print();
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.dequeue());