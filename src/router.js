import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue'
import Home from '@/components/Home'
import mapComponent from "@/components/mapComponent"
import countriesComponent from "@/components/countriesComponent"
import PhComponent from "@/components/PhComponent"
import globeComponent from "@/components/globeComponent"

Vue.use(IonicVueRouter)

const routes = [
    {path: `/`,component: Home,name: 'home'},
    {path: `/Globe`,component: globeComponent, name: 'Globe'},
    {path: `/Countries`,component:countriesComponent,name: 'Countries'},
    {path: `/Map`,component:mapComponent,name: `Map`},
    {path: `/Philippines`,component: PhComponent, name: 'Philippines'}
]

export default new IonicVueRouter(
    {mode:'history',hash: false,routes}
)