import * as validators from "@vuelidate/validators";
import i18n from "@/plugins/i18n";

// https://vuelidate-next.netlify.app/advanced_usage.html#i18n-support

const { createI18nMessage } = validators;

// const messagePath = ({ $validator }) => `${i18n.global.t(`validations.${$validator}`)}`

const messagePath = ({ $validator }) => `validations.${$validator}`;
const messageParams = (params) => ({
    ...params,
    _field_: params._field_ ? i18n.global.t(`fields.${params._field_}`) : i18n.global.t(`fields.${params.property}`),
});

const withI18nMessage = createI18nMessage({ t: i18n.global.t.bind(i18n), messagePath, messageParams });

export const required = withI18nMessage(validators.required);
export const minLength = withI18nMessage(validators.minLength, { withArguments: true });
export const maxLength = withI18nMessage(validators.maxLength, { withArguments: true });
export const minValue = withI18nMessage(validators.minValue, { withArguments: true });
export const maxValue = withI18nMessage(validators.maxValue, { withArguments: true });
export const email = withI18nMessage(validators.email);
export const alpha = withI18nMessage(validators.alpha);
export const numeric = withI18nMessage(validators.numeric);
export const decimal = withI18nMessage(validators.decimal);
export const sameAs = withI18nMessage(validators.sameAs, { withArguments: true });
export const requiredIf = withI18nMessage(validators.requiredIf, { withArguments: true });
