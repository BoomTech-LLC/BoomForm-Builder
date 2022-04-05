import React, { useState } from 'react'
import { Builder } from 'boomform-builder'

const App = () => {
  const [total, setTotal] = useState(0)

  return (
    <Builder
      global={{
        name: 'Name',
        description: 'Decription',
        isPrint: true
      }}
      payment={{
        setTotal,
        total
      }}
      fields={[
        {
          type: 'multipleChoice',
          id: 7,
          columns: 1,
          options: [
            {
              key: 0,
              value: 'option1',
              label: 'option1',
              price: '',
              checked: true
            }
          ],
          label:
            "Select Some Choices <span class='boomForm-field__label-star'>*</span>",
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          }
        },
        {
          type: 'text',
          id: 8,
          placeholder: '',
          label: 'Textbox',
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
