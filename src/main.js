import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag';
import emitter from './mitt';
const app = createApp(App)


app.use(VueGtag, {
    config: {
      id: 'G-T86B6WKJCJ'
    }
  });
  app.config.globalProperties.$mitt = emitter;
app.use(router)

app.mount('#app')