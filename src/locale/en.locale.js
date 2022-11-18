import en from 'vuetify/lib/locale/en'
import validator from '@/plugins/validator/locale/en'

export default {
    $vuetify: { ...en },
    ...validator,
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
