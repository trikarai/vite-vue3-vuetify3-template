import { createI18n } from "vue-i18n";

import en from "@/locale/en.locale.js";
import id from "@/locale/id.locale.js";

const i18n = new createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: "id",
  fallbackLocale: "en",
  messages: { en, id },
});

export default i18n;
