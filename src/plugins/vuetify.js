// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { useI18n } from 'vue-i18n'

import i18n from './i18n/index'

export default createVuetify({
    locale: {
        adapter: createVueI18nAdapter({ i18n, useI18n })
    }
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
