// 1
let str  = ["hello", "my", "friend"];
// Տարբերակ 1
function concatAndUpperCase1 () {
    let result = [""];
    for ( let i = 0; i < str.length; i++ ) {
        for ( let j = 0; j < str[i].length; j++ ) {
            result.push(str[i][j]);
        }
    }
    return result.join("").toUpperCase();
}
//console.log( concatAndUpperCase1() );

// Տարբերակ 2
concatAndUpperCase2( str )
function concatAndUpperCase2 () {
    return str.reduce( (strResult, item) => {
        return strResult += item;
    }, "" ).toUpperCase() ;
}
//console.log( concatAndUpperCase2() );

// 2
let arrNumbers1 = [1, 2, 2, 3, 4, 5];
let arrNumbers2 = [3, 4, 4, 5, 6, 7];

function getIntersection ( arrNumbers1, arrNumbers2 ) {
    let resultGetIntersection = [];
    for ( let i = 0; i < arrNumbers1.length ; i++ ) {
        for ( let j = 0; j < arrNumbers2.length; j++ ) {
            if ( arrNumbers1[i] === arrNumbers2[j] ) {
                if(!resultGetIntersection.includes(arrNumbers1[i])) {
                    resultGetIntersection.push( arrNumbers1[i]);
                } 
            }
        }
    }
    return resultGetIntersection;
}
console.log(getIntersection( arrNumbers1, arrNumbers2 ));

// 3 
function getUnion ( arrNumbers1, arrNumbers2 ) {
    let getUnionResult = []; 
    let resultGetIntersection = [];
    let concatedArrays = [];
    for ( let i = 0; i < arrNumbers1.length ; i++ ) {
        for ( let j = 0; j < arrNumbers2.length; j++ ) {
            if ( arrNumbers1[i] === arrNumbers2[j] ) {
                resultGetIntersection.push( arrNumbers1[i]);
            }
        }
    }
    for( let i = 0; i < arrNumbers1.length; i++ ) {
        concatedArrays.push(arrNumbers1[i]);
    }
    for( let i = 0; i < arrNumbers2.length; i++ ) {
        concatedArrays.push(arrNumbers2[i]);
    } 
    for( let i = 0; i <  concatedArrays.length; i++ ) {
        if ( resultGetIntersection.indexOf(concatedArrays[i]) === -1 && !!!getUnionResult.includes(concatedArrays[i])) {
            getUnionResult.push(concatedArrays[i]);
        }
    }
    return getUnionResult;
}
console.log( getUnion( arrNumbers1, arrNumbers2 ) );

// includes
let strSource = "Armenia";
let substr = "ni";
let arrForChack = [];
let numberForCheck = 0;
function isInclude ( strSource, substr ) {
    for ( let i = 0; i < substr.length; i++ ) {
        if ( strSource[substr[i]] !== -1 ) {
            arrForChack.push( strSource.indexOf(substr[i]) );
        }
    }
    for ( let i = 1; i <  arrForChack.length - 1; i++ ) {
        if(arrForChack[i+1] - arrForChack[i] !== 1 ){
            numberForCheck++;
            return false;
        }
    }
    if ( numberForCheck === 0 ) {
        return true;
    }
}
//console.log(isInclude (strSource, substr));

// Objects methods
class Dictionary {
    constructor () {
        this.dictionary = {}
    }
    set( key,  value) {
        this.dictionary[key] = value;
    }   
    get(key) {
        return this.dictionary[key];
    }
    size() {
        return Object.keys(this.dictionary).length;
    }
    keys() {
        return Object.keys(this.dictionary);
    }
    values() {
        return Object.values(this.dictionary);
    }
    hes(key) {
        return !!!this.dictionary.key;
    }
    size() {
        return Object.keys(this.dictionary).length;
    }
    clear() {
        return this.dictionary = {};
    }
    remove(key) {
        let obj = {};
        for(const[key1, value1] of Object.entries(this.dictionary)){
            if(key1 !== key){
                obj.key = key1;
                obj.value = value1;
            }
        }
        this.dictionary = obj;
    }
}
let dictionary = new Dictionary();
dictionary.set(2, "5" );
dictionary.set( 3, "3" );
console.log( dictionary );
// console.log( dictionary.get(2) );
// console.log( dictionary.keys() );
// console.log( dictionary.values() );
// console.log( dictionary.hes(3) );
dictionary.remove("3");
console.log( dictionary);
// dictionary.clear();
// console.log( dictionary.size() );
// class dictionary extends Dictionary{};
// dictionary = new Map();
// dictionary.set( "1", "oen" );
// dictionary.set( "2", "two" );
// dictionary.forEach( (key) => {
// console.log( `key ${key}` ) });
// console.log( dictionary.entries() );
// console.log( dictionary );
