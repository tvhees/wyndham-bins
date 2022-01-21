import { createApp } from "vue"
import Vue3TouchEvents from "vue3-touch-events"
import App from "./App.vue"
import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'
const svgs = import.meta.globEager('./icons/*.svg');
// This call is purely to prevent Tree shaking as the SVGs are used via plugin
svgs;

createApp(App)
    .use(Vue3TouchEvents)
    .use(OpenLayersMap)
    .mount('#app');
