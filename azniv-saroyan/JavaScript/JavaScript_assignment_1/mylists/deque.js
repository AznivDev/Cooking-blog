class Deque {
    constructor() {
        this.front = this.back = undefined;
        this.length = 0;
    }

    addFront(value) {
        if (!this.front) {
            this.front = this.back = { value };}
        else {
            this.front = this.front.next = { value, prev: this.front };
        }
        this.length++;
    }

    removeFront() {
        let value = this.peekFront();
        if (this.front === this.back) {
             this.front = this.back = undefined;
        }else {
            (this.front = this.front.prev).next = undefined;
        }
        this.length--;
        return value;
    }

    peekFront() { 
        return this.front && this.front.value;
    }

    addBack(value) {
        if (!this.front) {
            this.front = this.back = { value };
        } else {
            this.back = this.back.prev = { value, next: this.back };
        }
        this.length++;
    }

    removeBack() {
        let value = this.peekBack();
        if (this.front === this.back) {
            this.front = this.back = undefined;
        } else {
            (this.back = this.back.next).back = undefined;
        }
        this.length--;
        return value;
    }
    
    peekBack() { 
        return this.back && this.back.value;
    }

    size() {
        return this.length;
    }//O(1)

    isEmpty(){
        return this.length === 0;
    }//O(1)
}

let deque = new Deque;
deque.addFront(1);
deque.addFront(2);
deque.addBack(3);
deque.addFront(4);
deque.removeBack();
deque.addBack(9);
deque.removeFront();
console.log(deque); 
console.log(deque.size());
console.log(deque.isEmpty());
// console.log(deque.peekBack()); 
// console.log(deque.peekFront());