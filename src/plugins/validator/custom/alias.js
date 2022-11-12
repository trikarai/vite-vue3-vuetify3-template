export function alias(value) {
  if (!value) return true;
  let regex = /^[A-Za-z0-9_@#-]*$/i;
  if (value.match(regex)) {
    return true;
  }
  return false;
}
