class NameInfo {
    constructor( name, resultText ) {
        this.name = name;
        this.resultText = resultText ;
    }
    async getNationalize(name) {
        await fetch( "https://api.nationalize.io?name=" + name )
            .then( res => res.json() )
            .then( data => {
                for ( let key of data.country ){
                    this.resultText.innerText += `\n ${key.country_id} - ${key.probability}`;
                }
            })
            .catch( err => {
                console.log( err );
            })
    }
    async getGenderize( name ) {
        await fetch( "https://api.genderize.io?name=" + name )
        .then( res => res.json() )
        .then( data => {
            if( data.gender === null ) {
                data.gender = "_";
            }
            data.name = name;
            this.resultText.innerText += `\n gender - ${data.gender}, probability - ${data.probability}, count - ${data.count} `;
            this.getNationalize( data.name );
        })
        .catch( err => { 
            console.log( err );
        })
    }
    async getAgify (){
        await fetch( "https://api.agify.io?name="+ this.name )
        .then( response => response.json() )
        .then( data => {
            if( data.age === null ) {
                data.age = "_";
            }
            this.resultText.innerText = `Name - ${data.name} , age - ${data.age}, count - ${data.count}`;
            this.getGenderize( data.name ); 
        })
        .catch( err => {
            console.log( err );
        });
    }
}
window.addEventListener( 'load', () => {
    let nameElement = document.getElementById( "name" );
    let getName = document.getElementById( "getName" );
    let resultText = document.getElementById( "resultText" );
    getName.addEventListener( 'click', () => {
        let name = nameElement.value;
        let nameInfo = new NameInfo( name, resultText );
        nameInfo.getAgify();
    });
});