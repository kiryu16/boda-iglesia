import { createApp } from 'vue'
import 'eva-icons/style/eva-icons.css'
import './css/app.scss'
import App from './App.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App).mount('#app')

AOS.init()
