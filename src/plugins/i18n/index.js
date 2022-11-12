import { createI18n } from "vue-i18n";

import en from "./lang/en.js";
import id from "./lang/id.js";

const i18n = new createI18n({
    legacy: false, // Vuetify does not support the legacy mode of vue-i18n
    locale: "en",
    fallbackLocale: "en",
    messages: { en, id }
});

export default i18n;