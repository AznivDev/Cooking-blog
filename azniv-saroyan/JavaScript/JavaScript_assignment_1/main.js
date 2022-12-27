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
doublyLinkedList.printList();// 1
//let birthday = prompt("When is your birthday?");
//alert (`Your birthday in ${birthday}. `);

// 2
// let name = prompt("Write a name.");
// let surname = prompt("Write a surname");
// let age = prompt("Write a age");
//alert(`${name} ${surname} are you ${age} years old?`);

// 3
let number1 = 4;
let number2 = 5;
let number3 = -1;
let number4 = 8;

//alert(number1 <= number2 && number2 <= number3 && number3 <= number4);

// **
let number5 = 4; // 100
number5 <<=  1; // 1000 - multiply
//alert(number5);

let number6 = 4;
number6 >>= 1; // 010 - devide
//alert(number6);

let circleArea;
let r = 10;
circleArea = 3.14 << r << r;

//alert(circleArea);







//Binary search
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = 5;
function binarySearch(arr, n) {
    let middle = Math.floor((arr.length - 1) / 2);
    if(arr[0] === n || arr[arr.length-1] === n) {
        return n;
    } else {
        if(arr[middle] === n) {
            return arr[middle]
        } else if(arr[middle] > n) {
            return binarySearch(arr.slice(1, middle - 1), n);
        } else if (arr[middle] < n) {
            return binarySearch(arr.slice(middle + 1), n);
        }
    }
}
console.log(binarySearch(arr, n)); //O(log n)//

//iterativeSolutionSearch
function iterativeSolutionSearch (arr, n) {
    for(let i = 0; i < arr.length; i++) {
        if( arr[i] === n) {
            return arr[i];
        }
    }
}
console.log(iterativeSolutionSearch(arr, n));//O(n)//

//merge sort
let arr1 = [5, 9, 2, 8, 6, 1];
function mSort(arr) {
    debugger
    if(arr.length === 1) {
        return arr;
    }
    const middle = Math.floor(arr.length/2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(
        mSort(left),
        mSort(right)
    )
}

function merge(left, right){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
console.log(mSort(arr1)); // O(n*logn) //

// Գտնել արմատն ըստ որոշակի ճշգրտության
let number = 8;
let i = 0;
let increment = 0.1;
let middle = number / 2;
function getLog(number) {
    while(i < 6 && middle * middle < number) {
        if(number === middle * middle) {
            return middle;
        } else {
            if( number > middle * middle && number < (( middle + 1 ) * ( middle + 1 ) )) {
                middle += increment;
                i++;
                return getLog(number);
            } else if(number < middle * middle) {
                middle -= 1;
                i++;
                return getLog(number);
            } else if(number > middle * middle) {
                middle += 1;
                i++;
                return getLog(number);
            }
        }
    }
    return middle;
}
console.log(getLog(27));

// Գտնել տրված թվերի քանակը մասիվում
arr = [1, 2, 3, 4, 4, 4, 5, 5, 5, 5, 6, 7, 8, 8, 9, 10];

let left = 0, rigth = arr.length;
let j = 0; n = 5;
i = 0;
function binarySearchLeft(arr, left, rigth, n) {
    debugger
    let middle = Math.floor((left + rigth ) / 2);
    while ( j < arr.length ) {
        if(arr[middle] === n && arr[middle - 1] < n) {
            return middle;
        } else if(arr[middle] === n && arr[middle - 1] === n) {
            j++;
            return  binarySearchLeft(arr, left, middle - 1, n);
        } else {
            if( arr[middle] > n ) {
                j++;
                return  binarySearchLeft(arr, left, middle - 1, n);
            } else if ( arr[middle] < n ) {
                j++;
                return  binarySearchLeft(arr, middle + 1, rigth, n);
            }
        }
    } 
}
function binarySearchRigth(arr, left, rigth, n) {
    let middle = Math.floor((left + rigth ) / 2);
    while ( i < arr.length ) {
        if(arr[middle] === n && arr[middle + 1] > n) {
            return middle + 1;
        } else if(arr[middle] === n && arr[middle + 1] === n){
            i++;
            return  binarySearchRigth(arr, middle + 1, rigth, n);
        }else{
            if( arr[middle] > n ) {
                i++;
                return  binarySearchRigth(arr, left, middle - 1, n);
            } else if ( arr[middle] < n ) {
                i++;
                return  binarySearchRigth(arr, middle + 1, rigth, n);
            }
        }
    }
}

function getCountNumbers(arr, n){
    return binarySearchRigth(arr, left, rigth, n) - binarySearchLeft(arr, left, rigth, n);
}

console.log(getCountNumbers(arr, 5));

// InsertionSort(A):
// for i in range(len(A)):
// j = i - 1
// while j >= 0 and A[j+1] < A[j]:
// switch(A[j], A[j+1)
// j -= 1
// return A
//O(n2)
