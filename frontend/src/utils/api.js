import {
  BASE_CURRENCY,
  SUPPORTED_CURRENCIES
} from 'utils/constants'

export default {
  donations: {
    async get() {
      const donaters = await request("http://localhost:9999/donations");

      return donaters;
    },
    async post(data) {
      const response = await request("http://localhost:9999/donations", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({...data})
      });

      return response;
    },
  },
  rates: {
    async get(
      { base, symbols } = {
        base: BASE_CURRENCY,
        symbols: SUPPORTED_CURRENCIES,
      }
    ) {
      const rates = await request(getCurrenciesExchangeURL(base, symbols));

      return rates;
    },
  },
};

async function request(url, options) {
  const response = await (await fetch(url, options)).json();

  return response;
}

function getCurrenciesExchangeURL(base, symbols) {
  // https://api.exchangerate.host/
  return `https://api.exchangerate.host/latest?base=${base}&symbols=${symbols.join(",")}`;
}
