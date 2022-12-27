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


// InsertionSort(A):
// for i in range(len(A)):
// j = i - 1
// while j >= 0 and A[j+1] < A[j]:
// switch(A[j], A[j+1)
// j -= 1
// return A
//O(n2)