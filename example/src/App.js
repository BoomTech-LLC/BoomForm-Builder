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
        // {
        //   type: 'number',
        //   id: 10,
        //   placeholder: '',
        //   payable: 0,
        //   label: 'Number',
        //   validation: { HTMLValidate: true }
        // },
        // {
        //   type: 'multipleChoice',
        //   id: 11,
        //   columns: 1,
        //   options: [
        //     {
        //       key: 0,
        //       value: 'option1',
        //       label: 'option1  ',
        //       price: '',
        //       checked: false
        //     },
        //     {
        //       key: 1,
        //       value: 'option2',
        //       label: 'option2  ',
        //       price: '',
        //       checked: false
        //     },
        //     {
        //       key: 2,
        //       value: 'option3',
        //       label: 'option3  ',
        //       price: '',
        //       checked: false
        //     },
        //     {
        //       key: 'other',
        //       value: 'other',
        //       label: 'Other 12',
        //       placeholder: 'Other 123',
        //       checked: false
        //     }
        //   ],
        //   quantity: { enabled: true, label: 'Quantity 132', value: 132 },
        //   label: 'Select Some Choices',
        //   validation: { HTMLValidate: true }
        // }
        {
          type: 'singleChoice',
          id: 12,
          columns: 1,
          options: [
            { key: 0, value: '0', label: 'option1', price: '', checked: false },
            { key: 1, value: '1', label: 'option2', price: '', checked: false },
            { key: 2, value: '2', label: 'option3', price: '', checked: false }
          ],
          label: 'Select Single Choice',
          validation: { HTMLValidate: true }
        }
        // {
        //   type: 'select',
        //   id: 13,
        //   options: [
        //     { key: 'placeholder', value: 'Please choose...' },
        //     { key: 0, value: 'option1', label: 'option1  ', price: '' },
        //     { key: 1, value: 'option2', label: 'option2  ', price: '' },
        //     { key: 2, value: 'option3', label: 'option3  ', price: '' }
        //   ],
        //   payable: 1,
        //   label: 'Dropdown',
        //   validation: { HTMLValidate: true }
        // }
        // {
        //   type: 'price',
        //   id: 14,
        //   placeholders: { first: 'Dollars', last: 'Cents' },
        //   payable: 0,
        //   label: 'Price',
        //   validations: {
        //     first: { HTMLValidate: true },
        //     last: { HTMLValidate: true }
        //   }
        // }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
