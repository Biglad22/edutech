import { createApp } from 'vue'
import './style.css'
import './styles/font-sizes.css'
import router from './router'
import App from './App.vue'
import store from './store'

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app')
