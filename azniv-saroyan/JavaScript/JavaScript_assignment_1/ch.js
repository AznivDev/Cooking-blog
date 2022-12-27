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