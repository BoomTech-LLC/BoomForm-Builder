import React, { useState } from 'react'
import { Builder } from 'boomform-builder'

const App = () => {
  const [total, setTotal] = useState(0)

  const payment = {
    currency: 'USD',
    fee: 0,
    format: '(+$100)',
    showTotal: false,
    yearly: false,
    showPrices: true,
    total,
    setTotal
  }

  return (
    <Builder
      global={{
        name: 'Name',
        description: 'Decription',
        captcha: '6LfLdQgeAAAAAAIAcsLtTxJJtSCY8jQ0K9uLgtOi'
      }}
      fields={[
        {
          type: 'number',
          id: 27,
          placeholder: '',
          payable: 'collect',
          label: 'Number',
          validation: { HTMLValidate: true }
        },
        {
          type: 'multipleChoice',
          id: 28,
          columns: 1,
          options: [
            {
              key: 0,
              value: 'option1',
              label: 'option1',
              price: 5,
              checked: false
            },
            {
              key: 1,
              value: 'option2',
              label: 'option2',
              price: 10,
              checked: false
            },
            {
              key: 2,
              value: 'option3',
              label: 'option3',
              price: 15,
              checked: false
            },
            {
              key: 'other',
              value: 'other',
              isNumber: true,
              label: 'Other',
              placeholder: 'Other',
              price: true,
              checked: false
            }
          ],
          quantity: { enabled: true, label: 'Quantity', value: 1 },
          label: 'Select Some Choices',
          validation: { HTMLValidate: true }
        },
        {
          type: 'singleChoice',
          id: 29,
          columns: 1,
          options: [
            { key: 0, value: '0', label: 'option1', price: 10, checked: false },
            { key: 1, value: '1', label: 'option2', price: 20, checked: false },
            { key: 2, value: '2', label: 'option3', price: 30, checked: false },
            {
              key: 'other',
              value: 'other',
              isNumber: true,
              label: 'Other',
              placeholder: 'Other',
              price: true,
              checked: false
            }
          ],
          quantity: { enabled: true, label: 'Quantity', value: 1 },
          label: 'Select Single Choice',
          validation: { HTMLValidate: true }
        },
        {
          type: 'select',
          id: 30,
          options: [
            { key: 'placeholder', value: 'Please choose...' },
            { key: 0, value: 'option1', label: 'option1', price: 50 },
            { key: 1, value: 'option2', label: 'option2', price: 100 },
            { key: 2, value: 'option3', label: 'option3', price: 150 },
            { key: 'other', value: 'Other', isNumber: true }
          ],
          payable: 1,
          quantity: { enabled: true, label: 'Quantity', value: 1 },
          label: 'Dropdown',
          validation: { HTMLValidate: true }
        },
        {
          type: 'price',
          id: 31,
          placeholders: { first: 'Dollars', last: 'Cents' },
          payable: 'collect',
          label: 'Price',
          validations: {
            first: { HTMLValidate: true },
            last: { HTMLValidate: true }
          }
        }
      ]}
      payment={payment}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
