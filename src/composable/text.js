export function useCapitalize(data) {
  let capitalized = [];
  data.split(" ").forEach((word) => {
    capitalized.push(
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
  });
  return capitalized.join(" ");
}

export function useCurrencyFormat(data, options) {
  const defaultOptions = {
    minimumFractionDigits: 0,
    style: "currency",
    currency: "IDR",
  };

  if (!data) {
    return "-";
  } else {
    options !== null
      ? (options = { ...defaultOptions, ...options })
      : (options = {});
    return new Intl.NumberFormat("id-ID", options).format(data);
  }
}
