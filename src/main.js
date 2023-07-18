import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag';
const app = createApp(App)


app.use(VueGtag, {
    config: {
      id: 'G-T86B6WKJCJ'
    }
  });

app.use(router)

app.mount('#app')
