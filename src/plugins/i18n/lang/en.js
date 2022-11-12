import en from 'vuetify/lib/locale/en'

export default {
    $vuetify: { ...en },
    message: {
        hello: 'hello world',
        greeting: 'good morning, world!'
    },
    // https://vuelidate-next.netlify.app/advanced_usage.html#i18n-support 
    // for looking another defined optional data message
    validations: {
        required: "Value is required",
        requiredIf: "Value is required",
        minLength: "This field should be at least {min} characters long",
        maxLength: "The maximum length allowed is {max}",
        email: "Value is not a valid email address",
        alpha: "The value is not alphabetical",
        numeric: "Value must be numeric",
        decimal: "Value must be decimal",
        sameAs: "The value must be equal to the other value",
        minValue: "The minimum value allowed is {min}",
        maxValue: "The maximum value allowed is {max}",
    },
    myAccount: "My Account"
}