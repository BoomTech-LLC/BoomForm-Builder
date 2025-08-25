import React from 'react'
import { Builder } from 'boomform-builder'

const App = () => {
  const builderProps = {
    button: { text: 'Submit Payment' },
    fields: [
      {
        type: 'singleChoice',
        id: 7,
        columns: 1,
        options: [
          {
            key: 1,
            value: '1',
            label: 'Item 2',
            price: 2,
            checked: false,
            limit: 400,
            count: 200
          },
          {
            key: 2,
            value: '2',
            label: 'Item 3',
            price: 3,
            checked: false,
            limit: 400,
            count: 80
          }
        ],
        validation: {
          HTMLValidate: true,
          required: { msg: 'This field is required.' }
        },
        label: "Select Items <span class='boomForm-field__label-star'>*</span>",
        quantity: { enabled: true, label: 'Quantity', value: 1 }
      },
      
    ]
  }


  return (
    <>
      <Builder {...builderProps} />
    </>
  )
}

export default App
