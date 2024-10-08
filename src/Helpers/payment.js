import { getHiddenIds } from './logic'

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

export const formatPrice = ({ payment, price, shouldFormat }) => {
  const { showPrices, currency, format, numberFormat } = payment
  if (shouldFormat) {
    if (
      showPrices &&
      price !== '' &&
      price !== null &&
      Number(price) !== NaN &&
      price > 0
    ) {
      return (
        ' ' +
        format
          .toString()
          .replace('100', price)
          .replace('$', currencys[currency])
      )
    } else return ''
  }
  if (
    showPrices &&
    price !== '' &&
    price !== null &&
    Number(price) !== NaN &&
    price > 0
  ) {
    let formattedPrice

    switch (numberFormat) {
      case '10 000':
        formattedPrice = price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        break
      case '10,000':
        formattedPrice = price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        break
      case '10.000':
        formattedPrice = price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        break
      case '10000':
        formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '')
        break
      case '10,000.00':
        formattedPrice = price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        break
      case '10,000.0':
        formattedPrice = price.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        break
      case '10K':
        formattedPrice = (price / 1000).toFixed(0) + 'K'
        break
      case '10k':
        formattedPrice = (price / 1000).toFixed(0) + 'k'
        break
      default:
        formattedPrice = price.toString()
    }

    return (
      ' ' +
      format.replace('100', formattedPrice).replace('$', currencys[currency])
    )
  } else {
    return ''
  }
}

export const getTotalPrice = ({
  values,
  fields,
  fee,
  logic,
  getTotalValue
}) => {
  let sum = fee || 0

  const logicIds = getHiddenIds({
    logic,
    values,
    fields
  })
  if(getTotalValue){
    return getTotalValue({values , fields , fee  , logicIds })
  }
  fields.map((field) => {
    let { type, id } = field

    if (logicIds.fields.includes(id)) return null

    if (type === 'number' && field.payable === 'collect')
      sum += parseFloat(values[id]) || 0

    if (
      type === 'price' &&
      field.payable === 'collect' &&
      values[id] !== null &&
      values[id] !== undefined
    ) {
      const { first, last } = values[id]
      const price = parseFloat(`${first}.${last}`)
      if (!isNaN(price)) sum += price
    }

    if (
      type === 'singleChoice' &&
      values[id] !== null &&
      values[id] !== undefined
    ) {
      let value = values[id]
      const { options } = field
      let quantity = 1
      if (values['quantity']) {
        quantity = parseInt(values['quantity'][id] || 1)
      }
      const [option] = options.filter((option) => option.key == value)

      if (value !== null && value !== undefined && value !== 'other') {
        let newPrice = 0
        if (option?.price) newPrice = option.price

        sum += newPrice * quantity
      } else if (
        option?.key === 'other' &&
        values['other'] &&
        values['other'][id] &&
        option?.price
      ) {
        sum += parseFloat(values['other'][id]) * quantity
      }
    }

    if (
      type === 'multipleChoice' &&
      values[id] !== null &&
      values[id] !== undefined
    ) {
      const selectedIds = []
      Object.keys(values[id]).forEach((_id) => {
        if (values[id][_id]) selectedIds.push(_id)
      })
      const { options } = field
      let newPrice = 0
      selectedIds.forEach((sid) => {
        const [option] = options.filter((option) => option.key == sid)
        let quantity = 1
        if (values['quantity'] && values['quantity'][id]) {
          quantity = parseInt(values['quantity'][id][sid] || 1)
        }
        if (
          sid === 'other' &&
          values['other'] &&
          values['other'][id] &&
          option.price
        ) {
          newPrice += parseFloat(values['other'][id]) * quantity
        } else if (sid !== 'other' && option) {
          if (option.price) newPrice += option.price * quantity
        }
      })
      sum += newPrice
    }

    if (type === 'select' && values[id] !== null && values[id] !== undefined) {
      let { key, price, value } = values[id]
      let quantity = 1
      if (values['quantity']) {
        quantity = parseInt(values['quantity'][id] || 1)
      }
      if (key === 'placeholder') return
      if (key === 'other' && values['other']) {
        sum = sum + parseFloat(values['other'][id]) * quantity
      } else if (key !== 'other') {
        if (price !== undefined && price !== null && price !== '') {
          sum = sum + price * quantity
        }
      }
    }
  })

  return Math.round((sum + Number.EPSILON) * 100) / 100
}
