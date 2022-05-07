import { createApp } from 'vue'
import App from './App'
import './styles/index.css'
import 'animate.css';
import {createPinia} from "pinia";

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
