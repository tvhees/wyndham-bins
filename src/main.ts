import { createApp } from 'vue'
import App from './App.vue'
const svgs = import.meta.globEager('./icons/*.svg');
svgs;

console.log(svgs);

createApp(App).mount('#app')
