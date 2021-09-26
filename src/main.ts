import { createApp } from 'vue'
import App from './App.vue'
const svgs = import.meta.globEager('./icons/*.svg');
// This call is purely to prevent Tree shaking as the SVGs are used via plugin
svgs;

createApp(App).mount('#app')
