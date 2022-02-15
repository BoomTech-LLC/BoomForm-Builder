import React from 'react'
import { Builder } from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: 'Name',
        description: 'Decription'
      }}
      fields={[
        {
          type: 'price',
          id: 22,
          placeholders: { first: 'Dollars', last: 'Cents' },
          payable: 'collect',
          label: 'Price',
          validations: {
            first: { HTMLValidate: true },
            last: { HTMLValidate: true }
          }
        },
        {
          type: 'text',
          id: 23,
          placeholder: '',
          label: 'Textbox',
          validation: { HTMLValidate: true }
        },
        {
          type: 'text',
          id: 24,
          placeholder: '',
          label: 'Textbox',
          validation: { HTMLValidate: true }
        },
        {
          type: 'name',
          id: 25,
          placeholders: { first: 'First', last: 'Last', middle: 'Middle' },
          label: 'Name',
          validations: {}
        }
      ]}
      pagination={{
        pages: [
          { title: 'Page 1', description: '', fields: [22, 25] },
          { title: 'Page 2', description: '', fields: [23] },
          { title: '', description: '', fields: [24] }
        ],
        initial: 0,
        buttons: { type: 1, next: 'Next', prev: 'Prev' },
        timeline: 1
      }}
      // payment={{
      //   currency: 'USD',
      //   fee: 0,
      //   format: '(+$100)',
      //   showTotal: false,
      //   label: 'Select Payment Method',
      //   type: 'oneTime',
      //   yearly: false,
      //   selectedField: '',
      //   showPrices: true,
      //   redirectUrl: '',
      //   methods: [
      //     {
      //       name: 'paypal',
      //       title: 'PayPal',
      //       enabled: true,
      //       tax: 0,
      //       email: '',
      //       openIn: 'new',
      //       yearlyDiscount: ''
      //     },
      //     {
      //       name: 'stripe',
      //       title: 'Credit Card',
      //       enabled: false,
      //       tax: '',
      //       publishKey: '',
      //       secretKey: '',
      //       options: [],
      //       isPromo: false,
      //       openIn: 'same'
      //     }
      //   ]
      // }}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
