import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
import pinia from './stores/index'
import quasar from './quasar';
const app = createApp(App)
app.use(quasar)
app.use(ArcoVue);
app.use(ArcoVueIcon);
app.use(router)
app.use(pinia)

app.mount('#app')
