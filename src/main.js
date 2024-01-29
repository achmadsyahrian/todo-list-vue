import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Css
import '@/assets/css/app.css'

createApp(App).use(router).mount('#app')
