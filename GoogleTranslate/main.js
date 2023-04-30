class TranslateText {
    constructor ( textForTranslate, translatedItem, languageFrom, languageTo ) {
        this.MY_API_KEY = "0f333ce161msh12fab9e600fa8e7p1efb5ajsna425f9c4761a";
        this.languageFrom = languageFrom;
        this.languageTo = languageTo;
        this.textForTranslate = textForTranslate;
        this.translatedItem = translatedItem;
    }
    async getLanguages () {  
      const encodedParams = new URLSearchParams();
      encodedParams.append( "q", "English is hard, but detectably so" );
      const options = {
          method: 'POST',
          headers: {
              'content-type': 'application/x-www-form-urlencoded',
              'Accept-Encoding': 'application/gzip',
              'X-RapidAPI-Key': this.MY_API_KEY,
              'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
          },
          body: encodedParams
      };
      await fetch( 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect/', options )   
          .then( response => response.json() )
          .then( response => {
              //response.data.detections[0][0].language = this.languageTo;
              response.data?.detections[0][0]?.language
          })
          .catch( err => console.error(err) );
    }
    async detect () {
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", "English is hard, but detectably so");
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': this.MY_API_KEY,
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            body: encodedParams
        };
        await fetch( 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect', options )
            .then( response => response.json() )
            .then( response => {  
                //response.data.detections[0][0].language = this.languageFrom;
                response.data?.detections[0][0]?.language
            })
            .catch( err => console.error(err) );
    }
    async translate () {
        const encodedParams = new URLSearchParams();
        encodedParams.append( 'q', this.textForTranslate );
        encodedParams.append( "target", this.languageTo );
        encodedParams.append( "source", this.languageFrom );
        const options = {
    	    method: 'POST',
    	    headers: {
    		    'content-type': 'application/x-www-form-urlencoded',
    		    'Accept-Encoding': 'application/gzip',
    		    'X-RapidAPI-Key': this.MY_API_KEY,
    		    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    	    },
    	    body: encodedParams
        };
        await fetch( 'https://google-translate1.p.rapidapi.com/language/translate/v2/', options )
    	    .then( response => response.json() )
    	    .then( response => {
                this.translatedItem.value = response.data.translations[0].translatedText;
          })
    	    .catch( err => console.error(err) );
    }
}
window.addEventListener( 'load',  () => {
    let languagesContainerfrom = document.getElementById( "languagesContainerfrom" );
    let languagesContainerTo = document.getElementById( "languagesContainerTo" );
    let itemForTranslate = document.getElementById( "textForTranslate" );
    let translatedItem = document.getElementById( "translatedItem" );
    let translateButton = document.getElementById( "translateButton" );
    let textForTranslate = "", languageFrom = "en", languageTo ="hy";
    languagesContainerTo.addEventListener( 'change', (event) => {
        languageTo = event.target.value;
    });
    languagesContainerfrom.addEventListener( 'change', (event) => {
        languageFrom = event.target.value;
        return languageFrom;
    });
    itemForTranslate.addEventListener( 'keyup', () => {
        textForTranslate = itemForTranslate.value;
        return textForTranslate;
    });
    translateButton.addEventListener( 'click', () => {
    let translateText = new TranslateText( textForTranslate, translatedItem, languageFrom, languageTo ); 
        translateText.getLanguages();
        translateText.detect() ;
        translateText.translate(); 
    }); 
});




