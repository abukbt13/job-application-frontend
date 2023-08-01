import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {ShFrontend} from '@iankibetsh/shframework'


import VueSweetalert2  from "vue-sweetalert2";

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
app.use(router)
app.use(VueSweetalert2)
app.use(ShFrontend,{
    sessionTimeout: 120
  })
  
app.mount('#app')
