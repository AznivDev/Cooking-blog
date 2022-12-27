function multiply (x, y) {
    let len = x.toString().length;
    if (len === 1) {
        return x * y;
    } 
        let a = Math.floor(x / 10 ** (len / 2));
        let b = x % (10 ** (len / 2));
        let c = Math.floor(y / (10 ** (len / 2)))
        let d = y % (10 ** (len / 2));
        let ad = multiply(a, d);
        let ac = multiply(a, c);
        let bc = multiply(b, c);
        let bd = multiply(b, d);
        let returnValue = (10**len * ac + 10**(len / 2) * (ad + bc) + bd);
        return returnValue;
    
}
console.log(multiply(1100, 1800));
function multiply2 (x, y) {
    let len = x.toString().length; 
    if (len === 1) {
        return x * y;
    } else {
        let a = Math.floor(x / 10 ** (len / 2));
        let b = x % (10 ** (len / 2));
        let c = Math.floor(y / (10 ** (len / 2)))
        let d = y % (10 ** (len / 2));
        let ac = multiply2(a, c);
        let bd = multiply2(b, d);
        let third = (a + b) * (c + d) - ac - bd;
        let returnValue = (10**len * ac + 10**(len / 2) * third + bd);
        return returnValue;
    }
}
console.log(multiply2(12, 10));