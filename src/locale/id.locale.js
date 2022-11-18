import id from 'vuetify/lib/locale/id'
import validator from '@/plugins/validator/locale/id'

export default {
    $vuetify: { ...id },
    ...validator,
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
