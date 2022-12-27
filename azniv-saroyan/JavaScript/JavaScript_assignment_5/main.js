// 1
let user = {
    name: "Ani",
    suurname: "Saryan",
    age: "14",
    getInfo() {
        console.log( `Hi, i am ${this.name} ${this.suurname}. And i am ${this.age} years old.` );
    }
}
user.getInfo();

// 2
let arr = [4, 5, 9];
let arrLength = arr.length;
function isPrime ( number ) {
    if ( number === 0 || number === 1 ) {
        return true;
    }  else {
        let result = true;
        for( let i = 2 ; i < number; i++ ) {
            if ( number % i === 0 ) {
                result = false;
                return result;
            } 
        }
        if ( result === true ) {
            return true;
        } 
    }
} 
function isOdd ( number ) {
    if ( number % 2 === 0 ) {
        return false;
    } else {
        return true;
    }
};
function generator( arrLength ) {
    let newArray = [];
    for( let i = 0; i < arrLength ; i++ ) {
        newObj = {
            [i] : [ number = Math.floor(Math.random() * (100 - 1) + 1),
                isOdd(number),
                isPrime(number)
            ]
        };
        if( !newArray[newObj] ) {
            newArray.push(newObj);
        }
   }
    return newArray;
}
function GenerateNumbers (arrLength) {
    this.arrLength = arrLength;
    this.generator = generator(this.arrLength);
}
let generateNumbers = new GenerateNumbers(3);
console.log( generateNumbers.generator );

// 3
class BaseCalculator {
    constructor (number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }
    sum () {
        return this.number1 + this.number2;
    }

    minus () {
        return this.number1 - this.number2;
    }
    divide () {
        return this.number1 / this.number2;
    }
    multiple() {
        return this.number1 * this.number2;
    }
}
class MathCalculator extends BaseCalculator {
    reset() {
        this.number1 = 0;
        this.number2 = 0;

        return [ this.number1 , this.number2 ];
    }
}
let mathCalculator = new MathCalculator(4, 5);
console.log( mathCalculator.sum(), "\n",
             mathCalculator.minus(), "\n",
             mathCalculator.divide(), "\n",
             mathCalculator.multiple(), "\n",
             mathCalculator.reset()
);