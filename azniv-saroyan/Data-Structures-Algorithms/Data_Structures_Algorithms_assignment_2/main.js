// Write a program to find X n based on this recurrent relation: X n = X n − 2 + X n − 3 + 8 ,
// X 0 = X 1 = X 2 = 0 .
function findXN(x, n){
    //Ստուգում ենք, եթե n հավասար է 0 կամ 1 կամ 2 վերադարձնում ենք 0
    if( n === 0 || n === 1 || n === 2 ) {
        return 0;
    //հակառակ դեպքում գումարում ենք ռեկուրսիայով կանչված ֆունկցիաների պատասխանները և 8-ը՝
    //ֆունկցիաներին տալով արգումենտ x֊ը, n-2  և x֊ը, n-3։
    } else {
        return findXN( x, n - 2 ) + findXN( x, n - 3 ) + 8;
        //վերջում վերադարձնում ենք արդյունքը։
    }
}
console.log(findXN(2, 5));  // O(n)
// Given a string, find out whether it is a palindrome or not. There are iterative ways to
// solve this problem, but you must solve it recursively.
function isPalindrome (str) {
    //Եթե զանգվածի երկարությունը 2-ից փոքր է, վերադարձնում ենք true։
    if ( str.length  < 2 ) return true;
    //Հակառակ դեպքում համեմատում ենք զանգվածի առաջին ու վերջին անդամները։
    //Եթե հավասար չեն, վերադարձնում ենք false, հակառակ դեպքում
    //ռեկուրսիայով կանչում ենք ֆունկցիան՝ այս անգամ որպես արգումենտ նրան տալով
    //զանգվածն առանց առաջին ու վերջին անդամների, այսինքն երկու կողմից մեկական անդամով 
    //կրճատած, քանի որ նրանց արդեն համեմատել, վերջացրել ենք։
    if ( str[0] === str[str.length  - 1] ) {
        return isPalindrome( str.slice(1, str.length - 1) );
    }
    return false;
}
console.log(isPalindrome("amdda")); // O(log(n))
// Read from the input numbers X and n and recursively compute X . Ideally, your
// algorithm complexity must be O(log(N)). (You can google “binpower” to find the
// algorithm, but you must implement it yourself).
function getBinpower( x, n ) {
    //Եթե n հավասար է 0, վերադարձնում ենք 1
    if (n === 0) {
        return 1;
    } 
    //Հակատակ դեպքում ռեկուրսիայով կանչում ենք ֆունկցիան n-ի փոխարեն փոխանցելով նրա կեսը՝
    //կլորացրած դեպի ներքև։
    let result = getBinpower(x, Math.floor( n / 2))
    //Եթե n % 2 հավասար է 1, ապա վերադարձնում ենք ֆունկցիայի պատասխան անգամ ֆունկցիայի 
    //պատասխան անգամ x։
    if(n % 2) {
        return result * result  * x;
    }  return result * result;
    //հակառակ դեպքում՝ վերադարձնում ենք ֆունկցիայի պատասխան անգամ ֆունկցիայի պատասխան
}
console.log(getBinpower(9, 3)); //O(log(n))



