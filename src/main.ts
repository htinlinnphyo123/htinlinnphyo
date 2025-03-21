import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css' // Add this import
import { createPinia } from 'pinia'
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.mount('#app')
