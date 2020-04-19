import Vue from 'vue'
import App from './App.vue'
import Ionic from '@ionic/vue'
import '@ionic/core/css/ionic.bundle.css'
import router from '@/router'
import { defineCustomElements } from '@ionic/pwa-elements/loader'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
 
Vue.use(Chartkick.use(Chart))

Vue.use(Ionic)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

defineCustomElements(window)
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
