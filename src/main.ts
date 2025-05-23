// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './assets/style/reset.css';
import router from './router'
const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')