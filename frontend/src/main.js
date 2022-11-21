import { createApp } from 'vue'
import App from './App.vue'
// import {router} from './routes/index.js'
import axios from 'axios'


const app = createApp(App);
// app.provide('$axios', axios);
app.config.globalProperties.$axios = axios;
app.mount('#app');
