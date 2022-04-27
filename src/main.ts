import { createApp } from 'vue'
import App from './App'
import './styles/index.css'
import 'animate.css';

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

createApp(App).mount('#app')
