<template>
    <ion-tabs>

      <ion-tab tab="globe" :routes="'Globe'">
          <!-- <globeComponent/> -->
          <router-view/>
      </ion-tab>

      <ion-tab tab="philippines" :routes="'Philippines'">
           <router-view/>
      </ion-tab>

      <ion-tab tab="countries" :routes="'Countries'">
            <!-- <countriesComponent/> -->
            <router-view/>
      </ion-tab>

      <ion-tab tab="Map" :routes="'Map'">
          <!-- <mapComponent/> -->
           <router-view/>
      </ion-tab>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="globe" :to="{name: 'Globe'}">
          <ion-label>World</ion-label>
         <ion-icon name="globe"></ion-icon>
        </ion-tab-button>
        <ion-tab-button tab="philippines" :to="{name: 'Philippines'}">
          <ion-label>Philippines</ion-label>
          <ion-icon name="flag"></ion-icon>
        </ion-tab-button>
        <ion-tab-button tab="countries" :to="{name: 'Countries'}">
          <ion-label>Countries</ion-label>
          <ion-icon name="airplane"></ion-icon>
        </ion-tab-button>
         <ion-tab-button tab="Map" :to="{name: 'Map'}">
          <ion-label>Map</ion-label>
          <ion-icon name="map"></ion-icon>
        </ion-tab-button>
     
     
      </ion-tab-bar>
    </ion-tabs>
</template>

<script>
// import globeComponent from "@/components/globeComponent"
// import mapComponent from "@/components/mapComponent"
// import countriesComponent from "@/components/countriesComponent"
export default {
    name: 'tabs',
    methods: {

    },
    components: {
        // globeComponent,
        // mapComponent,
        // countriesComponent,
    }
}
</script>

<style scoped>
  ion-tab-bar {
    --background: #10362B;
    --color:gray;
    --ion-color-primary: white;
  }
</style>