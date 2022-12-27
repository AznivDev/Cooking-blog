class CoffeeShop {
    constructor (name, menu, orderedArr) {
        this.name = name;
        this.menu = menu;
        this.orderedArr = orderedArr;
        this.availableArr = [];
    }
    findavailableArr() {
        this.menu.forEach( element => {
        this.orderedArr.forEach( el => {
             if( el === element.item ) {
                this.availableArr.push(element.item);          
                } 
            });
        })
        return this.availableArr;
    }
    addOrder () {
        this.availableArr = [];
        this.findavailableArr();
        let arr = [];
        let num = this.orderedArr.length ;
        let  text = "is currently unavailable!"
        if( this.orderedArr.length === 0 ) {
            return " Please make a choice. "
        } 
        this.orderedArr.forEach( el => {
            if(!this.availableArr.includes(el)){
                arr.push(el + text);
                num--;
            }
        });  
        if ( arr.length > 0 && num > 0 ) {
            return `${arr}  Order added.`;
        } else if ( arr.length > 0 &&  num <= 0) {
            return arr;
        } else if ( num > 0 && arr.length <= 0 ) {
            return " Order added. ";
        } 
        return this.orderedArr ;
    }
    fulfillOrder () {
        let fullItemsArr = [];
        this.availableArr = [];
        this.findavailableArr();
        if ( !!!this.availableArr.length ) {
            return "All orders have been fulfilled!";
        } else {
            let fullTime = 0;
            this.availableArr.forEach( element => {
                this.menu.forEach( el => {
                    if (el.item === element) {
                        fullItemsArr.push(element);
                        fullTime += el.time;
                        setTimeout( () => {
                            alert(`The ${element} is ready! `)
                            console.log(`The ${element} is ready! `)
                            return `The ${element} is ready! `;
                        }, el.time);
                    }
                })
            }); 
            ////////////////////////////// alert-ով, consol-ով ճիշտ տպում է, return-ով՝ ոչ։
            function timeOut() {
                return new Promise((resolve) => {
                    resolve = setTimeout( () => {    
                        alert(`${fullItemsArr} are ready`);
                        console.log(`${fullItemsArr} are ready`);
                        return `${fullItemsArr} are ready`;
                }, fullTime ); 
                });
            }
            async function getFullFillOrder(){
                await timeOut();
            }
            getFullFillOrder();
        } 
    }
    listOrders () {
        this.availableArr = [];
        this.findavailableArr();
        if ( !this.availableArr.length ) {
            return "You haven't ordered anything.";
        } else {
           return this.availableArr;
        }
    }
    dueAmount () {
        let amount = 0;
        if( !this.orderedArr.length ) {
            return " 0. 0" ;
        } else {
            this.orderedArr.forEach( el => {
                this.menu.forEach( element => {
                    if ( element.item === el ) {
                        amount += element.price;
                    } 
                })
            })
            return amount + " dram";
        }
    }
    cheapestItem () {
        let pricesList = [], 
            sortPrices = [], 
            cheapestElement = {};
        pricesList = this.menu.map( el => {
            return el.price;
        });
        sortPrices = pricesList.sort( function(a, b) {
            return a - b;
        });
        cheapestElement = this.menu.find( el => {
           return el.price === sortPrices[0];
        });
        return cheapestElement.item + " - " + cheapestElement.price + " dram";  
    }
    drinksOnly () {
        let filteredDrinkArr = [], drinkArr = [];
        filteredDrinkArr = this.menu.filter( el => {
            return el.type === "drink";
        });
        drinkArr = Object.values(filteredDrinkArr).map( element => {
            return element.item + " - " + element.price + " dram";
        });
        return drinkArr;
    }
    foodOnly () {
        let filteredFoodsArr = [], foodsArr = [];
        filteredFoodsArr = this.menu.filter( el => {
           return el.type === "food"; 
        });
        foodsArr = Object.values(filteredFoodsArr).map( element => {
            return element.item + " - "  +  element.price + " dram ";
        });
        return foodsArr;
    }
}
document.addEventListener("DOMContentLoaded", () => {  
        let MENU = [
        {
            item: "Orange juice",
            type: "drink",
            price: 1400, 
            time: 1400
        },
        {
            item: "Lemonade",
            type: "drink",
            price: 800,
            time: 800
        },
        {
            item: "Cranberry juice",
            type: "drink",
            price: 1200,
            time: 1200
        },
        {
            item: "Pineapple juice",
            type: "drink",
            price: 700,
            time: 700
        },
        {
            item: "Lemon iced tea",
            type: "drink",
            price: 1300,
            time: 1300
        },
        {
            item: "Vanilla chai latte",
            type: "drink",
            price: 1500,
            time: 1500
        },
        {
            item: "Hot chocolate",
            type:"drink",
            price: 1250,
            time: 1250
        },
        {
            item: "Iced coffee",
            type: "drink",
            price: 1350,
            time: 1350
        },
        {
            item: "Tuna sandwich",
            type: "food",
            price: 1500,
            time: 1500
        },
        {
            item: "Ham and cheese sandwich",
            type: "food",
            price: 1100,
            time: 1100
        },
        // {
        //     item: "Bacon and egg",
        //     type: "food",
        //     price: 1200,
        //     time: 1200
        // },
        // {
        //     item: "Hamburger",
        //     type: "food",
        //     price: 1500,
        //     time: 1500
        // },
        {
            item: "Cinnamon roll",
            type: "food",
            price: 1600,
            time: 1600
        }
    ]
    let itemsForOrder = Array.from(document.getElementsByClassName("ordersItem") );
    let onlyFoodsBtn = document.getElementById( "onlyFoodsBtn" );
    let onlyDrinksBtn = document.getElementById( "onlyDrinksBtn" );
    let cheapestItemBtn = document.getElementById( "cheapestItemBtn" );
    let fullFillBtn = document.getElementById("fullFillBtn");
    let showItems = document.getElementById( "showItems" );
    let addOrderBtn = document.getElementById("addOrder");
    let addResetBtn = document.getElementById("reset");
    let feedbackMessage = document.getElementById("feedbackMessage");
    let listOrdersBtn = document.getElementById("listOrdersBtn");
    let dueAmountBtn = document.getElementById("dueAmountBtn");
    let name = "CoffeeHouse";
    let orderedArr = [];
    let unOrderedArr = [];
    itemsForOrder.forEach( el => {
        el.addEventListener( "change", (e) => {
            if( e.target.value === "true" ) {
                orderedArr.push( e.target.name );
                e.target.value = "false";
            } else if( e.target.value === "false" ){
                e.target.value = "true";
                unOrderedArr = orderedArr.filter( el => {
                    return el !== e.target.name;
                });
                orderedArr = unOrderedArr.filter( el => {
                    return el !== e.target.name;
                });
            }
        });
    });
    addResetBtn.addEventListener( "click", () => {
        window.location.reload();
    });
    let coffeeHouse = new CoffeeShop( name, MENU, orderedArr );
    addOrderBtn.addEventListener( "click", () => {
        feedbackMessage.innerHTML = coffeeHouse.addOrder();
        //consle-ում թարմեցված array-ն է տպում ավելեցնել֊պակասացնելուց հետո, բայց class֊ը միշտ
        //աշխատում է առաջին անգամ add արած array-ով։
        console.log(orderedArr);
    });
    cheapestItemBtn.addEventListener( 'click', () => {
        showItems.innerHTML = coffeeHouse.cheapestItem();
    });
    onlyFoodsBtn.addEventListener( 'click', () => {
        showItems.innerHTML = coffeeHouse.foodOnly();
    });
    onlyDrinksBtn.addEventListener( 'click', () => {
        showItems.innerHTML = coffeeHouse.drinksOnly();
    });
    fullFillBtn.addEventListener( 'click', () => {
        feedbackMessage.innerHTML = coffeeHouse.fulfillOrder();
    });
    listOrdersBtn.addEventListener( 'click', () => {
        feedbackMessage.innerHTML = coffeeHouse.listOrders();
    });
    dueAmountBtn.addEventListener( 'click', () => {
        feedbackMessage.innerHTML = coffeeHouse.dueAmount();
    });
});

