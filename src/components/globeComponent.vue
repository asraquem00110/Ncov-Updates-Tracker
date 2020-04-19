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


           <ion-row>
                <ion-col>
                    <div class="panel blue">
                        <span>Affected Countries</span>
                        <p>{{totalData.affectedCountries}}</p>
                    </div>
                </ion-col>

                <ion-col>
                    <div class="panel yellow">
                        <span>Total Cases</span>
                        <p>{{totalData.cases}}</p>
                    </div>
                </ion-col>
           </ion-row>

           <ion-row>
                <ion-col>
                    <div class="panel green">
                         <span>Total Recoveries</span>
                        <p>{{totalData.recovered}}</p>
                    </div>
                </ion-col>

                <ion-col>
                    <div class="panel maroon">
                         <span>Total Deaths</span>
                        <p>{{totalData.deaths}}</p>
                    </div>
                </ion-col>
           </ion-row>
            
           <pie-chart :donut="true" :data="continentsData"></pie-chart>
           
        </ion-content>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    name: 'globeComponent',
    data: function(){
        return {
            item1: 'testdfd',
            item2: '',
            totalData: {},
            continentsData: [],
        }
    },
    methods: {
        doRefresh: async function(event){
            this.continentsData = []
            const totaldata = await this.getTotalData()
            this.totalData = totaldata.data
            const continentsdata = await this.getContinentsData()
            continentsdata.data.forEach((data)=>{
                this.continentsData.push([data.continent,data.cases])
            })

            event.target.complete()
        },
        saveLocal: function(){
            localStorage.setItem('testdata',this.item1)
        },
        retriveLocal: function(){
            this.item2 = localStorage.getItem('testdata')
        },
        getTotalData: function(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    Axios.get('https://corona.lmao.ninja/v2/all').then(res=>resolve(res)).catch(err=>reject(err))
                },0)
            })
        },
        getContinentsData: function(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    Axios.get('https://corona.lmao.ninja/v2/continents').then(res=>resolve(res)).catch(err=>reject(err))
                },0)
            })
        }
    },

    mounted(){
            this.getTotalData().then((res)=>{
                this.totalData = res.data
            }).catch(err=>alert(err))

            this.getContinentsData().then((res)=>{
              res.data.forEach((data)=>{
                  this.continentsData.push([data.continent,data.cases])
              })
            }).catch(err=>alert(err))
    }
}
</script>

<style scoped>
    div.panel {
        height: 100px;
        width:100%;
        border-radius: 10px;
        padding:10px;
        text-align: center;
        color:white;
    }

    span {
        width: 100%;
    }

    p {
        margin-top:15px;
        padding:0;
        font-size: 20pt;
        font-weight: bold;
    }

    .blue {
        background: #10362B;
    }

    .maroon {
        background: maroon;
    }

    .green {
        background: #26C281;
    }

    .yellow {
        background: #FFCC66;
    }
</style>