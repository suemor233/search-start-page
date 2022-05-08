import { createApp } from 'vue'
import App from './App'
import './styles/index.css'
import 'animate.css';
import {createPinia} from "pinia";

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
