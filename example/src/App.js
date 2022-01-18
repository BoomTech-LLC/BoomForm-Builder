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
        logic: true,
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
          type: 'name',
          id: 16,
          placeholders: { first: 'First', last: 'Last', middle: 'Middle' },
          validations: {}
        },
        {
          type: 'text',
          id: 22,
          placeholder: '',
          validation: { HTMLValidate: true }
        }
      ]}
      logic={[
        {
          id: 22,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 16, rule: 'is', item: 'first', value: 'barev' }]
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
