import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(PrimeVue)
app.use(createPinia())
app.mount('#app')