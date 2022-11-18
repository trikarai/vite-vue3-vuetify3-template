export default {
    // https://vuelidate-next.netlify.app/advanced_usage.html#i18n-support 
    // for looking another defined optional data message
    validations: {
        required: "Value harus diisi",
        requiredIf: "Value harus diisi",
        minLength: "Minimal {min} karakter yang harus diisi",
        maxLength: "Maksimal {max} karakter yang harus diisi",
        email: "Value bukan alamat email yang valid",
        alpha: "Value bukan alphabet",
        numeric: "Value harus numerik",
        decimal: "Value harus desimal",
        sameAs: "Value harus sama dengan value yang lainnya",
        minValue: "Minimal value yang diperbolehkan itu {min}",
        maxValue: "Maksimum value yang diperbolehkan itu {max}"
    }
}
