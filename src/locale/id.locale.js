import id from 'vuetify/lib/locale/id'
import validator from '@/plugins/validator/locale/id'

import { collectLocaleFiles } from '@/plugins/i18n/helpers'; // Adjust the path if needed

const context = import.meta.glob('/src/modules/**/locale/**/id.locale.js');
const moduleFiles = Object.values(context).map((module) => module());

const collectedTranslations = async () => {
    const collectedFiles = await collectLocaleFiles(moduleFiles);

    return collectedFiles;
};

export default {
    $vuetify: { ...id },
    ...validator,
    ...(await collectedTranslations()),

    message: {
        hello: 'halo dunia',
        greeting: 'selamat pagi, dunia!'
    },
    myAccount: "Akun Saya",

    //field label
    fields: {
        first_name: "Nama depan",
        last_name: "Nama Belakang",
        email: "Email",
        phone_number: "Telepon",
        password: "Kata Sandi",
    }
}
