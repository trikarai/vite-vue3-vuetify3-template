import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { pinia } from "./store"
import { loadFonts } from './plugins/webfontloader'
import AppGlobalComponents from './components/app/AppGlobals'

import router from './router'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(pinia)
  .use(router)
  .use(AppGlobalComponents)
  .mount('#app')
