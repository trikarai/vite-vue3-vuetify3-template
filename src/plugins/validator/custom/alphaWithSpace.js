export function alphaWithSpace(value) {
  if (!value) return true;
  let regex = /^[a-z ]*$/i;
  if (value.match(regex)) {
    return true;
  }
  return false;
}
