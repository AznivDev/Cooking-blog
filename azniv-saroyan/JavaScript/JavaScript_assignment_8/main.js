let boxParent = document.getElementById("boxParent");
let box = document.getElementById("box");
let marginLeftSize = 0;

function setInterVal () {
    stopAddingMargin = setInterval( function(){
        marginLeftSize += 50;
        boxParent.style.marginLeft = `${marginLeftSize}px`; 
    }, 500 );  
}
box.addEventListener( 'dblclick', function() {
    setInterVal();
});
boxParent.addEventListener( 'click', function() {
    clearInterval(stopAddingMargin);
});

// 2
class Timer {
    constructor() {
        this.minuteInput = document.getElementById('minuteInput');
        this.submitBtn = document.getElementById('submitBtn');
        this.minute = document.getElementById('minute');
        this.seconde = document.getElementById('seconde');
        this.milliseconde = document.getElementById('milliseconde');
        this.stopBtn = document.getElementById('stopBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.editBtn = document.getElementById('editBtn');
        this.milliseconde.value = 100;
        this.seconde.value = 60;
    } 
    reset() {
        this.minute.value = 0;
        this.minute.innerText = this.minute.value;
        this.seconde.value = 0;
        this.seconde.innerText = this.seconde.value;
        this.milliseconde.value = 0;
        this.milliseconde.innerText = this.milliseconde.value;
        this.minuteInput.value = "";                       
    }  
    render() {
       this.submitBtn.addEventListener( 'click', () => { 
            this.resetBtn.addEventListener( 'click', () => {
                this.reset();
                clearInterval(id);
            });
            this.stopBtn.addEventListener( 'click', () => {
                clearInterval(id);
            });
            let inputNumber = Number( this.minuteInput.value );
            this.editBtn.addEventListener('click', () => {
                inputNumber = Number( this.minuteInput.value );
                this.milliseconde.value = 0;
                this.seconde.value = 0;
            })
            if( inputNumber === 0 ){
                this.reset();
                clearInterval(id);
            } else if( inputNumber > 0 ){
                this.minute.innerText = inputNumber;
            }
        
            let id = setInterval( function() {
                if( this.milliseconde.value >= 1 ){
                    this.milliseconde.innerText = this.milliseconde.value;
                    this.seconde.innerText = this.seconde.value;
                    this.milliseconde.value--;
                } else if ( this.milliseconde.value <= 1 ){
                    this.milliseconde.innerText = this.milliseconde.value;
                    this.milliseconde.value = 100;
                    this.milliseconde.innerText = this.milliseconde.value;
                    this.milliseconde.value--;
                    if( this.seconde.value > 1 ) {
                        this.seconde.innerText = this.seconde.value;
                        this.seconde.value--;
                    } else if ( this.seconde.value <= 1 ) {
                        this.seconde.innerText = this.seconde.value;
                        this.seconde.value = 60;
                        this.seconde.innerText = this.seconde.value;
                        inputNumber--;
                        if ( inputNumber >= 1 ) {
                            this.minute.innerText = inputNumber;
                        } else if ( inputNumber === 0 ) {
                            this.minute.innerText = this.minute.value;
                            this.seconde.value = 0;
                            this.seconde.innerText = this.seconde.value;
                            this.milliseconde.value = 0;
                            this.milliseconde.innerText = this.milliseconde.value;
                            this.minute.innerText = 0;
                            this.minuteInput.value = 0;
                            clearInterval(id);
                        }
                    }
                }    
            }, 0);
       });
    }
}
document.addEventListener( "DOMContentLoaded", () => {
    const timer = new Timer();
    timer.render();
});

//3
function delayedUpperCase(item){
    return new Promise( (resolve, reject) => {
        if ( typeof item === 'string' ) {
            setTimeout(()=>{
                resolve( item.toUpperCase() );
            }, 500);    
        } else {
            setTimeout( ()=>{
            reject(item)
            }, 500 )
        }
    })
}
delayedUpperCase( "Yereven" )
    .then( (result) => {
        console.log(result);
    } ).catch( (error)=>{
        console.log(error);
    });

