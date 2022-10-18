export function longitude(value) {
  if (!value) return true;
  let regex =
    /^[+-]?((([1-9]?[0-9]|1[0-7][0-9])(\.[0-9]{1,15})?)|180(\.0{1,15})?)$/;
  if (value.match(regex)) {
    return true;
  }
  return false;
}
