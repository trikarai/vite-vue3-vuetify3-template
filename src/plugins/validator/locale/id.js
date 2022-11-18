export default {
    // https://vuelidate-next.netlify.app/advanced_usage.html#i18n-support 
    // for looking another defined optional data message
    validations: {
        required: "{_field_} harus diisi",
        requiredIf: "{_field_} harus diisi",
        minLength: "Minimal {min} karakter yang harus diisi",
        maxLength: "Maksimal {max} karakter yang harus diisi",
        email: "{_field_} bukan alamat email yang valid",
        alpha: "{_field_} bukan alphabet",
        numeric: "{_field_} harus numerik",
        decimal: "{_field_} harus desimal",
        sameAs: "{_field_} harus sama dengan value yang lainnya",
        minValue: "Minimal {_field_} yang diperbolehkan itu {min}",
        maxValue: "Maksimum {_field_} yang diperbolehkan itu {max}"
    }
}
