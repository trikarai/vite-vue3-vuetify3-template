// https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
// at least 1 uppercase && 1 lowercase && 1 number , allow special character, no whitespace
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{0,}$/
export function passwordValidator(value) {
  if (!value) return true;
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{0,}$/;
  if (value.match(regex)) {
    return true;
  }
  return false;
}
