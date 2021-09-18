export const BASE_CURRENCY = process.env.VUE_APP_BASE_CURRENCY;

export const SUPPORTED_CURRENCIES =
  process.env.VUE_APP_SUPPORTED_CURRENCIES.split(",");

export const currencies = {
  USD: {
    name: "US Dollar",
    code: "USD",
    symbol: "$",
  },
  EUR: {
    name: "Euro",
    code: "EUR",
    symbol: "€",
  },
  GBP: {
    name: "British Pound",
    code: "GBP",
    symbol: "£",
  },
  RUB: {
    name: "Russian Ruble",
    code: "RUB",
    symbol: "₽",
  },
};
