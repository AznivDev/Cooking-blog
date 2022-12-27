let arr1 = [2, 3], arr2 = [4, 1, 2];
function  multiplyArrays (arr1, arr2) {
    let num1 = Number(arr1.join(''));
    let num2 = Number(arr2.join(''));
    return (multiply2(num1, num2)).toString().split("");   
}
function multiply2 (x, y) {
    let len = x.toString().length; 
    if (len === 1) {
        return x * y;
    }
        let a = Math.floor(x / 10 ** (len / 2));
        let b = x % (10 ** (len / 2));
        let c = Math.floor(y / (10 ** (len / 2)))
        let d = y % (10 ** (len / 2));
        let ac = multiply2(a, c);
        let bd = multiply2(b, d);
        let third = (a + b) * (c + d) - ac - bd;
        let result = (10**len * ac + 10**(len / 2) * third + bd);
        return result;
    
}
console.log( multiplyArrays (arr1, arr2));
// multiply2 ֆունցիան գրել եմ «բաժանիր և տիրիր» սկզբունքով։
// Ալգորիթմի complaxity-ն O(log n3) է։