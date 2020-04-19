<template>
    <div class="ion-page" style="margin-top:40px !important;">
        
        <ion-content class="ion-padding">
                    
           <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)" pull-factor="0.5" pull-min="100" pull-max="200">
                 <ion-refresher-content
                    pulling-icon="arrow-dropdown"
                    pulling-text="Pull to refresh"
                    refreshing-spinner="circles"
                    refreshing-text="">
                </ion-refresher-content>
            </ion-refresher>
                <ion-item>
                    <ion-input placeholder="Search Country" :value="search" @ionChange="search = $event.target.value"></ion-input>           
                </ion-item>

                <ion-button size="small" style="--background:#10362B;width:93%;margin-left:5%" @click="searchCountry()"  expand="block">Search</ion-button>
                 <ion-content style="height:80%;width:100%;" ref="countrylist">
                <ion-list>
                    <ion-item v-for="(country,index) in finalcountries" :key="index">
                        <ion-row>
                            <ion-col size="4">
                                 <img style="height:70%;width:90%" :src="country.flag"/>         
                            </ion-col>
                            <ion-col style="padding:5px 10px 5px; 10px;">
                                    <div style="width:100%;background:dimgray;color:white;padding:2px;text-align:center;border-radius:10px;margin-bottom:3px;">
                                    <span>{{country.country}}</span>
                                    </div>

                                    <small><strong>Cases:</strong> {{country.cases}}</small><br/>
                                    <small><strong>Recovered:</strong> {{country.recovered}}</small><br/>
                                    <small><strong>Deaths:</strong> {{country.deaths}}</small>

                            </ion-col>
                        </ion-row>
                    </ion-item>
                </ion-list>

                    <ion-infinite-scroll threshold="100px" ref="infiniteScroll">
                        <ion-infinite-scroll-content
                        loading-spinner="bubbles"
                        loading-text="Loading more data...">
                        </ion-infinite-scroll-content>
                    </ion-infinite-scroll>
                 </ion-content>
        </ion-content>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    name: 'countriesComponent',
    data: function(){
        return {
            search: '',
            countries: [],
            length: 0,
            finalcountries: [],
            filtercount: 20,
        }
    },
    methods: {
        doRefresh: async function(event){
            this.countries = []
            this.finalcountries = []
           
             this.getAll().then((res)=>{
                const countries = res.data.map((data)=>{
                return {
                    'country': data.country,
                    'flag': data.countryInfo.flag,
                    'cases': data.cases,
                    'recovered': data.recovered,
                    'deaths': data.deaths,
                }
                })
                this.countries = countries
                this.length = 0
                this.$refs.countrylist.scrollToTop()
                this.appendcountry(20)
                this.search = ""
               
                event.target.complete()
            }).catch(err=>alert(err))
               

            },
        searchCountry: function(){
     
        if(this.search.length>0){
                      this.countries = []
             this.finalcountries = []
             this.getCountry().then((res)=>{
             const data = res.data
             const country ={
                'country': data.country,
                'flag': data.countryInfo.flag,
                'cases': data.cases,
                'recovered': data.recovered,
                'deaths': data.deaths,
             }
                
                this.finalcountries.push(country)
                this.filtercount = 20
            }).catch(err=>alert(err))
        }
            
        },
        getAll: function(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    Axios.get('https://corona.lmao.ninja/v2/countries').then(res=>resolve(res)).catch(err=>reject(err))
                },500)
            })
        },
        getCountry: function(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    Axios.get(`https://corona.lmao.ninja/v2/countries/${this.search}`).then(res=>resolve(res)).catch(err=>reject(err))
                },500)
            })
        },
        appendcountry: function(num){
             
                    var originalLength = this.length

                     const remaining = (this.countries.length - originalLength)
                     const filtercount = remaining < num ? remaining : num
                    for(let x = 0 ; x < filtercount; x++){
                        this.finalcountries.push(this.countries[x+originalLength])
                        this.length++;
                    }
        }
    },

    mounted(){

        var app = this
        this.getAll().then((res)=>{
             const countries = res.data.map((data)=>{
              return {
                'country': data.country,
                'flag': data.countryInfo.flag,
                'cases': data.cases,
                'recovered': data.recovered,
                'deaths': data.deaths,
              }
            })
            this.countries = countries
            this.appendcountry(20)
        }).catch(err=>alert(err))

    

            const infiniteScroll = this.$refs.infiniteScroll

            infiniteScroll.addEventListener('ionInfinite', function(event) {
        
            setTimeout(function() {
                console.log('Done');
                event.target.complete();

                if(app.length == app.countries.length){
                    //  event.target.disabled = true;
                     console.log('No More Data');
                }else{
                     app.appendcountry(20)
                }

                
            }, 200);
            });

         
           

    }
}
</script>