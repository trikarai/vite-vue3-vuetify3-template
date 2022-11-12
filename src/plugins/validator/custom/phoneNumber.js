export function phoneNumber(value) {
  if (!value) return true;
  let regex = /^[1-9][0-9]*$/;
  if (value.match(regex)) {
    return true;
  }
  return false;
}
