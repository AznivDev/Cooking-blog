const nums = [1,2,3];
const result = [];
let arr = [];
function possibleSubset( index, arr) {
    result.push([...arr]);
    for ( let i = index; i < nums.length; i++ ) {
        if ( i < index && nums[i] !== nums[i - 1] ) {
            continue;
        }
        arr.push(nums[i]);
        possibleSubset( i + 1, arr );
        arr.pop();
    }
    return result;
}
function getSubSubset(array) {
    possibleSubset(0, arr);
    return result;
}
console.log(getSubSubset(nums));