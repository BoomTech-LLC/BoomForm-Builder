export const currencys = {
  USD: '$',
  THB: '฿',
  EUR: '€',
  HUF: 'Ft',
  CHF: 'CHF',
  CZK: 'Kc',
  SEK: 'kr',
  MXN: '$',
  GBP: '£',
  MYR: 'RM',
  ILS: '₪',
  PLN: 'zl',
  HKD: 'HK$',
  CAD: 'CA$',
  INR: '₹',
  BRL: 'R$',
  AUD: 'A$',
  SGD: 'S$',
  NZD: 'NZ$'
}

export const formatPrice = ({ price, format = '(+$ 100)', currency }) => {
  if (price !== '' && price !== null && Number(price) !== NaN && price > 0)
    return format
      .toString()
      .replace('100', price)
      .replace('$', currencys[currency])
  else return ''
}
