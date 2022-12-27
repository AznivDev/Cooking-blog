class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Linkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head) {
            return undefined;
        }
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        }
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) {
            return null;
        }
        let counter = 0;
        let current = this.head;
        while(counter !== index) {
            current = current.next;
            current++;
        }
        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) {
            return false;
        }
        if(index === this.length) {
            return !!this.push(val);
        }
        if(index === 0) {
            return !!this.unshift(val);
        }
        let node = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = node;
        node.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) {
            return undefined;
        }
        if(index === 0) {
            return this.shift();
        }
        if(index === this.length-1) {
            return this.pop();
        }
        let previousNode = this.get(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
}

let linkedlist = new Linkedlist();
linkedlist.push(1);
linkedlist.push(2);
//linkedlist.pop();
// linkedlist.shift();
// linkedlist.unshift(3);
// linkedlist.insert(3, "a")
console.log(linkedlist.remove(2));
console.log(linkedlist);
//console.log(linkedlist.get(0));