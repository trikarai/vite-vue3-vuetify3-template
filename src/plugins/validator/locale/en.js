export default {
    // https://vuelidate-next.netlify.app/advanced_usage.html#i18n-support 
    // for looking another defined optional data message
    validations: {
        required: "{_field_} is required",
        requiredIf: "{_field_} is required",
        minLength: "This field should be at least {min} characters long",
        maxLength: "The maximum length allowed is {max}",
        email: "{_field_} is not a valid email address",
        alpha: "The {_field_} is not alphabetical",
        numeric: "{_field_} must be numeric",
        decimal: "{_field_} must be decimal",
        sameAs: "The {_field_} must be equal to the other value",
        minValue: "The minimum {_field_} allowed is {min}",
        maxValue: "The maximum {_field_} allowed is {max}",
    }
}
