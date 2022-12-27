class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
}
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    push(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
  
    pop() {
      if (this.length === 0) {
        return false;
      }
      const popped = this.tail;
      const newTail = this.tail.prev;
      if (newTail) {
        newTail.next = null;
        this.tail.prev = null;
      } else {
        this.head = null;
      }
      this.tail = newTail;
      this.length--;  
      return popped;
    }
  
    shift() {
      if (!this.head) {
        return false;
      }
      const shiftedNode = this.head;
      const newHead = this.head.next;
      if (this.head !== this.tail) {
        newHead.prev = null;
        shiftedNode.next = null;
      } else {
        this.tail = null;
      }
      this.head = newHead;
      this.length--;
      return shiftedNode;
    }
  
    unshift(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
    }
  
    insert (index, value) {
        if (!Number.isInteger(index) || index < 0 || index > this.length + 1) {
            console.log(`Invalid index. Current length is ${this.length}.`);
            return this;
        }

        // If index is 0, prepend
        if (index === 0) {
            this.prepend(value);
            return this;
        }
        if (index === this.length) {
            this.append(value);
            return this;
        }
        let newNode = new Node(value);
        let previousNode = this.head;

        for (let k = 0; k < index - 1; k++) {
            previousNode = previousNode.next;
        }
        let nextNode = previousNode.next;
        newNode.next = nextNode;
        previousNode.next = newNode;
        newNode.previous = previousNode;
        nextNode.previous = newNode;
        this.length++;
    }
  
    remove (index) {
        if (!Number.isInteger(index) || index < 0 || index > this.length) {
            console.log(`Invalid index. Current length is ${this.length}.`);
            return this;
        }
        if (index === 0) {
            this.head = this.head.next;
            this.head.previous = null;

            this.length--;
            this.printList();
            return this;
        }
        if (index === this.length - 1) {
            this.tail = this.tail.previous;
            this.tail.next = null;

            this.length--;
            this.printList();
            return this;
        }
        let previousNode = this.head;
        for (let k = 0; k < index - 1; k++) {
            previousNode = previousNode.next;
        }
        let deleteNode = previousNode.next;
        let nextNode = deleteNode.next;
        previousNode.next = nextNode;
        nextNode.previous = previousNode;

        this.length--;
        this.printList();
        return this;
    }
  
    get(index) {
      if (index >= this.length || index < 0) {
        return false;
      }
      let currentIndex = 0;
      let currentNode = this.head;
      while (currentIndex !== index) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      return currentNode;
    }
  
    set(index, val) {
      const foundNode = this.get(index)
      if(foundNode){
          foundNode.value = val
          return foundNode;
      }
      return null;
    }
    
    printList() {
      if(this.head){
        let current = this.head;
        while (current.next) {
          console.log(current);
          current = current.next;
        }
        console.log(current );
      } else {
        console.log("empty list")
      }
      console.log(this.length)
    }
    
  }

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(8);
doublyLinkedList.push(5);
//doublyLinkedList.printList();
//doublyLinkedList.pop();
//doublyLinkedList.printList();
//doublyLinkedList.unshift(99);
//doublyLinkedList.printList();
//doublyLinkedList.shift();
//doublyLinkedList.printList();
//console.log(doublyLinkedList.get(2));
//doublyLinkedList.set(2, 88);
// doublyLinkedList.printList();
//doublyLinkedList.remove(1);
//doublyLinkedList.insert(2, 55);
doublyLinkedList.printList();









  
  
  
  
  


