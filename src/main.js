import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { pinia } from "./store";
import { loadFonts } from "./plugins/webfontloader";

import AppGlobalComponents from "./components/app";
import LayoutGlobals from "./components/layouts";

import router from "./router";

loadFonts();

createApp(App)
  .use(vuetify)
  .use(pinia)
  .use(router)
  .use(LayoutGlobals)
  .use(AppGlobalComponents)
  .mount("#app");
