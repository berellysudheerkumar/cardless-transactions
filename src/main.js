import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { plugin, defaultConfig } from '@formkit/vue'

createApp(App).use(router).use(plugin, defaultConfig).mount('#app')
