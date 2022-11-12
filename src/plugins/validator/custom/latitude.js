export function latitude(value) {
  if (!value) return true;
  let regex = /^[+-]?(([1-8]?[0-9])(\.[0-9]{1,15})?|90(\.0{1,15})?)$/;
  if (value.match(regex)) {
    return true;
  }
  return false;
}
