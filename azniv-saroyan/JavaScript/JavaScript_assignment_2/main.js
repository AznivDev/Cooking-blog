// 1
let year = prompt("Write year.");
if(year % 4 === 0) {
    if(year % 400 === 0) {
        if(year % 100 === 0) {
            alert("Year is a leap.");
        } 
    } else {
        alert("Year is a not leap.");
    }    
}

// 2
let month = "June";
switch(month) {
    case "January":
        console.log("There are 31 days in a month.");
        break;
    case "February":
        console.log("There are 29 days in a month.");
        break;
    case "March":
        console.log(console.log("There are 31 days in a month."));
        break;
    case "April":
        console.log("There are 30 days in a month.");
        break;
    case "May":
        console.log("There are 31 days in a month.");
        break;
    case "June":
        console.log("There are 31 days in a month.");
        break;
    case "July":
        console.log("There are 30 days in a month.");
        break;
    case "August":
        console.log("There are 31 days in a month.");
        break;
    case "September":
        console.log("There are 30 days in a month.");
        break;
    case "October":
        console.log("There are 31 days in a month.");
        break;
    case "Noveber":
        console.log("There are 30 days in a month.");
        break;
    case "December":
        console.log("There are 31 days in a month.");
        break;
    default:
        console.log("There is no such month.");
}

// 3
let number = 3586;
let sum = 0;
while(number) {
    sum += number % 10;
    number = (number - number % 10) /10;
}
console.log(sum);

// 4

let value = +prompt("Write a number");
let result = true;
if(typeof value === 'number' && !isNaN(value)) {
    if (value === 0 || value === 1){
        alert("This number is not a prime number."); 
    } else {
        for(let i = 2; i < value; i++) {
            if(value % i === 0) {
                alert("This number is not a prime number.");
                result = false;
                break;
            } 
        }  
        if(result === true) {
            alert("This number is a prime number.");
        }
    }
} else {
    alert("This value is not a number.");
}

// **

let string1 = "anna";
let string2 = "anna";
let result1 = true;
if(string1.length !== string2.length) {
    alert("This strings aren't palindrome.");
} else {
    for(let i = string1.length-1; i >= 0; i--){
        if(string1[i] === string2.charAt(string2.length - i - 1)) {
            continue;
        } else {
            alert("This strings aren't palindrome.");
            result1 = false;
            break;
        }
    }
    if(result1 === true) {
        alert("This strings are an palindrome.");
   } 
}


//  Տարբերակ մեկ string-ի համար։
// for(let i = string1.length-1; i >= 0; i--){
//     if(string1[i] === string1.charAt(string1.length - i - 1)) {
//         continue;
//     } else {
//         alert("This string isn't palindrome.");
//         result1 = false;
//         break;
//     }
// }

// if(result1 === true) {
//      alert("This strings is a palindrome.");
// } 
