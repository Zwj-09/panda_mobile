import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'

import '@/assets/css/reset.css'

// 字体
import './assets/fonts/OPPOSans_B.css'
import './assets/fonts/OPPOSans_L.css'
import './assets/fonts/OPPOSans_H.css'
import './assets/fonts/OPPOSans_M.css'
import './assets/fonts/OPPOSans_R.css'

const app = createApp(App)

app.use(router).use(pinia).mount('#app')
