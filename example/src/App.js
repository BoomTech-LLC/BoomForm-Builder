import React, { useState } from 'react'
import { Builder } from 'boomform-builder'

const App = () => {
  const [total, setTotal] = useState(0)

  return (
    <Builder
      global={{
        name: 'Name',
        description: 'Decription'
      }}
      fields={[
        {
          type: 'text',
          id: 32,
          placeholder: '',
          label: 'Textbox',
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
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
