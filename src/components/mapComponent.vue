<template>
     <div class="ion-page" style="margin-top:50px !important;">
        <ion-content>

           <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)" pull-factor="0.5" pull-min="200" pull-max="300">
                 <ion-refresher-content
                    pulling-icon="arrow-dropdown"
                    pulling-text="Pull to refresh"
                    refreshing-spinner=""
                    refreshing-text="">
                </ion-refresher-content>
            </ion-refresher>

            <loadingComponent v-if="loading"/>
            <div v-show="!loading" style="background:#10362B;color:white;padding:8pt;">
                <span style="font-size:12pt;">Affected Countries: {{countries.length}}</span>
            </div>

      <l-map
      v-if="!loading"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 93%;"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
        >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker v-for="(country,index) in countries" :key="index" :lat-lng="country.latlon" :icon="country.icon">
        <l-popup>
          <div @click="innerClick" >
            <strong>{{country.country}}</strong><hr/>
            <span>Cases: {{country.cases}}</span><br/>
             <span>Recovered: {{country.recovered}}</span><br/>
             <span>Deaths: {{country.deaths}}</span>
          </div>
        </l-popup>
      </l-marker>

    </l-map>
  
        </ion-content>
    </div>
</template>

<script>
import L from 'leaflet'
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
// import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import loadingComponent from "@/components/loadingComponent"
import Axios from 'axios'

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    loadingComponent
    // LTooltip
  },
  data() {
    return {
      countries: [],
      zoom: 3,
      center: latLng( 12.8797, 121.7740),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '',
      withPopup: latLng(47.41322, -1.219482),
      withTooltip: latLng(47.41422, -1.250482),
      currentZoom: 2,
      currentCenter: latLng( 12.8797, 121.7740),
      mapOptions: {
        zoomSnap: 0.5
      },
      loading:true,
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },  
    innerClick() {
      // alert("Click!");
    },
    getData: function(){

            return new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                Axios.get('https://corona.lmao.ninja/v2/countries').then((res)=>{
                  resolve(res)
                }).catch(err=>reject(err))
                    },500)
              })

    
    },
       doRefresh: async function(event){
            this.loading = true
            this.getData().then((res)=>{
            this.loading = false
    
            const countries = res.data.map((data)=>{
              return {
                'country': data.country,
                'latlon': latLng(data.countryInfo.lat, data.countryInfo.long),
                'icon': L.icon({
                      iconUrl: data.countryInfo.flag,
                      iconSize: [20, 20],
                      iconAnchor: [16, 14]
                    }),
                'cases': data.cases,
                'recovered': data.recovered,
                'deaths': data.deaths,
              }
            })
            this.countries = countries
            event.target.complete()
          }).catch((err)=>alert(err))
        
        },
  },
  mounted(){
    
          this.getData().then((res)=>{
            this.loading = false
    
            const countries = res.data.map((data)=>{
              return {
                'country': data.country,
                'latlon': latLng(data.countryInfo.lat, data.countryInfo.long),
                'icon': L.icon({
                      iconUrl: data.countryInfo.flag,
                      iconSize: [20, 20],
                      iconAnchor: [16, 14]
                    }),
                'cases': data.cases,
                'recovered': data.recovered,
                'deaths': data.deaths,
              }
            })
            this.countries = countries
          }).catch((err)=>alert(err))
 
  

  }
};
</script>