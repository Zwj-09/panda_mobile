import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'

import '@/assets/css/reset.css'
import '@/assets/css/common.less'

// 字体
import './assets/fonts/OPPOSans_B.css'
import './assets/fonts/OPPOSans_L.css'
import './assets/fonts/OPPOSans_H.css'
import './assets/fonts/OPPOSans_M.css'
import './assets/fonts/OPPOSans_R.css'

import * as vConsole from 'vconsole'
// 手机端控制台
if (process.env.NODE_ENV !== 'production') {
  new vConsole()
}

const app = createApp(App)

app.use(router).use(pinia).mount('#app')
