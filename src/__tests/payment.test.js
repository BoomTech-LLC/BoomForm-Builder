import { formatPrice, getTotalPrice } from '../Helpers/payment'

describe('formatPrice({ payment, price })', () => {
  it('should return formatted string when valid values are passed ', () => {
    expect(
      formatPrice({
        payment: {
          showPrices: true,
          currency: 'EUR',
          format: '100$'
        },
        price: 15
      })
    ).toBe(' 15€')
    expect(
      formatPrice({
        payment: {
          showPrices: true,
          currency: 'MXN',
          format: '100$'
        },
        price: 15
      })
    ).toBe(' 15$')
    expect(
      formatPrice({
        payment: {
          showPrices: true,
          currency: 'HKD',
          format: '100$'
        },
        price: 15
      })
    ).toBe(' 15HK$')
  })
  it('should return an empty string or non-correct values when invalid values are passed', () => {
    expect(
      formatPrice({
        payment: {
          showPrices: false,
          currency: 'CAD',
          format: '100$'
        },
        price: 20
      })
    ).toBe('')
    expect(
      formatPrice({
        payment: {
          showPrices: true,
          currency: 'abc',
          format: '100$'
        },
        price: 20
      })
    ).toBe(' 20undefined')
    expect(
      formatPrice({
        payment: {
          showPrices: true,
          currency: 'CAD',
          format: '100'
        },
        price: 20
      })
    ).toBe(' 20')
    expect(
      formatPrice({
        payment: {
          showPrices: true,
          currency: 'CAD',
          format: '10$'
        },
        price: 20
      })
    ).toBe(' 10CA$')
    expect(
      formatPrice({
        payment: {
          showPrices: true,
          currency: 'CAD',
          format: '100$'
        },
        price: 0
      })
    ).toBe('')
  })
  it('should return correctly formatted prices based on numberFormat', () => {
    expect(
      formatPrice({
        payment: {
          showPrices: true,
          currency: 'USD',
          format: '100$',
          numberFormat: '10,000.00'
        },
        price: 12345.67
      })
    ).toBe(' 12,345.67$')

    expect(
      formatPrice({
        payment: {
          showPrices: true,
          currency: 'EUR',
          format: '100$',
          numberFormat: '10 000'
        },
        price: 12345
      })
    ).toBe(' 12 345€')

    expect(
      formatPrice({
        payment: {
          showPrices: true,
          currency: 'GBP',
          format: '100$',
          numberFormat: '10.000'
        },
        price: 12345
      })
    ).toBe(' 12.345£')

    expect(
      formatPrice({
        payment: {
          showPrices: true,
          currency: 'USD',
          format: '100$',
          numberFormat: '10K'
        },
        price: 12345
      })
    ).toBe(' 12K$')

    expect(
      formatPrice({
        payment: {
          showPrices: true,
          currency: 'USD',
          format: '100$',
          numberFormat: '10k'
        },
        price: 12345
      })
    ).toBe(' 12k$')
  })
})
