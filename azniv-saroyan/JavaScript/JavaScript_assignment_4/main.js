// 1
function findMostFrequent ( arr ) {
    let store = {};
    let result = 0;
    for ( let value of arr ) {
        if ( store[value] ) {
            store[value] += 1;
        } else {
            store[value] = 1; 
        } 
    
        if ( store[value] > result ) {
            count = store[value];
            result = value;
        }
    }
     return result;
}
console.log (findMostFrequent( [1, 5, 6, 1, 2, 5, 5, 9, 5] ));

// 2
function isCorrect(arr) {
    const left = '({[';
    const right = ']})';
    const reserve = [];
    const map = {
      '}': '{',
      ')': '(',
      ']': '['
    }
    for ( let item of arr ) {
        if ( left.includes(item) ) {
            reserve.push( item )
        } else if ( right.includes(item) ) {
            const last = reserve.pop()
            if ( map[item] !== last ) {
            return false;
            }
        }
    }
    return !reserve.length;
  }
  console.log( isCorrect(["H", "(", "Y", ")", "{", "o", "}"]) );

// **
function findTwoNumbers (arr, target) {
    for ( let i = 0; i < arr.length; i++ ) {
        for( let j = 0; j<arr.length; j++ ){
            if( arr[j] === target - arr[i] ) {
                return [i , arr.indexOf(arr[j])];
            } 
        }
    }
}
console.log( findTwoNumbers( [2,7,11,15], 18) );