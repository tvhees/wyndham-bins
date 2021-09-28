import { createApp } from "vue"
import Vue3TouchEvents from "vue3-touch-events"
import App from "./App.vue"
const svgs = import.meta.globEager('./icons/*.svg');
// This call is purely to prevent Tree shaking as the SVGs are used via plugin
svgs;

createApp(App)
    .use(Vue3TouchEvents)
    .mount('#app');
