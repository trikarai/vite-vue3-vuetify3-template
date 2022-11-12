import en from 'vuetify/lib/locale/en'
import validator from '@/plugins/validator/locale/en'

export default {
    $vuetify: { ...en },
    ...validator,
    message: {
        hello: 'hello world',
        greeting: 'good morning, world!'
    },
    myAccount: "My Account"
}