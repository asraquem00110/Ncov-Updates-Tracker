<template>
      <div class="ion-page" style="margin-top:50px !important;">
            <ion-content class="ion-padding">
                       <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)" pull-factor="0.5" pull-min="100" pull-max="200">
                            <ion-refresher-content
                                pulling-icon="arrow-dropdown"
                                pulling-text="Pull to refresh"
                                refreshing-spinner="circles"
                                refreshing-text="">
                            </ion-refresher-content>
                        </ion-refresher>

                     <ion-row>
                            <ion-col size="4">
                                 <img style="height:100%;width:100%" :src="phData.countryInfo.flag"/>         
                            </ion-col>
                            <ion-col style="padding:5px 10px 5px; 10px;">
                                    <div style="width:100%;background:#10362B;color:white;padding:2px;text-align:center;border-radius:10px;margin-bottom:3px;">
                                    <span>Philippines</span>
                                    </div>
                                    
                                    <small><strong>Cases:</strong> {{phData.cases}}</small><br/>
                                    <small><strong>Recovered:</strong> {{phData.recovered}}</small><br/>
                                    <small><strong>Deaths:</strong> {{phData.deaths}}</small>

                            </ion-col>
                        </ion-row>
                                 <div style="background:#10362B;color:white;padding:8pt;margin-top:5px;text-align:center;">
                                    <span style="font-size:10pt;">Data Last 7 Days </span>
                                </div>
                               <line-chart style="height:75%;width:100%;" :data="datagraph" :dataset="{borderWidth: 2}"></line-chart>
                                
            </ion-content>
    </div>
</template>
<script>
import Axios from 'axios'

export default {
    name: 'PhComponent',
    data: function(){
        return {
            phData: {},
            pieData: [['Active', 44], ['Recovered', 23],['Deaths',20]],
            datagraph: [
                {name: 'Cases', data: {},color:'blue'},
                {name: 'Deaths', data: {},color:'red'},
                {name: 'Recovered', data: {},color:'green'},
                
        ]
        }
    },
    methods: {
        getData: function(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    Axios.get(`https://corona.lmao.ninja/v2/countries/Philippines`).then((res)=>resolve(res)).catch((err)=>reject(err))
                },0)
            })
        },
        getHistory: function(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    Axios.get(`https://corona.lmao.ninja/v2/historical/Philippines`).then((res)=>resolve(res)).catch((err)=>reject(err))
                },0)
            })
        },
        doRefresh: async function(event){
            const resultData = await  this.getData()
            this.phData = resultData.data
            const resutlHistory = await this.getHistory()

            const Cases = resutlHistory.data.timeline.cases
            const Deaths = resutlHistory.data.timeline.deaths
            const Recovered = resutlHistory.data.timeline.recovered
            const lastCases = []
            const lastDeaths = []
            const lastRecovered = []

            this.prepareData(Cases,lastCases)
            this.prepareData(Recovered,lastRecovered)
            this.prepareData(Deaths,lastDeaths)

            for(let x = 0 ; x < lastCases.length ; x++){
                if(x > 0) {
                    this.datagraph[0].data[`_${lastCases[x].property}_`] = lastCases[x].cases - lastCases[x-1].cases 
                    this.datagraph[1].data[`_${lastDeaths[x].property}_`] = lastDeaths[x].cases - lastDeaths[x-1].cases   
                    this.datagraph[2].data[`_${lastRecovered[x].property}_`] = lastRecovered[x].cases - lastRecovered[x-1].cases 
                }
            }      

               event.target.complete()
        },

        prepareData: function(ObjectData,ArrayData){
            let x = 0
            for(let property in ObjectData){
                if((Object.keys(ObjectData).length - x) <= 8){
                    ArrayData.push({property:property,cases:ObjectData[property]})
                }
                x++
            }
        }

    },
    mounted(){
        this.getData().then((res)=>{
            this.phData = res.data
        }).catch(err=>alert(err))

        this.getHistory().then((res)=>{
            const Cases = res.data.timeline.cases
            const Deaths = res.data.timeline.deaths
            const Recovered = res.data.timeline.recovered
            const lastCases = []
            const lastDeaths = []
            const lastRecovered = []

            this.prepareData(Cases,lastCases)
            this.prepareData(Recovered,lastRecovered)
            this.prepareData(Deaths,lastDeaths)

            for(let x = 0 ; x < lastCases.length ; x++){
                if(x > 0) {
                    this.datagraph[0].data[`_${lastCases[x].property}_`] = lastCases[x].cases - lastCases[x-1].cases 
                    this.datagraph[1].data[`_${lastDeaths[x].property}_`] = lastDeaths[x].cases - lastDeaths[x-1].cases   
                    this.datagraph[2].data[`_${lastRecovered[x].property}_`] = lastRecovered[x].cases - lastRecovered[x-1].cases 
                }
            }        
       
        }).catch(err=>alert(err))


        
    },
    components: {
     
    }
}
</script>