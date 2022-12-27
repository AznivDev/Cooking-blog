window.addEventListener( 'load', () => {
    let currenciesContainer = document.getElementById( "currenciesContainer" );
    fetch( "https://api.coinbase.com/v2/currencies" )
        .then( response => response.json() )
        .then( response => {
            for( let i = 0; i < response.data.length; i++){
                    currenciesContainer.appendChild( document.createElement("option") )
                    .innerHTML =  response.data[i].id;
            }     
        })
        .catch( err => {
            console.log( err );
        })
});


