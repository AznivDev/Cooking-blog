class List { 
    constructor() {  
        this.length = 0; 
        this.data = {}; 
    }

    push(element) {
        this.data[this.length] = element;
        this.length++;
        return this.data;
    }
     
    shift(element){
        for(let i = this.length; i >= 1; i--) {
            this.data[i] = this.data[i-1];
        }
        this.data[0] = element;
        this.length++; 
        return this.data;
    }

    unshift(){
        delete this.data[0];
        for(let i=0; i < this.data.length-1; i++){
            this.data[i] = this.data[i+1];
        }
        this.length--;
        return this.data;
    }

    pop() {
        delete this.data[this.length];
        this.length--;
        return this.data;
    }

    insertAt(item, index) {
        for(let i = this.length; i >= index; i--) {
          this.data[i] = this.data[i-1];
        }
        this.data[index] = item;
        this.length++; 
        return this.data;
    }

    deleteAt(index) {
        for(let i = index; i < this.length - 1; i++) {
          this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
        return this.data;
    }

    getElementAtIndex(index) {
        return this.data[index];
    }
}

let list = new List();
list.push(5);
list.push(3);
list.push(9);
list.shift(5);
list.shift(8);
list.unshift();
list.pop();
list.insertAt(48, 2); 
list.deleteAt(2); 
console.log(list);
console.log(list.getElementAtIndex(1));