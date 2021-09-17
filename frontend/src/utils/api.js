export default {
  donations: {
    async get() {
      const donaters = await request("http://localhost:9999/donations");

      return donaters;
    },
    async post() {
      const response = await request("http://localhost:9999/donations", {
        method: "POST",
      });

      return response;
    },
  },
  rates: {
    async get(
      { base, symbols } = {
        base: "USD",
        symbols: ["EUR", "GBP"],
      }
    ) {
      const rates = await request(
        `/rates${getCurrenciesExchangeURL(base, symbols)}`
      );

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
  return `/latest?base=${base}&symbols=${symbols.join(",")}`;
}
