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
      fields={[
        {
          type: 'text',
          id: 8,
          placeholder: '',
          label: "Textbox <span class='boomForm-field__label-star'>*</span>",
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          }
        },
        {
          type: 'singleChoice',
          id: 7,
          columns: 1,
          options: [
            { key: 0, value: '0', label: 'option1', price: '', checked: false },
            { key: 1, value: '1', label: 'option2', price: '', checked: false }
          ],
          label:
            "Select Single Choice <span class='boomForm-field__label-star'>*</span>",
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          }
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
