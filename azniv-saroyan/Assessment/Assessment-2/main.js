class COVIDStatistics {
    constructor ( confirmed, confirmed_diff, deaths, deaths_diff, recovered, recovered_diff,  active,  active_diff, regions, coronavirousInfoTable, regionInfo, regionInfoChild1, regionInfoChild2, regionInfoChild3, regionInfoChild4, regionInfoChild5   ) {
        this.API_KEY = "25dbae095emshfbe3355717045c3p193d8ejsnf9f2094ef45c"
        this.options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': this.API_KEY,
                'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
            }
        }
        this.confirmed = confirmed;
        this.confirmed_diff = confirmed_diff;
        this.deaths = deaths ;
        this.deaths_diff= deaths_diff;
        this.recovered = recovered;
        this.recovered_diff = recovered_diff;
        this.active =active;
        this.active_diff = active_diff;
        this.regions = regions;
        this.coronavirousInfoTable = coronavirousInfoTable ;
        this.regionInfo = regionInfo;
        this.regionInfoChild1 = regionInfoChild1;
        this.regionInfoChild2 = regionInfoChild2;
        this.regionInfoChild3 = regionInfoChild3;
        this.regionInfoChild4 = regionInfoChild4;
        this.regionInfoChild5 = regionInfoChild5;
        this.dateInput = document.getElementById("date")
        this.date = new Date().toISOString().substring(0,10);
        this.checkedCountryIso;
        date.addEventListener( 'change', (e) => {
            this.date = e.target.value;
            this.getTotalReports()
        })   
        this.regions.addEventListener( 'change', (e) => { 
            this.regionItem = e.target.value;
            this.getReports(this.regionItem ) 
        })     
    }
    async getReports(regionItem ) {
        await fetch(`https://covid-19-statistics.p.rapidapi.com/reports?city_name=Autauga&region_province=Alabama&iso=USA&region_name=US&q=US%20Alabama&date=2020-04-16`, this.options )
            .then(response => response.json())
            .then(response => {
                    for( let i = 0; i < response.data[0].region.length; i++){
                        if(response.data[i].region.iso ===  regionItem){
                            console.log(response.data[i].region.iso)
                            console.log(response.data[i].region.long)
                            this.regionInfoChild1.innerHTML  = response.data[i].region.iso;
                            this.regionInfoChild2.innerHTML = response.data[i].region.name;
                            this.regionInfoChild3.innerHTML   = response.data[i].region.lat;
                            this.regionInfoChild4.innerHTML  = response.data[i].region.long;
                            this.regionInfoChild5.innerHTML  = response.data[i].region.province;
                        }
                    }
            
               console.log( response)
            })
            .catch(err => console.error(err));
    }  
    async getRegions (){
        await fetch('https://covid-19-statistics.p.rapidapi.com/regions', this.options )
            .then(response => response.json())
            .then(response => {
                for( let i = 0; i < response.data.length; i++){
                    this.regionItem = this.regions.appendChild( document.createElement("option") )
                    this.regionItem.innerHTML = response.data[i].name;  
                    this.regionItem.value  = response.data[i].iso;          
                }                
            })
            .catch(err => console.error(err));
    }           
    async getTotalReports () {
        await fetch(`https://covid-19-statistics.p.rapidapi.com/reports/total?date=${this.date}`, this.options )
            .then(response => response.json())
            .then(response => {
                this.confirmed.innerText = response.data.confirmed; 
                this.confirmed_diff.innerText = response.data.confirmed_diff;
                this.deaths.innerText = response.data.deaths; 
                this.deaths_diff.innerText = response.data.deaths_diff;
                this.recovered.innerText = response.data.recovered;
                this.recovered_diff.innerText = response.data.recovered_diff;
                this.active.innerText = response.data.active;
                this.active_diff.innerText = response.data.active_diff;   
            })
            .catch(err => console.error(err));
    }
}
window.addEventListener( 'load', () => {
    let confirmed = document.getElementById("confirmed");
    let confirmed_diff = document.getElementById("confirmed_diff");
    let deaths= document.getElementById("deaths");
    let deaths_diff= document.getElementById("deaths_diff");
    let recovered = document.getElementById("recovered");
    let recovered_diff = document.getElementById("recovered_diff");
    let active = document.getElementById("active");
    let active_diff = document.getElementById("active_diff");
    let regions = document.getElementById("regions");
    let coronavirousInfoTable = document.getElementById("coronavirousInfoTable");
    let regionInfo = document.getElementById("regionInfo");
    let regionInfoChild1 = document.getElementById("regionInfoChild1");
    let regionInfoChild2 = document.getElementById("regionInfoChild2");
    let regionInfoChild3 = document.getElementById("regionInfoChild3");
    let regionInfoChild4 = document.getElementById("regionInfoChild4");
    let regionInfoChild5 = document.getElementById("regionInfoChild5");
    const covidStatistics  = new COVIDStatistics (confirmed, confirmed_diff, deaths, deaths_diff, recovered, recovered_diff,  active,  active_diff, regions, coronavirousInfoTable, regionInfo, regionInfoChild1, regionInfoChild2, regionInfoChild3, regionInfoChild4, regionInfoChild5 );
    covidStatistics.getRegions();
    covidStatistics.getTotalReports ();
    covidStatistics.getReports();
});



