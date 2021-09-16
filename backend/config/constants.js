const { config: initDotenv } = require('dotenv')

initDotenv()

const {
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  PORT
} = process.env

const currencies = [
	{name: "US Dollar", code: "USD", symbol: "$", rate: 1},
	{name: "Euro", code: "EUR", symbol: "€", rate: 0.897597},
	{name: "British Pound", code: "GBP", symbol: "£", rate: 0.81755},
	{name: "Russian Ruble", code: "RUB", symbol: "₽", rate: 63.461993}
];

function getCurrenciesExchangeURL (base = 'USD', symbols = ['EUR', 'GBP']) {
  return `https://api.exchangerate.host/latest?base=${base}&symbols=${symbols.join(',')}`
}

module.exports = {
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  PORT,
  currencies,
  getCurrenciesExchangeURL
}