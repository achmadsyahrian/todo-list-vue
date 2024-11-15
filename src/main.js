import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Css
import '@/assets/css/app.css'
// Tailwind
import './assets/styles/tailwind.css';

createApp(App).use(router).mount('#app')
