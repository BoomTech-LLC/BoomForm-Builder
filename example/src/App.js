import React, { useState } from 'react'
import Builder from 'boomform-builder'

const App = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(1)

  return (
    <Builder
      global={{
        print: true,
        name: x,
        description: '456',
        innerComponent: (state) => {
          setTimeout(() => {
            setX(132)
            setY(456)
          })
        }
      }}
      fields={[
        {
          type: 'multipleChoice',
          id: 8,
          columns: 1,
          options: [
            {
              key: 0,
              value: 'option1',
              label: 'option1  ',
              price: '',
              checked: false
            },
            {
              key: 1,
              value: 'option2',
              label: 'option2  ',
              price: '',
              checked: false
            },
            {
              key: 2,
              value: 'option3',
              label: 'option3  ',
              price: '',
              checked: false
            },
            {
              key: 'other',
              value: 'other',
              label: 'Other',
              placeholder: 'Other',
              checked: false
            }
          ],
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
