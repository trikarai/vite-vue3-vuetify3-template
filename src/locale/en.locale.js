import en from 'vuetify/lib/locale/en'
import validator from '@/plugins/validator/locale/en'

import { collectLocaleFiles } from '@/plugins/i18n/helpers'; // Adjust the path if needed

const context = import.meta.glob('/src/modules/**/locale/**/en.locale.js');
const moduleFiles = Object.values(context).map((module) => module());

const collectedTranslations = async () => {
    const collectedFiles = await collectLocaleFiles(moduleFiles);

    return collectedFiles;
};

export default {
    $vuetify: { ...en },
    ...validator,
    ...(await collectedTranslations()),

    message: {
        hello: 'hello world',
        greeting: 'good morning, world!'
    },
    myAccount: "My Account",

    //field label
    fields: {
        first_name: "First Name",
        last_name: "Last Name",
        email: "Email",
        phone_number: "Phone",
        password: "Password",
    }
}
