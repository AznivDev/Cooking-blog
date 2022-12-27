//1.
document.addEventListener("DOMContentLoaded", () => { 
    let taskNumber = document.getElementById("task-number");
    let answer = document.getElementById("answer");
    let getAnswer = document.getElementById("getAnswer");
    let arayStrings = document.getElementById("arayStrings");
    let answerArrStrings = document.getElementById("answerArr-strings");
    let getAnswerArr = document.getElementById("getAnswer");

    getAnswer.addEventListener('click', () => {
        if(taskNumber.value === "1"){
            answer.innerText = "O(m*m*m)";
        } else if(taskNumber.value === "2"){
            answer.innerText = "O(n/3)";
        } else if(taskNumber.value === "3"){
            answer.innerText = "O(n armat i)";
        } else if(taskNumber.value === "4"){
            answer.innerText = "O(2)";
        } else if(taskNumber.value === "5"){
            answer.innerText = "O(n + m/2)";
        }else {
            answer.innerText = "Please set the correct number."
        }
    });
    
});
function f(m){
    let n = 0;
    for(let i = 0; i < m; i++) { //m
        for(let j = 0; j < i; j++) { //m*m
            for(let k = 1; k <= j;k++) { //m*m*m
                n++;
                return n;
            }
        }
    }
}

// Qani vor function-y ashxatelwu ajnqan, vorqan kashxati k-ov cikly, verjins kaxvac e j-ov ciklic, verjins el i-ov ciklic, complaxity-n klini m*m*m

//2

function f(n) {
    let i = 1;
    while(i <= n) {
        i *= 3
    }
}

//Qani vor i-n ajum e angam 3-ov, complaxityn klini O(n/3)

//3
function f(n) {
    let i = 2; 
    while(i <= n) {
        i *= i;
    }
}

//Qani vor i-n ajum e *=i-ov, complaxityn klini O(n armat i)

//4
function f(m) {
    if(m === 0) return;
    if(m % 2 == 0) {
        return f(m -1);
    }
    return;
}
// function-i complaxity-n 2 e, qani vor vataguyn depqum, erb tivy i skzbane
// lini 0-ic mec ev zuyg, mievnujn e rekursiayov kanchelis darnalu e kent
// if-erin chi bavarari ev return klini

//5
 function f(n, m) {
     if(n <= 0 && m <= 0) return;
     if(m > 0) {
         return f(n, m - 2);
     }
     if(n > 0) {
         return f(n - 1, m);
     }
     return
 }

 // Arajin paymany kbavarari m/2 angam, erkrwrdy kbavarari n angam, u
 // qani vor complaxityn hashvvum e vatagujn depqi hamar, hetevabar
 // ajs depqum ajn hashvelwu hamar petq e ditarkenq m-i ev n-i arjeqnery:
 // Ajsinqn, ete m/2 mec e n-ic, uremn function-i complaxity-n klini O(m/2),
 // Ete n > m/2-ic, ajd depqum function-i complaxytin klini O(n)
 // Kam O(n + m/2), vortex complaxityn hashvelis gumarman depqum toxnum enq arjeqov mecy

 //Recursion

let arr = ["o", "hi", "ygy", "hggg"];
let newArr =[];
let aggr = true;

function isSortedByLength(arr){
    if(arr.length <= 2) {
        if(arr[0].length < arr[1].length) {
            //console.log(true);
            return true;
        }
    }

    if(arr[0].length >= arr[1].length) {
        //console.log("false");
        return false;
    } 
    arr.shift()
    //console.log(arr);
    return( isSortedByLength(arr));   
}
isSortedByLength(arr);


//Data Structures
class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
}

class DLL{
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    push_right(val) {
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
  
    pop_right() {
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
  
    push_left() {
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
  
    push_left (val) {
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
  
    pop_left () {
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
}

let dll = new DLL();
// dll.push_right(5);
// dll.push_right(11);
//console.log(dll);
//dll.pop_right();
// dll.push_left(10);
// dll.pop_left();
// console.log(dll);



//Binary search
arr = [1, 2, 3, 4, 4, 4, 5, 5, 5, 5, 6, 7, 9, 10];

let left = 0, rigth = arr.length;
let j = 0; 
let arr2 = [4, 4];
let val1 = arr2[0];
let val2 = arr2[1]
i = 0;
function binarySearchLeft(arr, left, rigth, val1) {
    let middle = Math.floor((left + rigth ) / 2);
    while ( j < arr.length ) {
        if(arr[middle] === val1 && arr[middle - 1] < val1) {
            return middle;
        } else if(arr[middle] === val1 && arr[middle - 1] === val1) {
            j++;
            return  binarySearchLeft(arr, left, middle - 1, val1);
        } else {
            if( arr[middle] > val1 ) {
                j++;
                return  binarySearchLeft(arr, left, middle - 1, val1);
            } else if ( arr[middle] < val1 ) {
                j++;
                return  binarySearchLeft(arr, middle + 1, rigth, val1);
            }
        }
    } 
}
function binarySearchRigth(arr, left, rigth, val2) {
    let middle = Math.floor((left + rigth ) / 2);
    while ( i < arr.length ) {
        if(arr[middle] === val2 && arr[middle + 1] > val2) {
            return middle + 1;
        } else if(arr[middle] === val2 && arr[middle + 1] === val2){
            i++;
            return  binarySearchRigth(arr, middle + 1, rigth, val2);
        }else{
            if( arr[middle] > val2 ) {
                i++;
                return  binarySearchRigth(arr, left, middle - 1, val2);
            } else if ( arr[middle] < val2) {
                i++;
                return  binarySearchRigth(arr, middle + 1, rigth, val2);
            } 
        }
    }
}

function getCountNumbers(arr, arr2){
    let val1 = arr2[0];
    let val2 = arr2[1];
    return (binarySearchRigth(arr, left, rigth, val1) - binarySearchLeft(arr, left, rigth, val2)) > 0;
}

console.log(getCountNumbers(arr, arr2));