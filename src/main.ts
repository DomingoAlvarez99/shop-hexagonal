import { createApp } from 'vue'
import App from './ui/App.vue'
import router from './router'
import { primeVue } from './prime-vue'

createApp(App)
  .use(primeVue)
  .use(router)
  .mount('#app')