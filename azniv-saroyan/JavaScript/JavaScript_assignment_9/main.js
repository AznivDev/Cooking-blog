class Beers {
    constructor (itemBeer) {
        this.wrapper = document.getElementById("wrapper");
        this.itemContainer = document.createElement("div");
        this.oneBeerItem = document.createElement("div");
        this.name = document.createElement("p");
        this.imageItem = document.createElement("div");
        this.image = document.createElement("img");
        this.description = document.createElement("div");
        this.firstBrewed = document.createElement("div");
        this.buttonShowMore =  document.createElement("a");
        this.itemBeer = itemBeer;
        this.id = this.itemBeer.id;
    }
    setAtributs() {
        this.itemContainer.setAttribute("id", "itemContainer");
        this.oneBeerItem.setAttribute("id", "beersList");
        this.name.setAttribute("id", "name");
        this.imageItem.setAttribute("id", "imageItem");
        this.description.setAttribute("id", "description");
        this.firstBrewed.setAttribute("id", "firstBrewed");
        this.buttonShowMore.setAttribute("id", "buttonShowMore");
        this.buttonShowMore.innerText = "SHOW MORE";
    }
    getBeers () {
        this.wrapper.appendChild(this.itemContainer);
        this.itemContainer.appendChild( this.oneBeerItem );
        this.itemContainer.appendChild( this.buttonShowMore );
        this.oneBeerItem.appendChild( this.name )
                        .innerText = this.itemBeer.name;
        this.imageItem.appendChild( this.image  );
        this.oneBeerItem.appendChild( this.image )
                        .src = this.itemBeer.image_url;
        this.oneBeerItem.appendChild( this.description )
                        .innerText = this.itemBeer.description;
        this.oneBeerItem.appendChild( this.firstBrewed )
                        .innerText = this.itemBeer.first_brewed;
        this.setAtributs()
        return this.wrapper;
    }
    render () {
        setTimeout(()=> {
            document.getElementById( "loaderContainer" ).style = "display: none";
            this.getBeers ();   
        }, 2000);
    }
}
window.addEventListener( 'load', () => {
    fetch( "https://api.punkapi.com/v2/beers" )   
        .then( res => res.json() )
        .then( data => {
            for( key in data ){
                let itemBeer = data[key];
                let beers = new Beers(itemBeer);
                    beers.render();
                }
        })
        .catch( console.log("Error") );
});