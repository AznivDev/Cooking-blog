// 1
function reverseNumber (number) {
    let result = 0;
    while (number){
        result = (result * 10) + (number % 10);
        number = Math.floor(number / 10);
    }
    return result;
}
console.log(reverseNumber(45678));


// 2
let count = 0;
function countAVowels (word) {
    for(let i = 0; i < word.length; i++) {
        if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u" ||
            word[i] === "A" || word[i] === "E" || word[i] === "I" || word[i] === "O" || word[i] === "U") {
            count++;
        }  
    }
    return count;
}
console.log( countAVowels("Ararat"));

// ** Percentage calculator
let calcPrecentageInputOne = document.getElementById("calcPrecentageInputOne");
let calcPrecentageInputTwo = document.getElementById("calcPrecentageInputTwo");
let calcPrecentageResult = document.getElementById("calcPrecentageResult");
let calcPrecentageBottomInputOne = document.getElementById("calcPrecentageBottomInputOne");
let calcPrecentageBottomInputTwo = document.getElementById("calcPrecentageBottomInputTwo");
let calcPrecentageBottomResult = document.getElementById("calcPrecentageBottomResult");

function calcPrecentage (){
    calcPrecentageResult.value = parseInt(calcPrecentageInputTwo.value) / 100 * parseInt(calcPrecentageInputOne.value);
    if(isNaN(calcPrecentageResult.value )){
        alert ("Please write a numbers.");
        return;
    }
    return false;
}
function calcPrecentageBottom (){
    calcPrecentageBottomResult.value = parseInt(calcPrecentageBottomInputTwo.value) / 100 * parseInt(calcPrecentageBottomInputOne.value);
    if(isNaN(calcPrecentageBottomResult.value )){
        alert ("Please write a numbers.");
        return;
    }
    return false;
}


