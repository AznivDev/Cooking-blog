let result = document.getElementById("result");
let addValue = document.getElementsByName("addValue");
let arrChars = ["+", "-", "/", "*", "%"];

function resultOfCalculate() {
    let count = 0;
    for ( let i = 0; i < result.value.length; i++ ) {
        if ( arrChars.includes( result.value[i]) ) {
            count++;
        }
    }
    if ( count > 1 ) {
        let arrStore = result.value.split(" ");
        for( let i = 0; i < arrStore.length; i++ ) {
            if( arrStore[i] === "*" ) {
                arrStore[i] = arrStore[i-1] * arrStore[i+1];
                arrStore[i-1] = "";
                arrStore[i+1] = "";
            } else if ( arrStore[i] === "/" ) {
                arrStore[i] = arrStore[i-1] / arrStore[i+1];
                arrStore[i-1] = "";
                arrStore[i+1] = "";
            } 
        } 
        result.value = 0;
        for(let i = 0; i < arrStore.length; i++) {
            result.value += arrStore[i];
        }
        calculate();
    } else if ( count === 1 ) {
       calculate();
    }
}

// Past result in the input.
function calculate () {
    for ( let i = 0; i < result.value.length; i++ ) {
        let arr = [];
        if ( result.value[i] === "+" ) {
            arr = result.value.split("+");
            calcForTwoNumbers(arr);
        } else if ( result.value[i] === "-" ) {
            arr = result.value.split("-");
            calcForTwoNumbers(arr);
        } else if ( result.value[i] === "*" ) {
            arr = result.value.split("*");
            calcForTwoNumbers(arr);
        } else if ( result.value[i] === "/" ) {
            arr = result.value.split("/");
            calcForTwoNumbers(arr);
        } else if ( result.value[i] === "%" ) {
            arr = result.value.split("%");
            calcForTwoNumbers(arr);
        }
    }   
} 

// Calculate 2 numbers.
function calcForTwoNumbers(arr) {
    for ( let i = 0; i < result.value.length; i++ ) {
        for ( let j = 0; j < arr.length; j++ ) {
            
            let prev = +arr[j];
            let next = +arr[j + 1];

            if ( result.value[i] === "+" ) {
                result.value = prev + next;   
                isTextCorrect();
            } else if ( result.value[i] === "-" ){
                if( next < prev ) {
                    result.value = -(next - prev)
                } else {
                result.value = prev - next;
                }
                isTextCorrect();
            } else if ( result.value[i] === "*" ) {
                result.value = prev * next;
                    isTextCorrect();
            } else if( result.value[i] === "/" ) {
                result.value = prev / next;

            } else if( result.value[i] === "%" ) {
                result.value = prev / 100;
                    isTextCorrect();
            }
        }
    }
    return result.value;
}

// Check is textx correct?
function isTextCorrect() {
    if ( isNaN(result.value) ) {
        alert("Write the correct text.");
        result.value = "";
    }
}

// Remove all input.
function removeAllInput () {
    result.value = "";
}

// Remove one item in the input
function removeOneInput () {
    result.value = result.value.substring( 0, result.value.length - 1 );
}

 // In input  add target text
 for ( let value of addValue ) {
    value.addEventListener( 'click', (e) => {
        result.value += e.target.value;
    })
 }





