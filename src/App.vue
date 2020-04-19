<template>

    <ion-app id="app">
         <ion-header>
            <ion-toolbar>
                <ion-title><span style="color:orange;">CO</span><span style="color:#4267B2">VID</span>-19 Updates</ion-title>
            </ion-toolbar>
        </ion-header>
        
            <!-- <ion-vue-router/> -->
            <tabComponent/>
     
    </ion-app>

</template>

<script>
import tabComponent from "@/components/bottomtabs"
import { Plugins } from '@capacitor/core'
export default {
  name: 'App',
  components: {
    tabComponent,
  },
  mounted(){
      this.$router.replace("/Globe")
      var app = this
      Plugins.App.addListener('backButton', function() { 
        
                if(app.$route.path == "/Globe"){
                   if(confirm("Exit Application?"))
                       Plugins.App.exitApp()  
                }
                this.$router.go(-1)       
                           
      });
  }
}
</script>
