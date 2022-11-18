import id from 'vuetify/lib/locale/id'
import validator from '@/plugins/validator/locale/id'

export default {
    $vuetify: { ...id },
    ...validator,
    message: {
        hello: 'halo dunia',
        greeting: 'selamat pagi, dunia!'
    },
    myAccount: "Akun Saya"
}